import { invalid, redirect, error } from '@sveltejs/kit'

// db collections
import { branches } from "$db/collections/branches"
import { results} from "$db/collections/results"


export async function load() {
  try {
    let query = { "branch.code": "002" }
    let opt = { projection: { _id: 0 } }

    return {
      branchInfo: (await branches.find(query, opt).toArray())[0]
    }
  } catch (err) {
    console.log(`Result page Error: ${err}`)
    return {}
  }
};


export const actions = {
  report: async ({ request }) => {
    const frm = Object.fromEntries(await request.formData())
    let { studtId, session, term, reportType } = frm


    studtId = studtId.trim() // trim white spaces

    try {
      // get result db
      let query = { 'meta.studtId': studtId, 'meta.session': session }
      let opt = { projection: { _id: 0 } }
      let result = await results.findOne(query, opt)
      
      // if not found
      if (result === undefined || result === null) {
        return invalid(400, { error: true, msg: 'No Such record can be found for this student'})
      }
  
      return {
        success: true,
        goto: `/result/doc?doc=${studtId}&term=${term}&session=${session}&report=${reportType}`,
        data: result
      }
    } catch (err) {
      console.error(err)
      throw error(500, { message: 'Server Error, please try again in a little while' })
    }
  }
};
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
  return {};
};


export const actions = {
  report: async ({ request }) => {
    const frm = await request.formData()
    let studtId = (frm.get('studtId')).trim() // trim any white spaces
    let session = frm.get('session')
    let term = frm.get('term')
    let reportType = frm.get('reportType')

    let objData = {studtId, session, term, reportType }

    try {
      // get result db
      let query = { 'meta.studtId': objData.studtId }
      let opt = { projection: { _id: 0 } }
      let result = await results.findOne(query, opt)
      
      // if not found
      if (result === undefined) {
        return invalid(400, { error: 'No Such record can be found for this student'})
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
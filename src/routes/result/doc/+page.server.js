import { results } from "$db/collections/results"
import { payments } from '$db/collections/payments'
import { error, redirect } from "@sveltejs/kit"


export async function load({ url }) {
  const studt = url.searchParams.get('doc')
  const term = url.searchParams.get('term')
  const session = url.searchParams.get('session')
  // type of report(midTerm or exam)
  const reportType = url.searchParams.get('report')

  // if non of the required info is undefined redirect user back to result homepage
  if (!studt || !term || !session || !reportType) {
    throw redirect(307, '/result')
  }
  
  try {
    /*  Query the results collection/table */
    let query = { "meta.studtId": studt, "meta.session": session }
    let opt = { projection: { _id: 0 } }
    let result = await results.findOne(query, opt)
    
    /* Query the payments collection/table */
    let pytQuery = { 'meta.session': session, branchCode: '002', 'meta.studtId': studt }
    pytQuery[`payment.${term}`] = true
    let pytOpt = { projection: { _id: 0 } }
    let payment = await payments.findOne(pytQuery, pytOpt)

    // if no payment can be found for the current term within the session
    if (payment === null) {
      return {
        docId: studt,
        stdName: result.meta.name,
        pay: null,
        reportFor: { studt, term, session, reportType }
      }
    }

    return {
      docId: studt,
      result,
      reportFor: { studt, term, session, reportType }
    }
  } catch (err) {
    console.log(`Error Result Page: ${err}`)
    throw error(500, { message: "Server Error, Please try again in a little while" })
  }
}
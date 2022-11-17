import { results } from "$db/collections/results"
import { error } from "@sveltejs/kit"


export async function load({ url }) {
  const studt = url.searchParams.get('doc')
  const term = url.searchParams.get('term')
  const session = url.searchParams.get('session')
  const report = url.searchParams.get('report')
  
  try {
    let query = { "meta.studtId": studt }
    let opt = { projection: { _id: 0 } }
    let result = await results.findOne(query, opt)
    // console.log(result)
    
    // console.log({ studt, term, session, report })
    return {
      docId: studt,
      result,
      reportFor: { studt, term, session, report }
    }
  } catch (err) {
    console.log(`Error Result Page: ${err}`)
    throw error(500, { message: "Server Error, Please try again in a little while" })
  }
}
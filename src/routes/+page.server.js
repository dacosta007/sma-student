import { branches } from "$db/collections/branches"

export async function load() {
  try {
    let query = { "branch.code": "002" }
    let opt = { projection: { _id: 0 } }

    return {
      branchInfo: (await branches.find(query, opt).toArray())[0]
    }
  } catch (err) {
    console.log(`Home page Error: ${err}`)
    return {}
  }
}
import { branches } from "$db/collections/branches"

export async function load() {
  // const baseUrl = 'https://getpantry.cloud/apiv1/pantry/8e96f3a9-a647-4f37-931d-586203d634b3/basket'
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
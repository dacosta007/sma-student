import { startDB } from "$db/mongo";

// start db(to run ones whatn the server first loads)
startDB().then(() => {
  console.log('MongoDB started')
}).catch(err => {
  console.error(err)
})

// export const handle
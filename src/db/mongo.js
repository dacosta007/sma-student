import { MONGO_URL } from "$env/static/private"
import { MONGO_URL_PROD } from "$env/static/private";
import { MongoClient } from "mongodb";

const client = new MongoClient(MONGO_URL_PROD)

export function startDB() {
  console.log('Starting DB!...')
  return client.connect()
}

export const db = client.db('sch')

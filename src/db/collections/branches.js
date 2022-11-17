import { db } from "$db/mongo"

export const branches = db.collection('branches')
import { db } from "$db/mongo"

export const payments = db.collection('payments')
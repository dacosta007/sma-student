import { db } from "$db/mongo"

export const students = db.collection('students')
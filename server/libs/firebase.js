import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

admin.initializeApp({
  credential: admin.credential.applicationDefault(), // o usa una clave .json si estás en producción
});

const db = getFirestore();
export { db };

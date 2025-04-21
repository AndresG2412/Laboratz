// Este módulo se encarga de crear un mazo de cartas a partir de los nombres almacenados en Firestore

// Importamos la instancia de Firestore que configuramos con firebase-admin
import { db } from "../libs/firebase.js";

// Función asincrónica que obtiene los nombres de las cartas desde Firestore
export async function createDeck() {
    // Arreglo donde se almacenarán todas las cartas generadas
    const deck = []; 
    
    // Obtenemos el ID de todos los documentos dentro de la colección 'Cartas'
    // Esto trae todos los documentos como un array
    const id = await db.collection('Cartas').get();

    // Recorremos los documentos y extraemos el campo "Nombre" de cada uno
    const cartasNames = id.docs.map(doc => doc.data().Nombre);

    // Recorremos el array de nombres de cartas y los agregamos al array 'deck'
    for (let i = 0; i < cartasNames.length; i++) {
        deck.push(cartasNames[i]);
        // Mostramos los nombres de las cartas por consola
        console.log("En la posicion "+[i]+" esta: "+cartasNames[i]);
    }

    // Devolvemos el array de nombres de cartas
    return cartasNames; 
}

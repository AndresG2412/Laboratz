import express from "express"; // ✅
import { createServer } from "http";
import { Server } from "socket.io";

// Creamos una instancia de Express
const app = express();

// Creamos un servidor HTTP basado en Express (necesario para usar con Socket.IO)
const httpServer = createServer(app);

// Configuramos Socket.IO y habilitamos CORS para que el cliente que corre en Vite (localhost:5173) pueda conectarse
const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:5173', // Origen permitido
        methods: ['GET','POST'] // Métodos HTTP permitidos
    }
});

const roomManager = new RoomManager(); // Instancia de la clase RoomManager para manejar las salas de juego

// Manejamos conexiones entrantes a través de WebSockets
io.on('connection', (socket) => {
    console.log("Usuario se ha conectado", socket.id);

    socket.on('createRoom', () => {
        const roomId = roomManager.createRoom(); // Creamos una nueva sala
    })
});

// Iniciamos el servidor en el puerto 3000
httpServer.listen(3000, () => {
    console.log(`Server is running on port ${3000}`);
});
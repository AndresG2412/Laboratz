// Este módulo se encarga de administrar las salas del juego, como crear nuevas salas y gestionar los jugadores dentro de ellas.

// Importamos el paquete 'uuid' para generar IDs únicos para las salas
import { v4 as uuidv4 } from 'uuid';

// Definimos una clase llamada RoomManager.
// Esta clase se encargará de manejar las salas del juego: crearlas, guardarlas, controlarlas, etc.
export class RoomManager {
    
    // El constructor se ejecuta automáticamente al crear una nueva instancia de RoomManager
    constructor() {
        // Creamos un Map vacío para almacenar las salas activas
        // La clave será el ID de la sala, y el valor será el objeto de la sala
        this.rooms = new Map();
    }

    // Método para crear una nueva sala
    createRoom() {
        const roomId = uuidv4(); // Generamos un ID único

        // Creamos y almacenamos la sala
        this.rooms.set(roomId, {
            id: roomId,
            players: [],       // Lista de jugadores en la sala
            status: "waiting", // Estado inicial: esperando jugadores
        });

        return roomId; // Devolvemos el ID de la nueva sala
    }

    // Método para obtener una sala por su ID
    getRoom(roomId) {
        return this.rooms.get(roomId);
    }

    // Método para agregar un jugador a una sala
    addPlayerToRoom(roomId, player) {
        const room = this.getRoom(roomId);

        // Verificamos si la sala existe y tiene espacio (máximo 2 jugadores)
        if (room && room.players.length < 2) {
            room.players.push(player);
        }
    }

    // Método para marcar a un jugador como listo
    setPlayerReady(roomId, playerId) {
        const room = this.getRoom(roomId);
        if (room) {
            const player = room.players.find(p => p.id === playerId);
            if (player) {
                player.ready = true;
            }
        }
    }

    // Método para verificar si todos los jugadores están listos
    areAllPlayersReady(roomId) {
        const room = this.getRoom(roomId);
        return room ? room.players.every(p => p.ready) : false;
    }

    // Método para que un jugador salga de la sala
    leaveRoom(roomId, playerId) {
        const room = this.getRoom(roomId);
        if (room) {
            room.players = room.players.filter(p => p.id !== playerId);

            // Si ya no hay jugadores, eliminamos la sala automáticamente
            if (room.players.length === 0) {
                this.deleteRoom(roomId);
            }
        }
    }

    // Método para eliminar una sala por completo
    deleteRoom(roomId) {
        if (this.rooms.has(roomId)) {
            this.rooms.delete(roomId);
        }
    }

    // Método para obtener la cantidad de jugadores en una sala
    getRoomSize(roomId) {
        const room = this.getRoom(roomId);
        return room ? room.players.length : 0;
    }

    // Método para obtener una lista de todas las salas activas (por ejemplo para debug o mostrar en el frontend)
    getAllRooms() {
        return Array.from(this.rooms.values());
    }

    // Método para cambiar el estado de la sala (por ejemplo de "waiting" a "playing")
    setRoomStatus(roomId, newStatus) {
        const room = this.getRoom(roomId);
        if (room) {
            room.status = newStatus;
        }
    }
}

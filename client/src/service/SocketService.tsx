// src/services/socketService.ts
import { io, Socket } from 'socket.io-client';

class SocketService {
    private socket: Socket | null = null;

    connect() {
        this.socket = io();
    }

    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
        }
    }

    emit(event: string, data: any) {
        if (this.socket) {
            this.socket.emit(event, data);
        }
    }

    on(event: string, callback: (data: any) => void) {
        if (this.socket) {
            this.socket.on(event, callback);
        }
    }
}

export default new SocketService();

import http from 'http';
import SocketIo from 'socket.io';
import { httpRequestHandler } from './endpoints/http-endpoints';
import {SocketEndpoints } from './endpoints/websocket-endpoints';

const httpSever = http.createServer(httpRequestHandler);

//hook socket.io to the httpServer
const io = new SocketIo(httpSever, {
  pingTimeout: 80000,
  pingInterval: 4000,
});

SocketEndpoints(io);

export { httpSever };

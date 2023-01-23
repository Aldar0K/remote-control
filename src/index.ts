import dotenv from 'dotenv';
import { HTTP_PORT, WS_PORT } from './constants';
import httpServer from './httpServer';
import listenWebSocketServer from './wsServer';

dotenv.config();
const httpPort = Number(process.env.HTTP_PORT) || HTTP_PORT;
const wsPort = Number(process.env.WS_PORT) || WS_PORT;

console.log(`Start static http server on the ${httpPort} port!`);
httpServer.listen(httpPort);

console.log(`Start WebSocket server on the ${wsPort} port!`);
listenWebSocketServer(wsPort);

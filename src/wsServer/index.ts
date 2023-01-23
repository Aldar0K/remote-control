import { WebSocketServer, createWebSocketStream, WebSocket } from 'ws';
import { parseCommand } from '../utils';

const listenWebSocketServer = (port: number) => {
  const server = new WebSocketServer({ port });

  server.on('connection', async (webSocket: WebSocket) => {
    const webSocketStream = createWebSocketStream(webSocket, {
      decodeStrings: false,
      encoding: 'utf8'
    });

    webSocketStream.on('data', async (data: string) => {
      try {
        console.log(`Command received: ${data}`);

        const command = await parseCommand(data);
        const result = await command.handler(
          command.name,
          command.args,
          webSocketStream
        );

        console.log(`Command result: ${result}`);
      } catch (error: unknown) {
        console.log(`Error: ${(error as Error).message}`);
      }
    });
  });
};

export default listenWebSocketServer;

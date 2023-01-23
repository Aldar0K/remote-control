import { mouse } from '@nut-tree/nut-js';
import { Duplex } from 'stream';
import { CommandHandler } from '../models';

const mousePosition: CommandHandler = async (
  name: string,
  _args: string[],
  webSocket: Duplex
): Promise<string> => {
  const position = await mouse.getPosition();

  webSocket.write(`${name} ${position.x},${position.y}`);

  return `Mouse position is ${position.x},${position.y}`;
};

export default mousePosition;

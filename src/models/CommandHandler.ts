import { Duplex } from 'stream';

type CommandHandler = (
  name: string,
  args: string[],
  webSocket: Duplex
) => Promise<string>;

export default CommandHandler;

import { CommandHandler } from '.';

interface Command {
  name: string;
  args: string[];
  handler: CommandHandler;
}

export default Command;

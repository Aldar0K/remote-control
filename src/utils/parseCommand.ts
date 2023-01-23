import { Command } from '../models';
import { commander } from '../commands';

const parseCommand = async (data: string): Promise<Command> => {
  const [commandName, ...args] = data.split(' ');

  if (commandName === undefined) {
    throw new Error('Command name undefined.');
  }

  const command = commander.getCommand(commandName);
  commander.setCommandArgs(commandName, args);

  return command;
};

export default parseCommand;

import { Command } from '../models';
import { commandNames } from '../constants';
import { CommandNotFoundError } from '../errors';

import {
  mousePosition,
  drawCircle,
  drawRectangle,
  printScreen,
  moveMouse
} from '.';

class Commander {
  commands: Command[];

  constructor(commands: Command[]) {
    this.commands = commands;
  }

  getCommand(commandName: string): Command {
    const command = this.commands.find((c) => c.name === commandName);

    if (command === undefined) {
      throw new CommandNotFoundError(commandName);
    }

    return command;
  }

  setCommandArgs(commandName: string, args: string[]): void {
    const command = this.getCommand(commandName);

    command.args = args;
  }
}

const commander = new Commander([
  {
    name: commandNames.mouseUp,
    args: [],
    handler: moveMouse
  },
  {
    name: commandNames.mouseDown,
    args: [],
    handler: moveMouse
  },
  {
    name: commandNames.mouseLeft,
    args: [],
    handler: moveMouse
  },
  {
    name: commandNames.mouseRight,
    args: [],
    handler: moveMouse
  },
  {
    name: commandNames.mousePosition,
    args: [],
    handler: mousePosition
  },
  {
    name: commandNames.drawCircle,
    args: [],
    handler: drawCircle
  },
  {
    name: commandNames.drawRectangle,
    args: [],
    handler: drawRectangle
  },
  {
    name: commandNames.drawSquare,
    args: [],
    handler: drawRectangle
  },
  {
    name: commandNames.printScreen,
    args: [],
    handler: printScreen
  }
]);

export default commander;

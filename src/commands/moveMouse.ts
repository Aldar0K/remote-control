import { down, left, mouse, right, up } from '@nut-tree/nut-js';
import { CommandHandler } from '../models';
import { commandNames } from '../constants';
import { easingFunction } from '../utils';
import { NoHandlerError } from '../errors';

const moveDirectionByCommandName = {
  [commandNames.mouseUp]: up,
  [commandNames.mouseDown]: down,
  [commandNames.mouseLeft]: left,
  [commandNames.mouseRight]: right
};

const moveMouse: CommandHandler = async (
  name: string,
  args: string[]
): Promise<string> => {
  const distanceInPx = parseInt(args[0]!, 10);

  const direction = moveDirectionByCommandName[name];

  if (direction === undefined) {
    throw new NoHandlerError(name);
  }

  await mouse.move(direction(distanceInPx), easingFunction);

  return `Mouse moved ${direction.name} by ${distanceInPx} px`;
};

export default moveMouse;

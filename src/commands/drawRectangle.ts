/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { down, left, mouse, right, up } from '@nut-tree/nut-js';
import { CommandHandler } from '../models';

const drawRectangle: CommandHandler = async (
  _name: string,
  args: string[]
): Promise<string> => {
  const width = parseInt(args[0]!, 10);
  let height = parseInt(args[1]!, 10);
  console.log(height);

  let isSquare = false;

  if (Number.isNaN(height)) {
    isSquare = true;
    height = width;
  }

  await mouse.drag(right(width));
  await mouse.drag(down(height));
  await mouse.drag(left(width));
  await mouse.drag(up(height));

  return isSquare
    ? `Drawn square with width ${width}`
    : `Drawn rectangle with width ${width} and height ${height}`;
};

export default drawRectangle;

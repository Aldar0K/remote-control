import Jimp from 'jimp';
import { mouse, Region, screen } from '@nut-tree/nut-js';
import { Duplex } from 'stream';

import { CommandHandler } from '../models';
import { SCREENSHOT_WIDTH, SCREENSHOT_HEIGHT } from '../constants';

const printScreen: CommandHandler = async (
  name: string,
  _args: string[],
  webSocket: Duplex
): Promise<string> => {
  const { x: currentX, y: currentY } = await mouse.getPosition();

  const invertedImage = await screen.grabRegion(
    new Region(
      Math.max(0, currentX - SCREENSHOT_WIDTH / 2),
      Math.max(0, currentY - SCREENSHOT_HEIGHT / 2),
      SCREENSHOT_WIDTH,
      SCREENSHOT_HEIGHT
    )
  );

  const rgbImage = await invertedImage.toRGB();

  const jimpImage = new Jimp({
    data: rgbImage.data,
    width: rgbImage.width,
    height: rgbImage.height
  });

  const buffer = await jimpImage.getBufferAsync(Jimp.MIME_PNG);
  const base64buffer = buffer.toString('base64');

  webSocket.write(`${name} ${base64buffer}`);

  return `Screen captured, base64 buffer is ${base64buffer}`;
};

export default printScreen;

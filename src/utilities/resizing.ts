import sharp from 'sharp';

// create thumbnail folder for new images

const folderName = './build/thumbnail';
import fs from 'fs';
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
  console.log('could not process image');
}

async function resizeImage(
  imageLocation: string,
  imageName: string,
  height: string,
  width: string
): Promise<null | string> {
  try {
    await sharp(imageLocation)
      .resize(parseInt(height), parseInt(width))
      //saves the image with its width&height for searching it in the ifExist middleware later
      .toFile(`./build/thumbnail/${imageName}-${width}x${height}.jpg`);
    return null;
  } catch {
    return 'image could not be processed';
  }
}

export default resizeImage;

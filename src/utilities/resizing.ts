import path from 'path';
import sharp from 'sharp';


const imgDir = path.resolve('./') + '/build/';
const outputDir = imgDir + 'thumbnail/';

// create thumbnail folder for new images

const folderName = './build/thumbnail';
const fs = require('fs');
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
  console.log('could not process image')
}

const resizeImage = async (imageLocation: string, imageName: string,height: string, width: string) => 
    {
   await sharp(imageLocation)
    .resize(parseInt(height), parseInt(width))
    //saves the image with its width&height for searching it in the ifExist middleware later
    .toFile(`./build/thumbnail/${imageName}-${width}x${height}.jpg`);
 
  };

  export default resizeImage;
  
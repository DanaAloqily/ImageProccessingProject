import express from 'express';
import sharp from 'sharp';
import { promises as fsPromises } from 'fs';
import path from 'path';
//resize middleware that resizes the images
const resize = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  //save query params in constants to check the image's path
  const query = require('url').parse(req.url, true).query;

  const imageName = query.name;
  const width = query.width;
  const height = query.height;

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
  }

  await sharp(`./src/ images/${imageName}.jpg`)
    .resize(parseInt(height), parseInt(width))
    .toFile(`./build/thumbnail/${imageName}-${width}x${height}.jpg`);

  //saves the image with its width&height for searching it in the ifExist middleware
  const outputImage = outputDir + `${imageName}-${width}x${height}.jpg`;

  return res.sendFile(outputImage);
};

export default resize;

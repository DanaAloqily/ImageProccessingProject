import express from 'express';
import sharp from 'sharp';
import { promises as fsPromises } from 'fs';
import path from 'path';
import resizeImage from '../utilities/resizing';
import isExist from '../../src/utilities/isExist';
//resize middleware that resizes the images
const resize = async (
  req: express.Request,
  res: express.Response,
  next: Function
): Promise<any> => {
  //save query params in constants to check the image's path
  const query = require('url').parse(req.url, true).query;

  const imageName = query.name;
  const width = query.width;
  const height = query.height;

  ///////Check endpoint url params/////
  if (Object.keys(req.query).length === 0) {
    return res
      .status(200)
      .send(
        'Welcome to the resize image api. please enter an image name, height & width. '
      );
  } else if (
    !imageName ||
    !width ||
    !height ||
    isNaN(Number(width)) ||
    isNaN(Number(height)) ||
    width < 0 ||
    height < 0
  ) {
    return res
      .status(400)
      .send(
        'Oops, you must enter the complete parameters. name, width & height. \n ||' +
          ' \n **Make sure you entered a VALID amount of height & width, greater than zero**' +
          ' \n || **Check  the spelling of the image name**'
      );
  }

  ////////save both input & output directoreis for images

  const imgDir = path.resolve('./') + '/build/';
  const outputDir = imgDir + 'thumbnail/';
  const imageLocation = `./src/ images/${imageName}.jpg`;
  const outputImage = outputDir + `${imageName}-${width}x${height}.jpg`;

  if (isExist(imageName, width, height)) {
    return res.sendFile(outputImage);
  } else {
    await resizeImage(imageLocation, imageName, height, width);
    console.log('Image procssing done');
    res.sendFile(outputImage);
  }
};

export default resize;

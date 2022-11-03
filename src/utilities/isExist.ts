import express from 'express';
import sharp from 'sharp';
import fileExists from './fileSearch';
import routes from '../routes';
import path from 'path';
//ifExist function checks if the required image already exists or not
const isExist =  (
  imageName: string,
  width: string,
  height: string
) => {
  
  // save the image location
  const imgDir = path.resolve('./') + '/build/'; //
  const outputDir = imgDir + 'thumbnail/'; //

  //check if the image already exists
  const outputImage = outputDir + `${imageName}-${width}x${height}.jpg`; // ex: pic.jpg => pic-500x400.jpg
  if (fileExists(outputImage)) {
    console.log('image found')
    return true;
  } else {
    //if image does not exist, go to the resize middleware
    console.log('proccessing image')
    return false
  }
};

export default isExist;

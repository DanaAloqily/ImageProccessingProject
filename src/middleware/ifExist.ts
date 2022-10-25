import express from 'express' ;
import sharp from 'sharp';
import fileExists from '../utilities/fileSearch';
import routes from '../routes'
import path from 'path';
//ifExist middleware checks if the required image already exists or not
const ifExist = async (req: express.Request, res: express.Response ,next: Function) => {
 //save query params in constants to check the image's path
 const query = require('url').parse(req.url,true).query;

 const imageName = query.name ;
 const width = query.width ;
 const height  = query.height ;

 
    if (Object.keys(req.query).length === 0) {
        return res
          .status(200)
          .send("Welcome to the resize image api. please enter an image name, height & width. if"); }
    
// check if query params are not missing
if( !imageName || !width || !height || isNaN(Number(width)) || isNaN(Number(height))){
     
    return res.status(400).send('Oops, you must enter the complete parameters. name, width & height. if');
   }; 
// save the image location 
          const imgDir = path.resolve("./") + "/build/"; // 
          const outputDir = imgDir + "thumbnail/"; //  
          
 

     //check if the image already exists
      const outputImage = outputDir + `${imageName}-${width}x${height}.jpg`; // ex: pic.jpg => pic-500x400.jpg
      if (fileExists(outputImage)) {
        // Caching system
        res.sendFile(outputImage);
      } else {
          //if image does not exist, go to the resize middleware
        return next();
      }

  
};

export default ifExist;







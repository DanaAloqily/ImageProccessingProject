import express from 'express' ;

const logger = (req: express.Request, res: express.Response ,next: Function) : void => {

    let url = req.url;
    console.log(` ${url} was visited` ); //checking if image already exist
    next();

};

export default logger;
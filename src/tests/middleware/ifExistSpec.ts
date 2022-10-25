import supertest from "supertest";
import app from "../../index";
import fileExists from "../../utilities/fileSearch";
import path from 'path';

const request = supertest(app);
const imgDir = path.resolve("./") + "/build/"; 
const outputDir = imgDir + "thumbnail/";
const outputImage = outputDir + `fjord-200x300.jpg`;

describe("testing the middleware ifExist route", ()=> {

    it("test ifExist route with a missing parameter in the query", async (done) =>{
        request.get("/resizeImage?name=fjord").expect(400, done);
    })

    it("test the ifExist route with complete correct parametes", async (done)=>{

        request.get("/resizeImage?name=fjord&width=100&height=500").expect(200, done);

    })
    it("test the ifExist route with existing file", ()=>{
        expect(fileExists(outputImage)).toBeTruthy();
    })
    it("test the ifExist route with existing file", ()=>{
        expect(fileExists("invalid-path")).toBeFalsy();
    })


})
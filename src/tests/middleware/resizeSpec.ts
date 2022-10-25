import supertest from "supertest";
import app from "../../index";
import fileExists from "../../utilities/fileSearch";


const request = supertest(app);

describe("testing the middleware resize route", ()=> {

    it("test resize route with a missing parameter in the query", async (done) =>{
        request.get("/resizeImage?width=100&height=500").expect(400, done);
    })

    it("test the resize route with complete correct parametes", async (done)=>{

        request.get("/resizeImage?name=fjord&width=100&height=500").expect(200, done);

    })
   

})
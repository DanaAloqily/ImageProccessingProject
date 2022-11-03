import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe("Testing the main endpoint's response", () => {
  it('testing the response of the root route', async (done) => {
    const response = await request.get('/resizeImage')
    expect(response.status).toBe(200)
    done()
    //app.get('/resizeImage').expect(200, done);
  });
});

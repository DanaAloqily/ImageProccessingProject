import supertest from 'supertest';
import app from '../../index';
import resizeImage from '../../utilities/resizing';

const request = supertest(app);

describe('testing the middleware resize ', () => {

  it('test resize endpoint', async (done) => {
    expect(async () => {
      await resizeImage('./src/ images/fjord.jpg', 'fjord', '200', '300');
  }).not.toThrow();

  });

  it('test the resize route with complete correct parametes', async (done) => {
    const response = await  request.get('/resizeImage?name=fjord&width=100&height=500')
    expect(response.status).toBe(200)
  });

  it('test  route with a missing parameter in the query', async (done) => {
    const response = await request.get('/resizeImage?width=100&height=500')
    expect(response.status).toBe(400)

  });
  it('test  route with an invalid parameter in the query', async (done) => {
    const response = await request.get('/resizeImage?width=100&height=-500')
    expect(response.status).toBe(400)

  });
 
});

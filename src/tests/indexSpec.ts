import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe("Testing the main endpoint's response", () => {
  it('testing the response of the root route', async (done) => {
    request.get('/resizeImage').expect(200, done);
  });
});

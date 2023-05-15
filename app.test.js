const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should respond with "Hello from Node!"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello from Node!');
  });
});

describe('GET /test', () => {
  it('should respond with "Hello from /test Node!"', async () => {
    const response = await request(app).get('/test');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello from /test Node!');
  });
});

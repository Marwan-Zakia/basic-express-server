'use strict';
const { server } = require('../src/server'); 
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('will it work??', () => {

  test('is anyone here', async () => {
    const response = await mockRequest.get('/');
    expect(response.status).toBe(200);

  });

  test('Should respond with 404', async () => {
    const response = await mockRequest.get('/foo');
    expect(response.status).toBe(404);

  });

  test('should respond with 500', async () => {
    const response = await mockRequest.get('/error');
    expect(response.status).toBe(500);

  });

});
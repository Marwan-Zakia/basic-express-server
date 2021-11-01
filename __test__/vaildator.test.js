'use strict';
const { server } = require('../src/server'); 
const supertest = require('supertest');
const request = supertest(server);

describe('API test', () => {
    test('checking home route', async () => {
        const response = await request.get('/')
        expect(response.status).toEqual(200)
        expect(response.text).toEqual('everything is awesome')

    });
    test('checking for a wrong route', async () => {
        const response = await request.get('/stuff')
        expect(response.status).toBe(404)
      

    });
    test('checking if the data of persons is there', async () => {
        const response = await request.get('/person?name=marwan')
        expect(response.status).toBe(200)
      

    });
  
    
      test('checking for empty or  wrong value', async () => {
        const response = await request.get('/person?name=');
        expect(response.status).toEqual(500);
      });
      
    


})
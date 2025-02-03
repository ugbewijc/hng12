/**
 * 
 */
import { test, before, after, describe } from 'node:test';
import assert from 'node:assert';
import request from 'supertest';
import fs from 'fs/promises';
import app from '../index.js';

const invalidNumbers= ['','','234e']
describe('Classify Number API TESTS', () => {
    describe('GET /classify_number should retrieve all causes', () => {
        test('should retrieve a specific cause by ID with status code 200', async () => {
            await request(app)
                .get('/api/classify-number?number=1')
                .expect('Content-Type', /json/)
                .expect(200);
        });
    })
});

after(async () => { // close the process after all tests 
    setTimeout(() => process.exit(), 1000); // a short delay to ensure all pending operations are completed 
});
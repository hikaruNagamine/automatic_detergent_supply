import app from '../src/server';
import request from 'supertest';

describe('APIとして返すテスト', () => {
    it('/helloWorld', async () => {
        const response = await request(app).get('/helloWorld');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Hello, world' });
    });

    it('/test', async () => {
        const response = await request(app).get('/test');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ name: 'test name', test: 'test' });
    });
});
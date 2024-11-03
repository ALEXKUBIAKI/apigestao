const request = require('supertest');
const app = require('../app');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

describe('User API', () => {
  afterAll(async () => {
    await prisma.$disconnect();
  });

  test('Register a user', async () => {
    const response = await request(app).post('/users/register').send({
      email: 'teste@example.com',
      password: 'password123',
    });
    expect(response.statusCode).toBe(201);
  });

  test('Login a user', async () => {
    const response = await request(app).post('/users/login').send({
      email: 'teste@example.com',
      password: 'password123',
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('token');
  });
});

const request = require('supertest');
const app = require('../app');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

describe('Order API', () => {
  let token;
  let productId;

  // Criar um usuário, produto e obter o token JWT antes de rodar os testes
  beforeAll(async () => {
    await prisma.order.deleteMany();  
    await prisma.product.deleteMany();  
    await prisma.user.deleteMany();  

    const userResponse = await request(app).post('/users/register').send({
      email: 'test@example.com',
      password: 'password123',
    });

    const loginResponse = await request(app).post('/users/login').send({
      email: 'test@example.com',
      password: 'password123',
    });

    token = loginResponse.body.token;

    const productResponse = await request(app).post('/products').send({
      name: 'Produto Teste',
      price: 50.00,
      codigodebarras: '123456789'
    }).set('Authorization', `Bearer ${token}`);

    productId = productResponse.body.id;
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  test('Create an order', async () => {
    const response = await request(app).post('/orders').send({
      productId: productId,
      quantity: 2
    }).set('Authorization', `Bearer ${token}`);
    
    expect(response.statusCode).toBe(201);
    expect(response.body.productId).toBe(productId);
    expect(response.body.quantity).toBe(2);
  });

  test('Retrieve all orders', async () => {
    const response = await request(app).get('/orders').set('Authorization', `Bearer ${token}`);
    
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('Update an order', async () => {
    const order = await prisma.order.findFirst();

    const response = await request(app).put(`/orders/${order.id}`).send({
      productId: productId,
      quantity: 3
    }).set('Authorization', `Bearer ${token}`);
    
    expect(response.statusCode).toBe(200);
    expect(response.body.quantity).toBe(3);
  });

  test('Delete an order', async () => {
    const order = await prisma.order.findFirst();

    const response = await request(app).delete(`/orders/${order.id}`).set('Authorization', `Bearer ${token}`);
    
    expect
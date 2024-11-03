const request = require('supertest');
const app = require('../app');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

describe('Product API', () => {
  let token;
  
  // Criar um usuário e obter o token JWT antes de rodar os testes
  beforeAll(async () => {
    await prisma.user.deleteMany();  // Limpar usuários existentes
    await prisma.product.deleteMany();  // Limpar produtos existentes
    
    const userResponse = await request(app).post('/users/register').send({
      email: 'teste@example.com',
      password: 'password123',
    });

    const loginResponse = await request(app).post('/users/login').send({
      email: 'teste@example.com',
      password: 'password123',
    });

    token = loginResponse.body.token;
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  test('Create a product', async () => {
    const response = await request(app).post('/products').send({
      name: 'Produto Teste',
      price: 50.00,
      codigodebarras: '123456789'
    }).set('Authorization', `Bearer ${token}`);
    
    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe('Produto Teste');
    expect(response.body.codigodebarras).toBe('123456789');
  });

  test('Fail to create a product with duplicate codigodebarras', async () => {
    const response = await request(app).post('/products').send({
      name: 'Outro Produto Teste',
      price: 60.00,
      codigodebarras: '123456789'  // Mesmo código de barras
    }).set('Authorization', `Bearer ${token}`);
    
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Código de barras já existe');
  });

  test('Delete a product', async () => {
    const product = await prisma.product.findUnique({ where: { codigodebarras: '123456789' } });

    const response = await request(app).delete(`/products/${product.id}`).set('Authorization', `Bearer ${token}`);
    
    expect(response.statusCode).toBe(204);
  });

  test('Retrieve all products', async () => {
    await request(app).post('/products').send({
      name: 'Produto Novo',
      price: 75.00,
      codigodebarras: '987654321'
    }).set('Authorization', `Bearer ${token}`);

    const response = await request(app).get('/products').set('Authorization', `Bearer ${token}`);
    
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});

Endpoints de Usuários

Usuarios
-Registrar Usuário
Método: POST
URL: /users/register
Body (JSON):
{
  "email": "test@example.com",
  "password": "password123"
}
-Login de Usuário
Método: POST
URL: /users/login
Body (JSON):
{
  "email": "test@example.com",
  "password": "password123"
}
Resposta (JSON):
{
  "token": "seu_token_JWT"
}
-Atualizar Usuário
Método: PUT
URL: /users/:id
Headers: Authorization: Bearer seu_token_JWT
Body (JSON):
{
  "email": "novo_email@example.com",
  "password": "nova_senha123"
}
-Deletar Usuário
Método: DELETE
URL: /users/:id
Headers: Authorization: Bearer seu_token_JWT

Endpoints de Produtos
-Criar Produto
Método: POST
URL: /products
Headers: Authorization: Bearer seu_token_JWT
Body (JSON):
{
  "name": "Nome do Produto",
  "price": 100.50,
  "codigodebarras": "123456789"
}

-Atualizar Produto
Método: PUT
URL: /products/:id
Headers: Authorization: Bearer seu_token_JWT
Body (JSON):
{
  "name": "Nome do Produto Atualizado",
  "price": 150.75,
  "codigodebarras": "987654321"
}

-Deletar Produto
Método: DELETE
URL: /products/:id
Headers: Authorization: Bearer seu_token_JWT

-Listar Produtos
Método: GET
URL: /products

Endpoints de Pedidos
-Criar Pedido
Método: POST
URL: /orders
Headers: Authorization: Bearer seu_token_JWT
Body (JSON):
{
  "productId": 1,
  "quantity": 2
}
-Atualizar Pedido
Método: PUT
URL: /orders/:id
Headers: Authorization: Bearer seu_token_JWT
Body (JSON):
{
  "productId": 1,
  "quantity": 3
}
-Deletar Pedido
Método: DELETE
URL: /orders/:id
Headers: Authorization: Bearer seu_token_JWT
-Listar Pedidos
Método: GET
URL: /orders

para rodar o projeto

Configurar o .env
atualmente:
DATABASE_URL="postgresql://postgres:alex@localhost:5432/postgres"
JWT_SECRET="alex123456789012345"
onde alex é a senha do postgres


Executar Migrates
npx prisma migrate dev --name init
npx prisma generate


rodar projeto
node src/app.js

executar testes
npx jest



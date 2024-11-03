Endpoints de Usuários</br>   

Usuarios<br/>
-Registrar Usuário<br/>
Método: POST<br/>
URL: /users/register<br/>
Body (JSON):<br/>
{<br/>
  "email": "test@example.com",<br/>
  "password": "password123"<br/>
}<br/>
-Login de Usuário<br/>
Método: POST<br/>
URL: /users/login<br/>
Body (JSON):<br/>
{<br/>
  "email": "test@example.com",<br/>
  "password": "password123"<br/>
}<br/>
Resposta (JSON):<br/>
{<br/>
  "token": "seu_token_JWT"<br/>
}<br/>
-Atualizar Usuário<br/>
Método: PUT<br/>
URL: /users/:id<br/>
Headers: Authorization: Bearer seu_token_JWT<br/>
Body (JSON):<br/>
{<br/>
  "email": "novo_email@example.com",<br/>
  "password": "nova_senha123"<br/>
}<br/>
-Deletar Usuário<br/>
Método: DELETE<br/>
URL: /users/:id<br/>
Headers: Authorization: Bearer seu_token_JWT<br/>

Endpoints de Produtos<br/>
-Criar Produto<br/>
Método: POST<br/>
URL: /products<br/>
Headers: Authorization: Bearer seu_token_JWT<br/>
Body (JSON):<br/>
{<br/>
  "name": "Nome do Produto",<br/>
  "price": 100.50,<br/>
  "codigodebarras": "123456789"<br/>
}<br/>

-Atualizar Produto<br/>
Método: PUT<br/>
URL: /products/:id<br/>
Headers: Authorization: Bearer seu_token_JWT<br/>
Body (JSON):<br/>
{<br/>
  "name": "Nome do Produto Atualizado",<br/>
  "price": 150.75,<br/>
  "codigodebarras": "987654321"<br/>
}<br/>

-Deletar Produto<br/>
Método: DELETE<br/>
URL: /products/:id<br/>
Headers: Authorization: Bearer seu_token_JWT<br/>

-Listar Produtos<br/>
Método: GET<br/>
URL: /products<br/>

Endpoints de Pedidos<br/>
-Criar Pedido<br/>
Método: POST<br/>
URL: /orders<br/>
Headers: Authorization: Bearer seu_token_JWT<br/>
Body (JSON):<br/>
{<br/>
  "productId": 1,<br/>
  "quantity": 2<br/>
}<br/>
-Atualizar Pedido<br/>
Método: PUT<br/>
URL: /orders/:id<br/>
Headers: Authorization: Bearer seu_token_JWT<br/>
Body (JSON):<br/>
{<br/>
  "productId": 1,<br/>
  "quantity": 3<br/>
}<br/>
-Deletar Pedido<br/>
Método: DELETE<br/>
URL: /orders/:id<br/>
Headers: Authorization: Bearer seu_token_JWT<br/>
-Listar Pedidos<br/>
Método: GET<br/>
URL: /orders<br/>

para rodar o projeto<br/>

Configurar o .env<br/>
atualmente:<br/>
DATABASE_URL="postgresql://postgres:alex@localhost:5432/postgres"<br/>
JWT_SECRET="alex123456789012345"<br/>
onde alex é a senha do postgres<br/>


Executar Migrates<br/>
npx prisma migrate dev --name init<br/>
npx prisma generate<br/>


rodar projeto<br/>
node src/app.js<br/>

executar testes<br/>
npx jest<br/>



# Pizzaria Imperiale

Este é um projeto de um sistema completo para uma pizzaria fictícia, desenvolvido como parte da disciplina CARPJI3 do curso Técnico de Informática Integrado do IFSP em 2025. O sistema inclui um **Frontend** em React e um **Backend** em Node.js com Express e Prisma, além de um banco de dados MySQL.

## Estrutura do Projeto

O projeto está dividido em duas partes principais:

### 1. **Frontend**
- Local: `Frontend/`
- Framework: [React](https://reactjs.org/)
- Ferramenta de build: [Vite](https://vitejs.dev/)
- Linguagem: JavaScript
- Estilo: CSS
- Funcionalidades:
  - Interface para interação com o sistema.
  - Componentes reutilizáveis, como o cabeçalho (Header).

### 2. **Backend**
- Local: `Backend/`
- Framework: [Express](https://expressjs.com/)
- ORM: [Prisma](https://www.prisma.io/)
- Banco de Dados: MySQL
- Funcionalidades:
  - API REST para gerenciar usuários, reservas, pedidos, produtos, endereços e pagamentos.
  - Rotas organizadas por entidade.

## Instalação

### Pré-requisitos
- Node.js (versão 16 ou superior)
- MySQL
- Gerenciador de pacotes (npm ou yarn)

### Configuração do Banco de Dados
1. Crie um banco de dados MySQL chamado `pizzaria_db`.
2. Configure a variável de ambiente `DATABASE_URL` no arquivo `.env` na pasta `Backend` com a URL de conexão do banco de dados. Exemplo:
   ```
   DATABASE_URL="mysql://usuario:senha@localhost:3306/pizzaria_db"
   ```
3. Execute as migrações do Prisma para criar as tabelas:
   ```bash
   cd Backend
   npx prisma migrate dev
   ```

### Instalação do Backend
1. Navegue até a pasta `Backend`:
   ```bash
   cd Backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm run dev
   ```

### Instalação do Frontend
1. Navegue até a pasta `Frontend`:
   ```bash
   cd Frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Rotas da API

### Usuários (`/usuarios`)
- `GET /`: Lista todos os usuários.
- `POST /criar`: Cria um novo usuário.
- `PUT /atualizar/:id`: Atualiza um usuário existente.
- `DELETE /deletar/:id`: Deleta um usuário.

### Reservas (`/reservas`)
- `GET /`: Lista todas as reservas.
- `POST /criar`: Cria uma nova reserva.
- `PUT /atualizar/:id`: Atualiza uma reserva existente.
- `DELETE /deletar/:id`: Deleta uma reserva.

### Produtos (`/produtos`)
- `GET /`: Lista todos os produtos.
- `POST /criar`: Cria um novo produto.
- `PUT /atualizar/:id`: Atualiza um produto existente.
- `DELETE /deletar/:id`: Deleta um produto.

### Pedidos (`/pedidos`)
- `GET /`: Lista todos os pedidos.
- `POST /criar`: Cria um novo pedido.
- `PUT /atualizar/:id`: Atualiza um pedido existente.
- `PUT /associar-endereco/:id`: Associa um endereço a um pedido.
- `DELETE /deletar/:id`: Deleta um pedido.

### Endereços (`/enderecos`)
- `GET /`: Lista todos os endereços.
- `POST /criar`: Cria um novo endereço.
- `PUT /atualizar/:id`: Atualiza um endereço existente.
- `DELETE /deletar/:id`: Deleta um endereço.

### Pagamentos (`/pagamentos`)
- `GET /`: Lista todos os pagamentos.
- `POST /criar`: Cria um novo pagamento.
- `PUT /atualizar/:id`: Atualiza um pagamento existente.
- `DELETE /deletar/:id`: Deleta um pagamento.

## Tecnologias Utilizadas

### Frontend
- React
- Vite
- CSS

### Backend
- Node.js
- Express
- Prisma
- MySQL

## Licença

Este projeto está licenciado sob a [MIT License](./LICENSE).

## Autor

Desenvolvido por **Yuri Matsu**.

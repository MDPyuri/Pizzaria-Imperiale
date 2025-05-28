# Documentação da API - Pizzaria Imperiale

Esta documentação detalha os endpoints disponíveis na API do projeto **Pizzaria Imperiale**, incluindo exemplos de requisições e respostas.

---

## Endpoints

### 1. **Usuários**
#### **GET /usuarios**
- **Descrição**: Lista todos os usuários cadastrados.
- **Exemplo de resposta**:
  ```json
  [
    {
      "idUsuario": 1,
      "nome": "João Silva",
      "telefone": "11987654321",
      "cpf": "12345678900",
      "email": "joao.silva@example.com",
      "senha": "senhaSegura123"
    }
  ]
  ```

#### **POST /usuarios/criar**
- **Descrição**: Cria um novo usuário.
- **Body**:
  ```json
  {
    "nome": "João Silva",
    "telefone": "11987654321",
    "cpf": "12345678900",
    "email": "joao.silva@example.com",
    "senha": "senhaSegura123"
  }
  ```
- **Exemplo de resposta**:
  ```json
  {
    "idUsuario": 1,
    "nome": "João Silva",
    "telefone": "11987654321",
    "cpf": "12345678900",
    "email": "joao.silva@example.com",
    "senha": "senhaSegura123"
  }
  ```

#### **PUT /usuarios/atualizar/:id**
- **Descrição**: Atualiza os dados de um usuário.
- **Body**:
  ```json
  {
    "nome": "João Atualizado",
    "email": "joao.atualizado@example.com"
  }
  ```

#### **DELETE /usuarios/deletar/:id**
- **Descrição**: Deleta um usuário pelo ID.

---

### 2. **Reservas**
#### **GET /reservas**
- **Descrição**: Lista todas as reservas.
- **Exemplo de resposta**:
  ```json
  [
    {
      "idReserva": 1,
      "data": "2023-12-25T19:00:00.000Z",
      "preferencia": "Mesa perto da janela",
      "telefone": "11987654321",
      "qtdpessoas": 4,
      "Usuario_idUsuario": 1
    }
  ]
  ```

#### **POST /reservas/criar**
- **Descrição**: Cria uma nova reserva.
- **Body**:
  ```json
  {
    "data": "2023-12-25T19:00:00.000Z",
    "preferencia": "Mesa perto da janela",
    "telefone": "11987654321",
    "qtdpessoas": 4,
    "Usuario_idUsuario": 1
  }
  ```

---

### 3. **Produtos**
#### **GET /produtos**
- **Descrição**: Lista todos os produtos.
- **Exemplo de resposta**:
  ```json
  [
    {
      "idProduto": 1,
      "nome": "Pizza Margherita",
      "preco": 29.99,
      "descricao": "Pizza clássica com molho de tomate, mussarela e manjericão.",
      "imagem": "https://example.com/imagens/pizza-margherita.jpg"
    }
  ]
  ```

#### **POST /produtos/criar**
- **Descrição**: Cria um novo produto.
- **Body**:
  ```json
  {
    "nome": "Pizza Margherita",
    "preco": 29.99,
    "descricao": "Pizza clássica com molho de tomate, mussarela e manjericão.",
    "imagem": "https://example.com/imagens/pizza-margherita.jpg"
  }
  ```

---

### 4. **Pedidos**
#### **GET /pedidos**
- **Descrição**: Lista todos os pedidos.
- **Exemplo de resposta**:
  ```json
  [
    {
      "idPedido": 1,
      "data": "2023-12-25T19:00:00.000Z",
      "valor": 150.50,
      "Usuario_idUsuario": 1,
      "Endereco_idEndereco": 2,
      "Pagamento_idpagamento": 3
    }
  ]
  ```

#### **POST /pedidos/criar**
- **Descrição**: Cria um novo pedido.
- **Body**:
  ```json
  {
    "data": "2023-12-25T19:00:00.000Z",
    "valor": 150.50,
    "Usuario_idUsuario": 1,
    "Endereco_idEndereco": 2,
    "Pagamento_idpagamento": 3
  }
  ```

---

### 5. **Endereços**
#### **GET /enderecos**
- **Descrição**: Lista todos os endereços.
- **Exemplo de resposta**:
  ```json
  [
    {
      "idEndereco": 1,
      "logradouro": "Rua das Flores",
      "numero": "123",
      "bairro": "Centro",
      "cep": "12345-678",
      "complemento": "Apartamento 101",
      "pontoRef": "Próximo ao mercado"
    }
  ]
  ```

#### **POST /enderecos/criar**
- **Descrição**: Cria um novo endereço.
- **Body**:
  ```json
  {
    "logradouro": "Rua das Flores",
    "numero": "123",
    "bairro": "Centro",
    "cep": "12345-678",
    "complemento": "Apartamento 101",
    "pontoRef": "Próximo ao mercado"
  }
  ```

---

### 6. **Pagamentos**
#### **GET /pagamentos**
- **Descrição**: Lista todos os pagamentos.
- **Exemplo de resposta**:
  ```json
  [
    {
      "idPagamento": 1,
      "tipo": "Cartão de Crédito",
      "pago": true
    }
  ]
  ```

#### **POST /pagamentos/criar**
- **Descrição**: Cria um novo pagamento.
- **Body**:
  ```json
  {
    "tipo": "Cartão de Crédito",
    "pago": true
  }
  ```

---

## Banco de Dados

### Estrutura
- **Usuários**: Gerencia os dados dos clientes.
- **Reservas**: Gerencia as reservas feitas pelos clientes.
- **Produtos**: Gerencia os produtos disponíveis no cardápio.
- **Pedidos**: Gerencia os pedidos realizados pelos clientes.
- **Endereços**: Gerencia os endereços associados aos pedidos.
- **Pagamentos**: Gerencia os métodos de pagamento e status.

---

## Observações
- Certifique-se de configurar o arquivo `.env` corretamente com a URL do banco de dados.
- Para mais informações, consulte o arquivo `README.md`.

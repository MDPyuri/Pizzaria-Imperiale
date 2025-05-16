const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Inserção de dados com create
  await prisma.produto.create({
    data: { 
      nome: 'Margherita', 
      preco: 25.00, 
      descricao: 'Molho, mussarela, tomate, manjericão', 
      categoria: 'PIZZAS_SALGADAS' 
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Calabresa', 
      preco: 28.00, 
      descricao: 'Molho, mussarela, calabresa, cebola', 
      categoria: 'PIZZAS_SALGADAS' 
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Quatro Queijos', 
      preco: 30.00, 
      descricao: 'Molho, mussarela, parmesão, gorgonzola, catupiry', 
      categoria: 'PIZZAS_SALGADAS' 
    },
  });

  console.log('Dados inseridos com sucesso!');
}

main()
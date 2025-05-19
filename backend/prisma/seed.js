const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Inserção de dados com create

  await prisma.produto.deleteMany();
  await prisma.usuario.deleteMany();

  // --- Pizzas Salgadas ###
  await prisma.produto.create({
    data: { 
      nome: 'Tartufo Nero e Burrata', 
      preco: 95.00, 
      descricao: 'Massa de fermentação lenta, molho bechamel trufado, burrata fresca, cogumelos selvagens, azeite de trufas negras e lascas de parmesão 36 meses.', 
      imagem: null, 
      categoria: 'PIZZAS_SALGADAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Filetto e Gorgonzola', 
      preco: 133.00, 
      descricao: 'Molho pomodoro italiano, filé mignon selado em manteiga de garrafa, gorgonzola dolce, cebola caramelizada e nozes tostadas.', 
      categoria: 'PIZZAS_SALGADAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Parma e Figos Caramelizados', 
      preco: 133.00, 
      descricao: 'Mussarela de búfala, presunto de Parma envelhecido 24 meses, figos frescos caramelizados, redução de balsâmico e rúcula selvagem.', 
      categoria: 'PIZZAS_SALGADAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Brie & Pera ao Mel de Trufas', 
      preco: 120.00, 
      descricao: 'Queijo brie derretido, peras caramelizadas no vinho branco, mel trufado e amêndoas laminadas.', 
      categoria: 'PIZZAS_SALGADAS' ,
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Camarão & Champagne', 
      preco: 180.00, 
      descricao: 'Base de mascarpone, camarões flambados no champagne brut, raspas de limão siciliano e flor de sal.', 
      categoria: 'PIZZAS_SALGADAS' ,
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Wagyu & Foie Gras', 
      preco: 145.00, 
      descricao: 'Molho bechamel, finas fatias de wagyu A5, foie gras selado, cogumelos selvagens e redução de vinho do Porto.', 
      categoria: 'PIZZAS_SALGADAS' ,
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Carbonara di Roma', 
      preco: 150.00, 
      descricao: 'Molho carbonara artesanal (ovos caipiras e pecorino romano), pancetta crocante, parmesão envelhecido e pimenta-do-reino moída na hora.', 
      categoria: 'PIZZAS_SALGADAS' ,
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Queijos Nobres & Mel de Acácia', 
      preco: 150.00, 
      descricao: 'Queijo taleggio, grana padano 24 meses, gorgonzola dolce e queijo de cabra, finalizados com mel de acácia e nozes caramelizadas.', 
      categoria: 'PIZZAS_SALGADAS' ,
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Trufa Branca & Aspargos Selvagens', 
      preco: 230.00, 
      descricao: 'Massa finíssima, molho branco artesanal, lascas de trufa branca italiana, aspargos frescos e parmesão de alta maturação.', 
      categoria: 'PIZZAS_SALGADAS' ,
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Pato Confit & Laranja Caramelizada', 
      preco: 146.00, 
      descricao: 'Massa de fermentação lenta, base de creme de queijo de cabra, pato confitado desfiado, laranjas caramelizadas no vinho branco e pimenta rosa.', 
      categoria: 'PIZZAS_SALGADAS' ,
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Stracciatella & Presunto Ibérico', 
      preco: 150.00, 
      descricao: 'Mussarela de búfala stracciatella, presunto ibérico pata negra envelhecido, rúcula selvagem e azeite extravirgem premium.', 
      categoria: 'PIZZAS_SALGADAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Queijo Gruyère & Alho Negro', 
      preco: 122.00, 
      descricao: 'Mistura de queijos gruyère, taleggio e gouda, com toque de alho negro fermentado e mel de castanheira.', 
      categoria: 'PIZZAS_SALGADAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Cordeiro & Hortelã', 
      preco: 185.00, 
      descricao: 'Massa crocante, cordeiro assado lentamente e desfiado, queijo feta, molho de iogurte grego e redução de hortelã fresca.', 
      categoria: 'PIZZAS_SALGADAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Rosbife de Wagyu & Mostarda Dijon', 
      preco: 152.00, 
      descricao: 'Massa leve, molho de mostarda Dijon, rosbife de wagyu A5, queijo suíço emmental e rúcula baby.', 
      categoria: 'PIZZAS_SALGADAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Salmão Defumado & Ovas de Caviar', 
      preco: 270.00, 
      descricao: 'Base de mascarpone, fatias de salmão defumado artesanalmente, ovas de caviar e zest de limão siciliano.', 
      categoria: 'PIZZAS_SALGADAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Polvo Grelhado & Batatas ao Murro', 
      preco: 227.00, 
      descricao: 'Molho branco especial, polvo grelhado lentamente, batatas ao murro, páprica defumada e azeite de alho confitado.', 
      categoria: 'PIZZAS_SALGADAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Prosciutto di San Daniele & Melão Cantaloupe', 
      preco: 199.00, 
      descricao: 'pomodoro San Marzano, mussarela de búfala artesanal, presunto San Daniele DOP curado 24 meses, finas lâminas de melão cantaloupe e redução de balsâmico envelhecido.', 
      categoria: 'PIZZAS_SALGADAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Stracciatella & Pesto de Pistache', 
      preco: 149.00, 
      descricao: 'Mussarela de búfala, creme de stracciatella italiana, pesto de pistache siciliano e tomatinhos confitados no azeite extravirgem grego.', 
      categoria: 'PIZZAS_SALGADAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Costela Angus & Cebolas Roxas Caramelizadas', 
      preco: 160.00, 
      descricao: 'Molho pomodoro italiano, queijo gruyère derretido, costela angus desfiada lentamente cozida por 12h e cebolas roxas caramelizadas no vinho do Porto.', 
      categoria: 'PIZZAS_SALGADAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Margherita DOP Especialidades', 
      preco: 110.00, 
      descricao: 'Tomates San Marzano, mussarela di bufala Campana DOP, azeite extravirgem siciliano, manjericão fresco e toque final de queijo pecorino romano.', 
      categoria: 'PIZZAS_SALGADAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Pata Negra & Figos Frescos', 
      preco: 244.00, 
      descricao: 'Massa artesanal, base de burrata cremosa, jamón ibérico Pata Negra envelhecido 48 meses, figos frescos caramelizados e nozes pecan tostadas.', 
      categoria: 'PIZZAS_SALGADAS',
    },
  });

  // --- Pizzas Doces ###
  await prisma.produto.create({
    data: { 
      nome: 'Gianduia Royale', 
      preco: 75.00, 
      descricao: 'Massa leve, creme de gianduia italiana, avelãs caramelizadas e raspas de chocolate belga 70%.', 
      categoria: 'PIZZAS_DOCES',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Trilogia de Chocolate & Frutas Vermelhas', 
      preco: 85.00, 
      descricao: 'Ganache de chocolates (branco, ao leite e meio amargo), mix de frutas vermelhas frescas e toque de hortelã.', 
      categoria: 'PIZZAS_DOCES',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Cheesecake de Pistache & Framboesa', 
      preco: 90.00, 
      descricao: 'Base de creme de pistache siciliano, cobertura de cheesecake aerado e geleia de framboesa artesanal.', 
      categoria: 'PIZZAS_DOCES',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Gold Caramel & Flor de Sal', 
      preco: 90.00, 
      descricao: 'Chocolate dourado belga (Gold Chocolate Callebaut), caramelo artesanal e flor de sal da Normandia.', 
      categoria: 'PIZZAS_DOCES',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Banoffee Imperiale', 
      preco: 78.00, 
      descricao: 'Doce de leite uruguaio, bananas flambadas no rum, chantilly de baunilha de Madagascar e canela do Ceilão.', 
      categoria: 'PIZZAS_DOCES',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Amêndoas & Laranja Siciliana', 
      preco: 76.00, 
      descricao: 'Massa fina, creme de amêndoas, raspas de laranja siciliana e amêndoas laminadas tostadas.', 
      categoria: 'PIZZAS_DOCES',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Chocolate Ruby & Champagne Rosé', 
      preco: 100.00, 
      descricao: 'Mousse de chocolate ruby, geleia artesanal de morangos orgânicos e toque de champagne rosé francês.', 
      categoria: 'PIZZAS_DOCES',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Tarte Tatin Crocante', 
      preco: 88.00, 
      descricao: 'Pizza inspirada na famosa torta francesa, com maçãs caramelizadas, crumble amanteigado e toque de baunilha bourbon.', 
      categoria: 'PIZZAS_DOCES',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Creme Brûlée & Frutas Vermelhas', 
      preco: 88.00, 
      descricao: 'Massa delicada, creme brûlée artesanal maçaricado e frutas vermelhas frescas.', 
      categoria: 'PIZZAS_DOCES',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Tiramisù Clássico & Café', 
      preco: 98.00, 
      descricao: 'Base de creme mascarpone, cacau belga e toque de café espresso italiano, finalizado com raspas de chocolate amargo.', 
      categoria: 'PIZZAS_DOCES',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Chocolate Belga 80% & Café Arábica', 
      preco: 98.00, 
      descricao: 'Ganache de chocolate belga 80%, crumble crocante de cacau, toque de café arábica e finalização com nibs de cacau caramelizados.', 
      categoria: 'PIZZAS_DOCES',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Figos Grelhados & Creme de Baunilha Bourbon', 
      preco: 87.00, 
      descricao: 'Massa crocante, figos grelhados no mel de acácia, creme de baunilha bourbon e amêndoas caramelizadas.', 
      categoria: 'PIZZAS_DOCES',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Pera Caramelizada & Creme de Avelã Artesanal', 
      preco: 88.00, 
      descricao: 'Massa fina, peras caramelizadas no vinho branco, creme de avelã artesanal e lascas de chocolate ao leite suíço.', 
      categoria: 'PIZZAS_DOCES',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Framboesa & Chocolate Branco de Madagascar', 
      preco: 99.00, 
      descricao: 'Ganache de chocolate branco de Madagascar, framboesas frescas, redução de balsâmico e toque de hortelã.', 
      categoria: 'PIZZAS_DOCES',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Doce de Leite Argentino & Flor de Sal', 
      preco: 80.00, 
      descricao: 'Massa macia, doce de leite argentino premium, flor de sal do Himalaia e castanhas de caju caramelizadas.', 
      categoria: 'PIZZAS_DOCES',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Creme de Amêndoas & Damasco Turco', 
      preco: 89.00, 
      descricao: 'Massa fina, creme de amêndoas artesanais, damascos turcos macerados e toque de mel silvestre.', 
      categoria: 'PIZZAS_DOCES',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Chocolate Caramelo & Nozes Pecan', 
      preco: 98.00, 
      descricao: 'Chocolate ao leite cremoso, caramelo artesanal salgado, nozes pecan crocantes e toque de flor de sal francesa.', 
      categoria: 'PIZZAS_DOCES',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Macaron de Pistache & Frutas Vermelhas', 
      preco: 104.00, 
      descricao: 'Massa delicada, creme de pistache siciliano, pedaços de macaron francês e calda de frutas vermelhas frescas.', 
      categoria: 'PIZZAS_DOCES',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Coco Queimado & Abacaxi Flambado no Rum', 
      preco: 84.00, 
      descricao: 'Creme de coco queimado, abacaxi flambado no rum escuro e finalização com raspas de limão siciliano.', 
      categoria: 'PIZZAS_DOCES',
    },
  });

  // --- Pizzas Vegetarianas ###
  await prisma.produto.create({
    data: { 
      nome: 'Trufa Branca & Cogumelos Selvagens', 
      preco: 120.00, 
      descricao: 'Massa fina de fermentação lenta, creme de castanhas-de-caju trufado, mix de cogumelos selvagens (shiitake, eryngui e shimeji), azeite de trufa branca italiana e amêndoas tostadas.', 
      categoria: 'PIZZAS_VEGANAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Pistache & Queijo de Castanha', 
      preco: 120.00, 
      descricao: 'Mussarela de castanha-de-caju fermentada, pesto de pistache siciliano, raspas de limão siciliano e manjericão fresco.', 
      categoria: 'PIZZAS_VEGANAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Queijo Azul Vegano & Peras Caramelizadas', 
      preco: 140.00, 
      descricao: 'Massa crocante, queijo azul vegano artesanal, peras caramelizadas no vinho branco e nozes pecan tostadas.', 
      categoria: 'PIZZAS_VEGANAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Abóbora & Avelãs Caramelizadas', 
      preco: 120.00, 
      descricao: 'Creme de abóbora cabotiá assada, ricota vegana defumada, avelãs caramelizadas e toque de alecrim fresco.', 
      categoria: 'PIZZAS_VEGANAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Tofu Defumado & Cebola Roxa ao Balsâmico', 
      preco: 120.00, 
      descricao: 'Base de molho de tomate italiano, tofu defumado artesanal, cebola roxa caramelizada no balsâmico e pimenta-do-reino moída na hora.', 
      categoria: 'PIZZAS_VEGANAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Funghi Porcini & Nozes Pecan', 
      preco: 136.00, 
      descricao: 'Molho branco de castanhas, cogumelos porcini italianos, nozes pecan tostadas e azeite extravirgem trufado.', 
      categoria: 'PIZZAS_VEGANAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Tomate Confit & Pesto de Manjericão Roxo', 
      preco: 115.00, 
      descricao: 'Massa de longa fermentação, tomates cereja confitados no azeite extravirgem, queijo de amêndoas e pesto de manjericão roxo.', 
      categoria: 'PIZZAS_VEGANAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Beterraba Assada & Creme de Macadâmia', 
      preco: 120.00, 
      descricao: 'Massa integral fina, creme de macadâmia, beterraba assada no forno a lenha e sementes de girassol caramelizadas.', 
      categoria: 'PIZZAS_VEGANAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Queijo de Amêndoas & Uvas Verdes Flambadas', 
      preco: 130.00, 
      descricao: 'Massa rústica, queijo cremoso de amêndoas, uvas verdes flambadas no vinho branco e toque de pimenta rosa.', 
      categoria: 'PIZZAS_VEGANAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Abobrinha Grelhada & Pesto de Rúcula', 
      preco: 120.00, 
      descricao: 'Massa de fermentação lenta, mussarela de amêndoas, abobrinha grelhada, pesto de rúcula e amêndoas laminadas crocantes.', 
      categoria: 'PIZZAS_VEGANAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Cebola Caramelizada & Gorgonzola Vegano', 
      preco: 140.00, 
      descricao: 'Massa rústica, gorgonzola vegano artesanal, cebola roxa caramelizada no vinho tinto e nozes tostadas.', 
      categoria: 'PIZZAS_VEGANAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Jaca Desfiada & Pimentão Defumado', 
      preco: 116.00, 
      descricao: 'Molho de tomate italiano, jaca desfiada ao estilo barbecue, pimentão defumado e cebolinha fresca.', 
      categoria: 'PIZZAS_VEGANAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Três Cogumelos & Shoyu Artesanal', 
      preco: 138.00, 
      descricao: 'Massa crocante, mix de cogumelos (shitake, portobello e paris), shoyu artesanal envelhecido e azeite de gergelim torrado.', 
      categoria: 'PIZZAS_VEGANAS',
    },
  });

  // --- Bebidas Alcoolicas ###
  await prisma.produto.create({
    data: { 
      nome: 'Negroni de Ouro', 
      preco: 125.00, 
      descricao: 'Um clássico italiano com gin, Campari e vermute tinto, finalizado com uma lasca de ouro comestível.', 
      categoria: 'BEBIDAS_ALCOOLICAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Bellini Diamante', 
      preco: 100.00, 
      descricao: 'Espumante italiano brut combinado com purê de pêssego branco, servido com uma "geleia de champanhe" em forma de diamante.', 
      categoria: 'BEBIDAS_ALCOOLICAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Aperol Spritz Prestige', 
      preco: 75.00, 
      descricao: 'Aperol, prosecco e água com gás, decorado com flores comestíveis e uma rodela de laranja caramelizada.', 
      categoria: 'BEBIDAS_ALCOOLICAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Pizza Espresso', 
      preco: 95.00, 
      descricao: 'Uma combinação ousada de espresso, licor de baunilha, vodka e xarope de caramelo salgado, servido com uma mini pizza de chocolate de cortesia.', 
      categoria: 'BEBIDAS_ALCOOLICAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Basilico Royale', 
      preco: 110.00, 
      descricao: 'Gin artesanal, xarope de manjericão, suco de limão siciliano e espumante, finalizado com folhas de manjericão douradas.', 
      categoria: 'BEBIDAS_ALCOOLICAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Prosecco Superiore DOCG', 
      preco: 200.00, 
      descricao: 'Espumante italiano fresco e frutado, perfeito para acompanhar qualquer pizza.', 
      categoria: 'BEBIDAS_ALCOOLICAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Dom Pérignon Vintage', 
      preco: 350.00, 
      descricao: 'O champanhe mais icônico do mundo, para celebrar momentos especiais.', 
      categoria: 'BEBIDAS_ALCOOLICAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Birra del Re', 
      preco: 65.00, 
      descricao: 'Cerveja italiana artesanal, leve e refrescante, com notas cítricas e florais.', 
      categoria: 'BEBIDAS_ALCOOLICAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Stout al Tartufo', 
      preco: 80.00, 
      descricao: 'Cerveja escura com infusão de trufas negras, para os paladares mais exigentes.', 
      categoria: 'BEBIDAS_ALCOOLICAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Limoncello di Capri', 
      preco: 70.00, 
      descricao: 'Licor italiano de limão siciliano, servido gelado como um toque refrescante após a refeição.', 
      categoria: 'BEBIDAS_ALCOOLICAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Amaro Montenegro', 
      preco: 75.00, 
      descricao: 'Um digestivo amargo e aromático, perfeito para finalizar a experiência gastronômica.', 
      categoria: 'BEBIDAS_ALCOOLICAS',
    },
  });

// --- Bebidas Não Alcoólicas ###
  await prisma.produto.create({
    data: { 
      nome: 'Limone Sublime', 
      preco: 50.00, 
      descricao: 'Limão siciliano, água com gás, xarope de lavanda e uma pitada de flor de sal, servido com gelo em formato de estrela.', 
      categoria: 'BEBIDAS_NAO_ALCOOLICAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Berry Elegance', 
      preco: 60.00, 
      descricao: 'Mix de frutas vermelhas, água de coco e um toque de mel orgânico, decorado com flores comestíveis e uma calda de romã.', 
      categoria: 'BEBIDAS_NAO_ALCOOLICAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Suco de Laranja Dourada', 
      preco: 65.00, 
      descricao: 'Laranjas selecionadas, espremidas na hora, servidas com gelo em formato de flor e uma pitada de açúcar de coco.', 
      categoria: 'BEBIDAS_NAO_ALCOOLICAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Mix Tropical', 
      preco: 55.00, 
      descricao: 'Combinação de abacaxi, manga e maracujá, batidos com água de coco e decorado com uma rodela de abacaxi caramelizado.', 
      categoria: 'BEBIDAS_NAO_ALCOOLICAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Verde di LOuro', 
      preco: 65.00, 
      descricao: 'Suco verde com couve, maçã verde, gengibre, limão siciliano e um toque de mel orgânico, finalizado com uma lasca de pepino dourada.', 
      categoria: 'BEBIDAS_NAO_ALCOOLICAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Suco de Romã e Framboesa', 
      preco: 55.00, 
      descricao: 'Romãs frescas e framboesas silvestres, prensados a frio e servidos com gelo de água de rosas.', 
      categoria: 'BEBIDAS_NAO_ALCOOLICAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Suco de Melancia e Hortelã', 
      preco: 57.00, 
      descricao: 'Melancia com folhas de hortelã fresca, servido com uma calda de gengibre e gelo em cubos cristalinos.', 
      categoria: 'BEBIDAS_NAO_ALCOOLICAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Água Tônica Artesanal', 
      preco: 65.00, 
      descricao: 'Água tônica premium com quinino natural, servida com uma rodela de limão siciliano e gelo gourmet.', 
      categoria: 'BEBIDAS_NAO_ALCOOLICAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Refrigerante Italiano de Limão', 
      preco: 60.00, 
      descricao: 'Refrigerante italiano importado, com sabor cítrico intenso e refrescante.', 
      categoria: 'BEBIDAS_NAO_ALCOOLICAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Refrigerante de Bergamota', 
      preco: 65.00, 
      descricao: 'Um clássico italiano com sabor único de bergamota, servido em copo de cristal.', 
      categoria: 'BEBIDAS_NAO_ALCOOLICAS',
    },
  });

  await prisma.produto.create({
    data: { 
      nome: 'Água Gasosa com Sabores', 
      preco: 50.00, 
      descricao: 'Água com gás natural com opções de sabores: limão siciliano, frutas vermelhas ou flor de laranjeira.', 
      categoria: 'BEBIDAS_NAO_ALCOOLICAS',
    },
  });

  // Seed dos usuários
  await prisma.usuario.create({
    data: {
      nome: 'João Silva',
      email: 'joaosilva01@email.com',
      senha: 'senha123',
      telefone: '11987654321',
      cpf: '12345678909',
    },
  });

  await prisma.usuario.create({
    data: {
      nome: 'Maria Oliveira',
      email: 'maria.oliveira@email.com',
      senha: 'senha456',
      telefone: '11912345678',
      cpf: '98765432100',
    },
  });

  await prisma.usuario.create({
    data: {
      nome: 'Carlos Souza',
      email: 'carlos.souza@email.com',
      senha: 'senha789',
      telefone: '11923456789',
      cpf: '45678912301',
    },
  });

  await prisma.usuario.create({
    data: {
      nome: 'Ana Paula',
      email: 'ana.paula@email.com',
      senha: 'senha321',
      telefone: '11934567890',
      cpf: '32165498702',
    },
  });

  await prisma.usuario.create({
    data: {
      nome: 'Pedro Santos',
      email: 'pedro.santos@email.com',
      senha: 'senha654',
      telefone: '11945678901',
      cpf: '65498732103',
    },
  });

  await prisma.usuario.create({
    data: {
      nome: 'Juliana Costa',
      email: 'juliana.costa@email.com',
      senha: 'senha987',
      telefone: '11956789012',
      cpf: '78912345604',
    },
  });

  await prisma.usuario.create({
    data: {
      nome: 'Lucas Almeida',
      email: 'lucas.almeida@email.com',
      senha: 'senha159',
      telefone: '11967890123',
      cpf: '85296374105',
    },
  });

  await prisma.usuario.create({
    data: {
      nome: 'Fernanda Lima',
      email: 'fernanda.lima@email.com',
      senha: 'senha753',
      telefone: '11978901234',
      cpf: '96385274106',
    },
  });

  await prisma.usuario.create({
    data: {
      nome: 'Rafael Pereira',
      email: 'rafael.pereira@email.com',
      senha: 'senha258',
      telefone: '11989012345',
      cpf: '14725836907',
    },
  });

  await prisma.usuario.create({
    data: {
      nome: 'Patrícia Mendes',
      email: 'patricia.mendes@email.com',
      senha: 'senha369',
      telefone: '11990123456',
      cpf: '25836914708',
    },
  });
  

  console.log('Dados inseridos com sucesso!');
}

main()
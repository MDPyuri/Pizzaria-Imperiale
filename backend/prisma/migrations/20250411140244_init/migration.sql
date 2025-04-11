-- CreateTable
CREATE TABLE `Usuario` (
    `idUsuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Usuario_cpf_key`(`cpf`),
    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`idUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reserva` (
    `idReserva` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `preferencia` VARCHAR(191) NULL,
    `telefone` VARCHAR(191) NULL,
    `qtdpessoas` INTEGER NOT NULL,
    `Usuario_idUsuario` INTEGER NOT NULL,

    PRIMARY KEY (`idReserva`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Endereco` (
    `idEndereco` INTEGER NOT NULL AUTO_INCREMENT,
    `logradouro` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `complemento` VARCHAR(191) NULL,
    `pontoRef` VARCHAR(191) NULL,

    PRIMARY KEY (`idEndereco`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pagamento` (
    `idPagamento` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(191) NOT NULL,
    `pago` BOOLEAN NOT NULL,

    PRIMARY KEY (`idPagamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedido` (
    `idPedido` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `valor` DECIMAL(10, 2) NOT NULL,
    `Usuario_idUsuario` INTEGER NOT NULL,
    `Endereco_idEndereco` INTEGER NULL,
    `Pagamento_idpagamento` INTEGER NULL,

    PRIMARY KEY (`idPedido`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
    `idProduto` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `preco` DECIMAL(5, 2) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `imagem` VARCHAR(191) NULL,

    PRIMARY KEY (`idProduto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ItemProduto` (
    `idItemProduto` INTEGER NOT NULL AUTO_INCREMENT,
    `quantidade` INTEGER NOT NULL,
    `preco` DECIMAL(10, 2) NOT NULL,
    `observacao` VARCHAR(191) NULL,
    `Produto_idProduto` INTEGER NOT NULL,
    `Pedido_idPedido` INTEGER NOT NULL,

    PRIMARY KEY (`idItemProduto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Reserva` ADD CONSTRAINT `Reserva_Usuario_idUsuario_fkey` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `Usuario`(`idUsuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_Usuario_idUsuario_fkey` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `Usuario`(`idUsuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_Endereco_idEndereco_fkey` FOREIGN KEY (`Endereco_idEndereco`) REFERENCES `Endereco`(`idEndereco`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_Pagamento_idpagamento_fkey` FOREIGN KEY (`Pagamento_idpagamento`) REFERENCES `Pagamento`(`idPagamento`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ItemProduto` ADD CONSTRAINT `ItemProduto_Produto_idProduto_fkey` FOREIGN KEY (`Produto_idProduto`) REFERENCES `Produto`(`idProduto`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ItemProduto` ADD CONSTRAINT `ItemProduto_Pedido_idPedido_fkey` FOREIGN KEY (`Pedido_idPedido`) REFERENCES `Pedido`(`idPedido`) ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - Added the required column `Usuario_idUsuario` to the `Pagamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data` to the `Pagamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor` to the `Pagamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pagamento` ADD COLUMN `Usuario_idUsuario` INTEGER NOT NULL,
    ADD COLUMN `data` DATETIME(3) NOT NULL,
    ADD COLUMN `valor` DECIMAL(10, 2) NOT NULL;

-- AddForeignKey
ALTER TABLE `Pagamento` ADD CONSTRAINT `Pagamento_Usuario_idUsuario_fkey` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `Usuario`(`idUsuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

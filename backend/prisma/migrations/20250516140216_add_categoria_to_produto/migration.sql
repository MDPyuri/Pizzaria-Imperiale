/*
  Warnings:

  - Added the required column `categoria` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `produto` ADD COLUMN `categoria` ENUM('PIZZAS_SALGADAS', 'PIZZAS_DOCES', 'PIZZAS_VEGANAS', 'BEBIDAS_ALCOOLICAS', 'BEBIDAS_NAO_ALCOOLICAS') NOT NULL;

/*
  Warnings:

  - You are about to alter the column `pago` on the `pagamento` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `pagamento` MODIFY `pago` ENUM('PENDENTE', 'PAGO', 'CANCELADO') NOT NULL;

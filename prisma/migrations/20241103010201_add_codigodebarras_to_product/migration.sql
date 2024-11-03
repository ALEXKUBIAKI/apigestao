/*
  Warnings:

  - A unique constraint covering the columns `[codigodebarras]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "codigodebarras" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "Product_codigodebarras_key" ON "Product"("codigodebarras");

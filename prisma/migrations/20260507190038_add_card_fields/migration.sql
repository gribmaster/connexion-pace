/*
  Warnings:

  - You are about to drop the column `text` on the `Card` table. All the data in the column will be lost.
  - Added the required column `description` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Card" DROP COLUMN "text",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "title" TEXT NOT NULL;

/*
  Warnings:

  - A unique constraint covering the columns `[postId]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `postId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_id_fkey";

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "postId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Book_postId_key" ON "Book"("postId");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

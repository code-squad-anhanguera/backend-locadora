/*
  Warnings:

  - Added the required column `classificationId` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genre` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studio` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "classificationId" INTEGER NOT NULL,
ADD COLUMN     "genre" TEXT NOT NULL,
ADD COLUMN     "studio" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Classification" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Classification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_classificationId_fkey" FOREIGN KEY ("classificationId") REFERENCES "Classification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

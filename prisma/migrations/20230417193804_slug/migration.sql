/*
  Warnings:

  - Made the column `slug` on table `Course` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "slug" SET NOT NULL;

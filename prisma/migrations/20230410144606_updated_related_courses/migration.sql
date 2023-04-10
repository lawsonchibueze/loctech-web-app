/*
  Warnings:

  - Added the required column `relatedCoursesId` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "relatedCoursesId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "RelatedCourses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" "CATEGORY" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RelatedCourses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_relatedCoursesId_fkey" FOREIGN KEY ("relatedCoursesId") REFERENCES "RelatedCourses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

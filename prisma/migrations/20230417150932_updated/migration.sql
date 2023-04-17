-- DropIndex
DROP INDEX "Course_slug_key";

-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "slug" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Instructor" ADD COLUMN     "reviewer" TEXT,
ADD COLUMN     "reviewerComment" TEXT,
ADD COLUMN     "reviewerImage" TEXT;

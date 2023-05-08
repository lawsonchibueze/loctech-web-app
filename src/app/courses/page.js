export const dynamic = "force-dynamic"; // this is the fix

import React from "react";
import { PrismaClient } from "@prisma/client";
import FeaturedItem from "@/components/Featured/FeaturedItem";

const prisma = new PrismaClient();

const fetchRelatedCourses = async (name) => {
  const coursesCategory = await prisma.course.findMany({
    where: {
      RelatedCourses: {
        name: {
          equals: `${name}`,
        },
      },
    },
  });
  return coursesCategory;
};

export default async function page({ searchParams }) {
  const category = searchParams?.category;
  const relatedCourses = await fetchRelatedCourses(category);

  return (
    <div className=" gap-4 mx-3 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:mx-20 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5   py-4 ">
      <FeaturedItem courses={relatedCourses} />
    </div>
  );
}

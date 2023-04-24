import React from "react";
import { PrismaClient } from "@prisma/client";
import FeaturedItem from "@/components/Featured/FeaturedItem";
import { useSearchParams } from "next/navigation";

const prisma = new PrismaClient();

// const fetchRelatedCourses = async () => {
//   const courses = await prisma.relatedCourses.findMany()
  
//   return courses;
// };

const fetchCourse = async (category) => {
  const courses = await prisma.course.findMany({
    where: {
      category:category,
    },
  });
  return courses;
};

export default async function page({ searchParams }) {
  const category = searchParams?.category.toUpperCase() 
  const categorizedCourses = await fetchCourse(category);


  return (
    <div className=" gap-4 mx-3 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:mx-20 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5   py-4 ">
      <FeaturedItem courses={categorizedCourses} />
    </div>
  );
}

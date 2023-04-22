import React from "react";
import { PrismaClient } from "@prisma/client";
import FeaturedItem from "@/components/Featured/FeaturedItem";

const prisma = new PrismaClient();

const fetchCourse = async () => {
  const courses = await prisma.course.findMany();
  return courses;
};

export default async function page({ searchParams }) {
  const category = searchParams.category?.toUpperCase();
  const courses = await fetchCourse();
  const categorizedCourses = courses.filter(
    (course) => course.category === category
  ); //filter courses according to the category

  console.log(courses);
  return (
    <div className=" gap-4 mx-3 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:mx-20 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5   py-4 ">
      <FeaturedItem courses={categorizedCourses} />
    </div>
  );
}

//TODO: So, the value on the category property of the COURSE table is different from the value on the category property on the COURSECATEGORY table, thats why i cant filter the course. The value of the category property  on the COUSRE table has to be the same with that of the COURSECATEGORY

import React from "react";
import { PrismaClient } from "@prisma/client";
import FeaturedItem from "@/components/Featured/FeaturedItem";

const prisma = new PrismaClient();

const fetchCourse = async () => {
  const courses = await prisma.course.findMany();
  return courses;
};

export default async function page() {
  const courses = await fetchCourse();
  const onlineCourses = courses.filter((course) => course?.isOnline === true); //filter for online courses

  //   console.log(onlineCourses);
  return (
    <div className=" gap-4 mx-3 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:mx-20 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5   py-4 ">
      <FeaturedItem courses={onlineCourses} />
    </div>
  );
}

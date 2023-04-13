import React from "react";

import CourseDetailHero from "@/components/CourseDetailHero";
import CourseDescription from "@/components/CourseDesp";
import Curriculum from "@/components/Curriculum";
import InstructorCard from "@/components/InstructorCard";
import RatingCard from "@/components/RatingCard";
import Reviews from "@/components/Reviews";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchCourseBySlug = async (slug) => {
  const course = await prisma.course.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!course) {
    return null;
  }

  return course;
};

export default async function page({ params }) {
  const { slug } = params;
  const course = await fetchCourseBySlug(slug);
  console.log({ course });
  return (
    <div>
      <CourseDetailHero />
      <CourseDescription />
      <Curriculum />
      <InstructorCard />
      <RatingCard />
      <Reviews />
    </div>
  );
}

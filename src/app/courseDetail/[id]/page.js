import React from "react";

import CourseDetailHero from "@/components/CourseDetailHero";
import CourseDescription from "@/components/CourseDesp";
import Curriculum from "@/components/Curriculum";
import InstructorCard from "@/components/InstructorCard";
import RatingCard from "@/components/RatingCard";
import Reviews from "@/components/Reviews";
export default function page({ params }) {
  //   const courseId = params.id;
  return (
    <div>
      <CourseDetailHero />
      <CourseDescription />
      <Curriculum />
      <InstructorCard />
      <RatingCard/>
      <Reviews/>

    </div>
  );
}

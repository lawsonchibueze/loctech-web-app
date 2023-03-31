import React from "react";

import CourseDetailHero from "@/components/CourseDetailHero";
import CourseDescription from "@/components/CourseDesp";
export default function page({ params }) {
  //   const courseId = params.id;
  return (
    <div>
   <CourseDetailHero/>
   <CourseDescription/>
    </div>
  );
}

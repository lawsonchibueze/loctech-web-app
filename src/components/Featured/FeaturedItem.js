import { FeaturedCourseArr } from "@/Utils/Utils";
import React from "react";
import FeaturedCard from "./FeaturedCard";
import Link from "next/link";

export default function FeaturedItem({ courses }) {
  return courses.map((course, index) => (
    <Link   key={index} href={`/courseDetail/${course.slug}`}>
      <FeaturedCard
        img={course.image}
        level={course.level}
        courseTitle={course.name}
        author={course.author}
        price={course.price}
        description={course.description}
        category={course.category}
      />
    </Link>
  ));
}

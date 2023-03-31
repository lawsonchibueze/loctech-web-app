import { FeaturedCourseArr } from "@/Utils";
import React from "react";
import FeaturedCard from "./FeaturedCard";
import Link from "next/link";

export default function FeaturedItem() {
  return FeaturedCourseArr.map((course, index) => (
    <Link href={`/courseDetail/${course.id}`}>
      <FeaturedCard
        key={index}
        img={course.img}
        level={course.level}
        courseTitle={course.title}
        author={course.author}
        price={course.price}
      />
    </Link>
  ));
}

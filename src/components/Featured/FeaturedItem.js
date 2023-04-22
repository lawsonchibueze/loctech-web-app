import { FeaturedCourseArr } from "@/Utils/Utils";
import React from "react";
import FeaturedCard from "./FeaturedCard";
import Link from "next/link";

export default function FeaturedItem({ courses, param }) {
  // console.log("=====", param.category);

  // const filteredCourses = courses.filter(
  //   //filtering courses by params
  //   (course) => course.category === param.category
  // );

  //returns all courses if category is undefined or all else return filtered courses
  // const categoryArray =
  //   param.category == undefined || param.category == "all"
  //     ? courses
  //     : filteredCourses;

  return courses.length === 0 ? (
    <div className="text-center text-bold text-lg sm:text-xl">
      {" "}
      <h2>This course is empty </h2>{" "}
    </div>
  ) : (
    courses.map((course, index) => (
      <Link key={index} href={`/courseDetail/${course.slug}`}>
        <FeaturedCard
          img={course?.image}
          level={course?.level}
          courseTitle={course?.name}
          author={course?.author}
          duration={course?.duration}
          price={course?.price}
          description={course?.description}
          category={course?.category}
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
      </Link>
    ))
  );
}

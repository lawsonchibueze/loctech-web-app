import React from "react";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import CourseTag from "./Course_Tag/CourseTag";
import CourseCategory from "./CourseCategory";
import RelatedCourse from "./RelatedCourse";
export default function CourseDetailHero({
  courseTitle,
  courseDuration,
  coursePrice,
  courseCategory,
  courseImage,
  courseInstructor,
  courseMethod,
}) {
  return (
    <div className="sm:h-52 sm:py-10  flex flex-col justify-between">
      <div className=" px-4  py-4 sm:mx-20 sm:px-0">
        <p className="text-sm">Home / Courses / {courseTitle}</p>
      </div>
      <div className="mx-4 sm:mx-20 my-10  flex  justify-between  flex-col sm:flex-row">
        <div>
          {/* <p className="text-sm ">{courseCategory?.replace("_", " ")}</p> */}
          <h2 className="text-base sm:text-2xl sm:tracking-wide font-normal ">
            {courseTitle}
          </h2>

          {/* <div className="flex items-center my-5">
            <span className="text-lg font-bold">5.0/5 </span>
            <div className="flex mx-4">
              <AiOutlineStar className="text-[#FF2883] text-lg" />
              <AiOutlineStar className="text-[#FF2883] text-lg" />
              <AiOutlineStar className="text-[#FF2883] text-lg" />
              <AiOutlineStar className="text-[#FF2883] text-lg" />
              <AiOutlineStar className="text-[#FF2883] text-lg" />
            </div>

            <div className="flex items-center">
              <span className="mx-3">
                <BsPerson className="font-semibold" />
              </span>{" "}
              <p> 1 already enrolled</p>
            </div>
          </div> */}
        </div>
        <div className="relative flex flex-col">
          <CourseTag
            courseImage={courseImage}
            courseDuration={courseDuration}
            coursePrice={coursePrice}
            courseCategory={courseCategory}
            courseMethod={courseMethod}
          />
          {/* <CourseCategory  /> */}
          <RelatedCourse />
        </div>
      </div>
    </div>
  );
}

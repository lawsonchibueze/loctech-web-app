import React from "react";

export default function CourseDescription({
  description,
  courseLearningObj,
  courseTargetAudience,
  coursePrerequisites,
}) {
  return (
    <div className="px-4 sm:mx-20 sm:py-4">
      <h2 className="text-xl font-bold py-4">About This Course</h2>
      <div className="  sm:w-4/6 sm:space-y-12 text-sm leading-loose text-left">
        <p>{description}</p>
      </div>

      <div className="border-2 border-black border-solid px-3  sm:w-3/5 my-12 py-3">
        <p className="font-bold text-base">Learning Objectives</p>

        <div className="sm:flex text-sm">
          <ul className="p-5 space-y-5 ">
            {courseLearningObj?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-x-6 sm:w-3/5 border-2 border-solid border-[#FF2883] px-3   my-12 py-3">
        <div>
          <p className="font-bold text-base"> Prerequisites </p>
          <ul className="list-disc text-sm  p-5 space-y-5">
            {coursePrerequisites?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="space-x-6 sm:w-3/5 border-2 border-solid border-black px-3   my-12 py-3">
        <div>
          <p className="font-bold text-base"> Target Audience </p>
          <ul className="list-disc text-sm  p-5 space-y-5">
            {courseTargetAudience?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

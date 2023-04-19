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
          <div className="p-5 space-y-5">
            {courseLearningObj?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6  sm:w-3/5">
        <div>
          <p className="font-bold text-base"> Requirements </p>
          <ul className="list-disc px-6 text-sm space-y-2">
            {coursePrerequisites?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className=" sm:w-3/5">
          <p className="font-bold text-base"> Target Audience </p>
          <ul className="list-disc px-6 text-sm space-y-2">
            {courseTargetAudience?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { HiOutlineLockClosed } from "react-icons/hi";
import CurriculumItem from "./CurriculumItem";

export default function Curriculum({ courseCurriculum, curriculum, duration }) {
  return (
    <div className=" px-4 w-full space-y-5  sm:mx-20 sm:w-2/4 ">
      <div>
        <div className="flex items-center justify-between my-4">
          <h2 className="font-semibold text-base  sm:text-lg">Curriculum </h2>
          <div className="flex items-center justify-between space-x-8">
            <p className="text-xs text-gray-500">{duration}wks</p>
          </div>
        </div>
        <div className="border-2 border-solid border-gray-300  sm:my-8">
          {courseCurriculum?.map((course, index) => (
            <CurriculumItem
              key={index}
              title={course}
              icon={<HiOutlineLockClosed />}
              // textColor="text-[#FF2883]"
            />
          ))}
        </div>
        <div>
          <a
            download
            href={curriculum}
            className="underline underline-offset-4"
          >
            <button className="p-5 text-white bg-[#FF2883] rounded-md">
              {" "}
              Click here to view more curriculum
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

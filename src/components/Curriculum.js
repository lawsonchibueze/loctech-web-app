import React from "react";
import { HiOutlineLockClosed } from "react-icons/hi";
export default function Curriculum() {
  return (
    <div className=" px-4 w-full space-y-5  sm:mx-20 sm:w-2/4 ">
      <div className="flex items-center justify-between my-4">
        <h2 className="font-semibold text-base  sm:text-lg">Curriculum </h2>
        <div className="flex items-center justify-between space-x-8">
          <p className="text-sm font-semibold">5 Lessons </p>
          <p className="text-xs text-gray-500">2h 20m</p>
        </div>
      </div>
      <div className="border-2 border-solid border-gray-300  sm:my-8">
        <CurriculumItem
          title="Planning"
          icon={<HiOutlineLockClosed />}
          textColor="text-[#FF2883]"
        />
        <CurriculumItem
          title="Introduction"
          icon={<HiOutlineLockClosed />}
        />
        <CurriculumItem
          title="Internal vs External Factors"
          icon={<HiOutlineLockClosed />}
        />
      </div>

      {/* =========== */}

      <div className="border-2 border-solid border-gray-300">
        <CurriculumItem
          title="How to set Your Opening Offer"
          icon={<HiOutlineLockClosed />}
        />
        <CurriculumItem
          title="The Flinch"
          icon={<HiOutlineLockClosed />}
        />
        <CurriculumItem title="aa" icon={<HiOutlineLockClosed />} />
      </div>
    </div>
  );
}

function CurriculumItem({ title, icon, color, textColor }) {
  return (
    <div className={`flex items-center justify-between py-3 px-4  ${color}`}>
      <p className={`text-sm font-semibold ${textColor}`}> {title}</p>
      <span className="text-xl"> {icon}</span>
    </div>
  );
}

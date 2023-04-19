import React from "react";
import { AiOutlineStar } from "react-icons/ai";

export default function RatingCard() {
  return (
    <div className="sm:mx-20 px-4 my-5 ">
      <h3 className="font-bold text-lg ">Instructor rating</h3>
      <div className=" py-3 shadow-lg my-4 sm:my-5 sm:w-1/6 h-40 rounded-lg flex items-center justify-center flex-col">
        <h2 className="text-5xl font-medium text-[#FF2883]">5.0</h2>
        {/* <div className="flex items-center justify-between my-3 space-x-2 text-2xl font-bold">
          <AiOutlineStar className="text-[#FF2883] " />
          <AiOutlineStar className="text-[#FF2883]" />
          <AiOutlineStar className="text-[#FF2883] " />
          <AiOutlineStar className="text-[#FF2883] " />
          <AiOutlineStar className="text-[#FF2883] " />
        </div> */}

        {/* <p className="text-sm text-gray-600">2 Ratings</p> */}
      </div>
    </div>
  );
}

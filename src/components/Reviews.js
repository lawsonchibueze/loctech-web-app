import React from "react";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";

export default function Reviews() {
  return (
    <div className="sm:mx-20 px-4 sm:w-2/5">
      <h3 className="font-bold my-5">
        Reviews<span className="text-sm font-medium text-gray-500 ml-2">(2)</span>
      </h3>
      <div className="flex items-center ">
        <Image
          src="/smiling-young-african-college-student-doing-KYGJVRW.png"
          width={80}
          height={80}
          alt="image not available"
          className="rounded-full"
        />
        <div className="ml-5">
          <p className="text-sm font-semibold">Abraham Lintin</p>
          <p className="text-xs font-medium">2 years ago</p>
        </div>
      </div>
      <div className="flex items-center  my-3 space-x-1 text-2xl font-bold">
        <AiOutlineStar className="text-[#FF2883] " />
        <AiOutlineStar className="text-[#FF2883]" />
        <AiOutlineStar className="text-[#FF2883] " />
        <AiOutlineStar className="text-[#FF2883] " />
        <AiOutlineStar className="text-[#FF2883] " />
      </div>
      <p>I've improved my negotiation skill thank to this course.</p>
    </div>
  );
}

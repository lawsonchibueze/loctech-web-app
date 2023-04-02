import React from "react";
import Image from "next/image";

export default function RelatedCourse() {
  return (
    <div className="hidden sm:block w-80 border-solid border-gray-500 border p-4 ">
      <h3 className="font-bold text-2xl">Related courses</h3>

      <div className="flex my-4">
        <Image
          src="/smiling-black-male-student-in-modern-university-PJG86AL.png"
          width={150}
          height={50}
          alt="image not available"
          className="h-24 object-cover rounded-lg"
        />
        <div className="pl-3">
          <p className="font-normal text-xl ">Data Analysis Fundamentals</p>
          <p className="font-bold text-2xl">$55.00</p>
        </div>
      </div>
    </div>
  );
}

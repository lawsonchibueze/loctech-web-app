import React from "react";
import Image from "next/image";
export default function NewsletterCard() {
  return (
    <div className="dark:bg-gray-500 dark:text-white bg-[#EEF0F4] text-center py-8 rounded-lg sm:mx-20 sm:text-start  sm:px-20  sm:flex sm:items-center justify-between">
      <div>
        <p className="font-semibold text-base sm:text-lg">
          Achieve Your Goals With Loctech IT Training Institute
        </p>
        <p className="my-3">
          Create an account to receive our newsletter, course recommendations
          and promotions.
        </p>
        <button className="bg-[#FF2883] rounded-md text-white cursor-pointer text-lg px-4 py-3 sm:py-2 sm:px-4 font-semibold sm:xl">
          Register for free
        </button>{" "}
      </div>
      <div className="hidden sm:block">
        <Image
          src="/smiling-young-african-college-student-doing-KYGJVRW.png"
          width={300}
          height={300}
          alt="Image not available"
        />
      </div>
    </div>
  );
}

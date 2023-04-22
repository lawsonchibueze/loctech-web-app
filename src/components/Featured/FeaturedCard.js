import React from "react";
import Image from "next/image";
import { formatPrice } from "@/Utils/Utils";
export default function FeaturedCard({
  level,
  courseTitle,
  author,
  price,
  img,
  category,
  description,
  duration,
}) {
  return (
    <div className="h-76 my-5 sm:my-2">
      <Image
        src={img}
        width={500}
        height={500}
        placeholder="blur"
        blurDataURL="/spinner.svg"
        alt="images not available"
        className="h-72 rounded-lg object-cover w-full sm:w-72 "
      />

      {/* <div>
        <p className="text-xs font-medium my-2">{category}</p>
      </div> */}
      <div>
        <p className="text-base font-semibold my-2 text-[#FF2883] ">
          {courseTitle}
        </p>
      </div>
      <div>
        <p className="hover:text-[#FF2883] text-xs line-clamp-2 text-gray-500 font-semibold my-3">
          {description}
        </p>
      </div>
      <div className="flex justify-between">
        <p className="font-bold">N{formatPrice(price)}</p>
        <p className="text-sm font-medium">{duration}wks</p>
      </div>
    </div>
  );
}

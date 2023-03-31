import React from "react";
import Image from "next/image";
export default function FeaturedCard({
  level,
  courseTitle,
  author,
  price,
  img,
}) {
  return (
    <div className="h-76">
      <Image
        src={img}
        width={500}
        height={300}
        className=""
        placeholder="blur"
        blurDataURL="/spinner.svg"
        alt="images not available"
        style={{
          maxWidth: "100%",
          objectFit: "cover",
          borderRadius: "10px",
          height: "auto",
        }}
      />

      <div
        className={`inline-block p-2 px-4 mt-2 rounded-sm  ${
          level === "Beginner"
            ? "bg-[#E7E5FE]"
            : level === "All Levels"
            ? "bg-[#DDF3F5]"
            : ""
        }`}
      >
        <p
          className={`text-base sm:text-xs  ${
            level === "Beginner"
              ? "text-[#5B62FB]"
              : level === "All Levels"
              ? "text-[#61C7CE]"
              : ""
          }`}
        >
          {level}
        </p>
      </div>
      <div>
        <p className="text-sm font-medium my-2">{courseTitle}</p>
      </div>
      <div>
        <p className="hover:text-amber-400 text-xs">{author}</p>
      </div>
      <div>
        <p className="font-bold">{price}</p>
      </div>
    </div>
  );
}

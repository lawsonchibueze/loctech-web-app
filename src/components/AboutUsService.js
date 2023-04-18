import React from "react";
import Image from "next/image";
export default function AboutUsService() {
  return (
    <div>
      <div className="relative ">
        <Image
          src="/mimi-thian-vdXMSiX-n6M-unsplash (1).jpg"
          width={1000}
          height={1000}
          // fill="responsive"
          alt="Image not available"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{
            width: "100%",
            height: "700px",
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className="text-white absolute bottom-20 px-4 sm:px-20">
          <h4 className="text-xl ">Know Us Butter</h4>
          <h1 className="text-6xl font-bold">About Us</h1>
        </div>
      </div>
    </div>
  );
}

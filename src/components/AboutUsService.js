import React from "react";
import Image from "next/image";
import { TbCertificate, TbGlobe, TbBuilding } from "react-icons/tb";

export default function AboutUsService() {
  return (
    <div>
      <div className="relative ">
        <Image
          src="https://a6e8z9v6.stackpathcdn.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1135306875.jpg"
          width={1000}
          height={1000}
          // fill="responsive"
          alt="Image not available"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{
            width: "100%",
            height: "600px",
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-t from-[#FF2883] to-[#FF2883] opacity-50 flex flex-col justify-between px-4 space-x-0 py-8 font-normal md:flex-row sm:px-20 items-center md:space-x-12 sm:font-semibold tracking-wide text-base text-white">
            <div className="flex-1 space-y-2 sm:space-y-5">
              <div>
                <TbCertificate className="text-xl sm:text-4xl text-white" />
              </div>
              <h3>Our Philosophy</h3>
              <p>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence.
              </p>
            </div>

            <div className="flex-1 space-y-3 sm:space-y-5">
              <div>
                <TbBuilding className="text-xl sm:text-4xl text-white" />
              </div>
              <h3>Our Philosophy</h3>
              <p>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence.
              </p>
            </div>

            <div className="flex-1 space-y-3 sm:space-y-5">
              <div>
                <TbGlobe className="text-xl sm:text-4xl text-white" />
              </div>
              <h3>Key Of Success</h3>
              <p>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

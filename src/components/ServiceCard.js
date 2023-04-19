import React from "react";
import { TbCertificate, TbGlobe, TbBuilding } from "react-icons/tb";
import Image from "next/image";
export default function ServiceCard({ right }) {
  return (
    <div className={`flex items-center ${right && "flex-row-reverse"} my-7  `}>
      <div
        className={`px-4 sm:ml-20 ${right && "ml-0 "} ${
          right && "mr-0"
        } sm:mr-10  sm:space-y-5  flex-1 sm:ml-0`}
      >
        <TbBuilding className="text-4xl sm:text-4xl text-[#FF2883]" />

        <h2 className="text-2xl font-bold ">Special Campus Tour</h2>
        <p className="leading-8 ">
          Campus on a tour designed for prospective graduate and professional
          students. You will see how our university like, facilities, studenst
          and life in this university. Meet our graduate admissions
          representative to learn more about our graduate programs and decide
          what it the best for you.
        </p>
      </div>

      <div className="w-full hidden flex-1 lg:block ">
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
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}

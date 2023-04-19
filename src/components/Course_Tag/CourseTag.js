import React from "react";
import Image from "next/image";
import { CiViewList } from "react-icons/ci";
import { RiTimeLine } from "react-icons/ri";
import { RxTrackNext } from "react-icons/rx";
import { CiGlobe } from "react-icons/ci";
import Socials from "../Socials";
import { TfiTwitter } from "react-icons/tfi";
import { AiFillFacebook } from "react-icons/ai";
import CourseTagItem from "./CourseTagItem";
import { formatPrice } from "../../Utils/Utils";
export default function CourseTag({
  coursePrice,
  courseDuration,
  courseImage,
  courseCategory,
  courseMethod
}) {
  const category = courseCategory.replace("_", " ");

  return (
    <>
      <div className=" w-full sm:w-80  mt-8 sm:mt-0 ">
        <Image
          src={courseImage}
          width={100}
          height={100}
          alt="smiling-black-male-student-in-modern-university-PJG86AL"
          className="object-cover w-full h-40 rounded-t-xl"
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
        <div className="  w-full shadow-md rounded-b-xl">
          <p className="px-4 text-xl font-bold my-8">
            N {formatPrice(coursePrice)}
          </p>
          <CourseTagItem
            title="Category"
            subtitle={category}
            color="gray"
            icon={<CiViewList className="mr-2 " />}
          />
          <CourseTagItem
            title="Duration"
            subtitle={`${courseDuration} Hours`}
            color="gray"
            icon={<RiTimeLine className="mr-2 " />}
          />

          <CourseTagItem
            title="Method"
            subtitle={courseMethod === true  ? "Online" : "Offline"}
            color="gray"
            icon={<CiViewList className="mr-2 " />}
          />
          {/* <CourseTagItem
            title="Lectures"
            subtitle="5 Lectures"
            color="gray"
            icon={<RxTrackNext className="mr-2 " />}
          /> */}

          {/* <CourseTagItem
            title="Language"
            subtitle="English"
            color="transparent"
            icon={<CiGlobe className="mr-2 " />}
          /> */}
          {/* <div className="flex flex-col px-6 space-y-8 py-8">
            <button className="bg-[#FF2883] p-4 rounded-lg text-white">
              Add To Cart
            </button>

            <button className=" p-4 rounded-lg bg-white shadow-lg text-[#FF2883] ">
              Add To Wishlist
            </button>
          </div> */}

          <div className="flex items-center justify-center text-xl text-gray-400 py-5">
            <Socials icon={<TfiTwitter />} />
            <Socials icon={<AiFillFacebook />} />{" "}
          </div>
        </div>
      </div>
    </>
  );
}

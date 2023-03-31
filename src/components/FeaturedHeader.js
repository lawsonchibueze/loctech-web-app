"use client";
import React from "react";
import FeaturedHeaderItem from "./FeaturedHeaderItem";

export default function FeaturedHeader({ title, categories, btnName }) {
  return (
    <div className="mx-3 sm:p-4 sm:mx-20 sm:flex sm:flex-row sm:items-center sm:justify-between">
      <h3 className="text-2xl font-semibold	 sm:4xl  ">{title}</h3>
      {categories ? (
        <div className="flex justify-between items-center">
          <FeaturedHeaderItem title="All" param="all" />
          <FeaturedHeaderItem title="Trending" param="trending" />

          <FeaturedHeaderItem title="Popularity" param="popularity" />
          <FeaturedHeaderItem title="Featured" param="Featured" />
          <FeaturedHeaderItem title="Art & Design" param="design" />
        </div>
      ) : (
        <button className="text-[#FF2883] bg-[#EEF0F4] cursor-pointer text-lg sm:py-2 sm:px-4 font-semibold sm:xl">
          {btnName}
        </button>
      )}
    </div>
  );
}

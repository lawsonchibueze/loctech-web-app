"use client"
import React from "react";

export default function error({ error, reset }) {
  return (
    <div className="text-center mt-10 ">
      <h2>Something went wrong</h2>

      <button className="py-4 px-10 my-4 bg-[#FF2883] sm:text-xl font-medium rounded-md text-white cursor-pointer" onClick={() => reset()}>
        try again
      </button>
    </div>
  );
}

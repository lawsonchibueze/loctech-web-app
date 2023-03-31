import React from "react";

export default function Timer() {
  return (
    <div className=" flex items-center justify-center  my-4 sm:my-10">
      <div className="py-8 flex text-center sm:text-start w-full sm:w-2/4 flex-col bg-[#EEF0F4] items-center justify-evenly	 sm:flex-row">
        <div>
          <p className="text-lg">Let Us Help</p>
          <h3 className="text-xl sm:text-2xl py-2">
            Finding Your{" "}
            <span className="text-xl sm:text-2xl font-semibold">
              Right Courses
            </span>
          </h3>
        </div>

        <div >
          <button className="bg-[#FF2883] px-10 py-3 rounded-lg text-white font-semibold text-xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

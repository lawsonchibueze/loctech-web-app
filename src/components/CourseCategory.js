import React from "react";

export default function CourseCategory() {
  return (
    <div className="hidden  sm:block w-80 relative border-2 border-solid my-8 p-4 border-[#EDEDEDED]">
      <div>
        <p className="text-lg font-bold">course categories</p>
        <ul className="list-disc text-base px-5">
          <CourseCategoryItem title=" Art & Design " />
          <CourseCategoryItem title=" Business " />
          <CourseCategoryItem title=" Data Science " />

          <CourseCategoryItem title=" Development " />

          <CourseCategoryItem title="Finance  " />

          <CourseCategoryItem title=" Health & Fitness " />

          <CourseCategoryItem title="Lifestyle  " />

          <CourseCategoryItem title="Marketing  " />
          <CourseCategoryItem title="Music  " />

          <CourseCategoryItem title="Personal Development " />
          <CourseCategoryItem title="Photography  " />
          <CourseCategoryItem title=" Teaching & Academics " />
        </ul>
      </div>
    </div>
  );
}

function CourseCategoryItem({ title }) {
  return <li className="py-3">{title} </li>;
}

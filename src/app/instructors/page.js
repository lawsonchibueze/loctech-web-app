import React from "react";
import InstructorCard from "@/components/InstructorCard";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const fetchInstructors = async () => {
  const instructors = await prisma.instructor.findMany();
  console.log(instructors);
  return instructors;
};

const FetchInstructorPage = async () => {
  const instructors = await fetchInstructors();
  console.log(instructors);

  return (
    <div>
      <p className="font-semibold text-base mx-4 sm:text-lg sm:mx-20">
        Your Instructors
      </p>
      <div className=" gap-4 mx-3 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:mx-20 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3   py-4 ">
        {instructors.map((instructor) => {
          return (
            <InstructorCard
              key={instructor?.id}
              name={instructor?.name}
              image={instructor?.image}
              rating={instructor?.rating}
              bio= {instructor?.bio}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FetchInstructorPage;

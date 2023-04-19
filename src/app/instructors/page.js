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
      {instructors.map((instructor) => {
        const { id, name, image } = instructor;
        return <InstructorCard key={id} name={name} image={image} />;
      })}
    </div>
  );
};

export default FetchInstructorPage;

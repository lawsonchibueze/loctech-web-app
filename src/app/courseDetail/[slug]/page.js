import React from "react";

import CourseDetailHero from "@/components/CourseDetailHero";
import CourseDescription from "@/components/CourseDesp";
import Curriculum from "@/components/Curriculum";
import InstructorCard from "@/components/InstructorCard";
import RatingCard from "@/components/RatingCard";
import Reviews from "@/components/Reviews";
import { PrismaClient, Instructor } from "@prisma/client";
import Instructors from "@/app/instructors/page";

const prisma = new PrismaClient();

const fetchInstructorById = async (instructorId) => {
  const instructor = await prisma.instructor.findMany({
    where: {
      instructorId,
    },
  });

  return instructor;
};

const fetchCourseBySlug = async (slug) => {
  const course = await prisma.course.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!course) {
    return null;
  }

  return course;
};

export default async function page({ params }) {
  const { slug, instructorId } = params;
  const course = await fetchCourseBySlug(slug);
  // const relatedCourses = await fetchRelatedCoursesById(
  //   course.relatedCoursesId
  // );
  const instructors = await fetchInstructorById(instructorId);

  const filteredInstructor = instructors?.filter(
    (instructor) => course?.instructorId === instructor.id //  returns the instructor of the course by checking course.id === instructor.id;
  );

  const courseInstructor = {
    //populating the instructor object
    id: filteredInstructor[0]?.id,
    name: filteredInstructor[0]?.name,
    email: filteredInstructor[0]?.email,
    image: filteredInstructor[0]?.image,
    bio: filteredInstructor[0]?.bio,
    rating: filteredInstructor[0]?.rating,
    reviews: filteredInstructor[0]?.reviews,
    facebook: filteredInstructor[0]?.facebook,
    twitter: filteredInstructor[0]?.twitter,
    instagram: filteredInstructor[0]?.instagram,
    linkedin: filteredInstructor[0]?.linkedin,
  };

  return (
    <div>
      <CourseDetailHero
        courseTitle={course?.name}
        courseDuration={course?.duration}
        coursePrice={course?.price}
        courseCategory={course?.category}
        courseImage={course?.image}
        courseMethod={course?.isOnline}
      />
      <CourseDescription
        description={course?.description}
        courseLearningObj={course?.learningObj}
        courseTargetAudience={course?.targetAud}
        coursePrerequisites={course?.prerequisites}
      />
      <Curriculum
        courseCurriculum={course?.curriculumList}
        curriculum={course?.curriculum}
        duration={course?.duration}
      />
      {/* <InstructorCard /> */}
      <RatingCard courseInstructor={courseInstructor} />
      {/* <Reviews /> */}
    </div>
  );
}

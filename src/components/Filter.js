"use client";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";

const fetchRelatedCourses = async () => {
  const coursescag = await prisma.course.findMany({});

  return coursescag;
};

const Filter = () => {
  return (
    <div>
      <Link href="/courses?category=DATA_SCIENCE">
        <Image
          src="/category/DataScientist.jpg"
          alt="data science"
          width={300}
          height={300}
          priority
          className="p-10 cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Filter;

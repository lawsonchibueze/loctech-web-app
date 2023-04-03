import { FeaturedCourseArr } from "@/Utils";
import React from "react";
import FeaturedCard from "./FeaturedCard";
import Link from "next/link";

export default function FeaturedItem({ courses }) {
  {
    courses.map((course) => {
      const { id, name, image, description, price, category, duration, slug } =
        course;
      return (
        <div key={id}>
          <Link href={`id`}>
            <FeaturedCard
              name={name}
              description={description}
              price={price}
              duration={duration}
              category={category}
              image={image}
            />
          </Link>
        </div>
      );
    });
  }
}

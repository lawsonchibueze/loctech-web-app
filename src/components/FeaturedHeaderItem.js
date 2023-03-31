'use client'

import React from 'react'
import Link from "next/link";
import { useSearchParams } from "next/navigation";


export default function FeaturedHeaderItem({title, param}) {

    const searchParams = useSearchParams();
    const category = searchParams.get("category");
    console.log(category)
  return (
   <div className={`sm:mx-4  ${category && category === param && "shadow-lg transition-shadow duration-300 p-3"} `}>
    <Link href={`/?category=${param}`}>
      <p className={`${category && category === param && "text-[#FF2883]"}`}>  {title}</p>
    </Link>
   </div>
  )
}

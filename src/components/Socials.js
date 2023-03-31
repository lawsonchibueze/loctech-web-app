import React from "react";
import Link from "next/link";
export default function Socials({ icon }) {
  return (
    <Link href="" className="mx-4">
      <div>{icon}</div>
    </Link>
  );
}

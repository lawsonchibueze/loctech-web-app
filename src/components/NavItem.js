import React from "react";
import Link from "next/link";

export default function NavItem({ to, name }) {
  return (
    <Link
      href={to}
      className="text-black hover:bg-[#FF2883] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    >
      {name}
    </Link>
  );
}

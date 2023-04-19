import AboutUsHero from "@/components/AboutUsHero";
import AboutUsService from "@/components/AboutUsService";
import History from "@/components/History";
import React from "react";

export default function page() {
  return <div>
    <AboutUsHero/>
    <History/>
    <AboutUsService/>
  </div>;
}

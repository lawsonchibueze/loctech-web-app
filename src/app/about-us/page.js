import AboutUsHero from "@/components/AboutUsHero";
import AboutUsService from "@/components/AboutUsService";
import History from "@/components/History";
import ServiceCard from "@/components/ServiceCard";
import React from "react";

export default function page() {
  return <div>
    <AboutUsHero/>
    {/* <History/> */}
    <AboutUsService/>
    <ServiceCard/>
    <ServiceCard right/>
    <ServiceCard/>


  </div>;
}

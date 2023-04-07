import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import FeaturedHeader from "@/components/FeaturedHeader";
import FeaturedCard from "@/components/Featured/FeaturedCard";
import FeaturedItem from "@/components/Featured/FeaturedItem";
import Timer from "@/components/Timer";
import SubjectCard from "@/components/Subjects/SubjectCard";
import Partners from "@/components/Partners";
import NewsletterCard from "@/components/NewsletterCard";
import Footer from "@/components/Footer/Footer";
import { PrismaClient } from "@prisma/client";


const inter = Inter({ subsets: ["latin"] });

const prisma = new PrismaClient();

const fetchCourse = async () => {
  // const courses = await prisma.course.findMany();
  return [];
};

const fetchHero = async () => {
  // const hero = await prisma.hero.findMany();
  return [];
};

export default async function Home({searchParams}) {

  const courses = await fetchCourse();
  const hero = await fetchHero();
  console.log("=====", searchParams);
  // console.log('==========',hero);
  return (
    <div>
      {hero.map((hero) => {
        const { id, title, subtitle, image, button } = hero;
        return (
          <Hero
            key={id}
            title={title}
            subtitle={subtitle}
            image={image}
            button={button}
          />
        );
      })}
      <div className=" gap-4 mx-3 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:mx-20 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2   py-4 ">
        <Card
          image="/black-woman-in-modern-office-speeking-on-phone-PHV96YW (1).png"
          title="Online Courses from Loctech IT Training Institute"
          btnName="Find Out More"
        />
        <Card
          image="/black-student-boy-preparing-research-LKD6ZMJ.png"
          title="Master Your Coding Skills in Your Space"
          btnName="View More Courses"
        />
      </div>
      <FeaturedHeader title="Explore Featured Courses " categories />
      <div className=" gap-4 mx-3 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:mx-20 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5   py-4 ">
        <FeaturedItem courses={courses} />
      </div>

      <Timer />

      <FeaturedHeader title="Browse Subjects " btnName="View all Courses" />

      <div className=" gap-4 mx-3 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:mx-20 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4   py-4 ">
        <SubjectCard
          title="Art & Design"
          img="/black-businesswoman-using-computer-3LRZ45J.png"
        />
        <SubjectCard
          title="Business"
          img="/black-business-guy-taking-notes-in-notebook-M5W6MA5.png"
        />
        <SubjectCard
          title="Data Science"
          img="/african-american-student-working-in-cafe-QUHME48 (1).png"
        />
        <SubjectCard
          title="Development"
          img="/black-woman-in-modern-office-speeking-on-phone-PHV96YW (1).png"
        />
      </div>
      <FeaturedHeader title="Loctech Partners " btnName="View all" />
      {/* <Partners /> */}
      <NewsletterCard />
    </div>
  );
}

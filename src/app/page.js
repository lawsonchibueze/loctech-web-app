import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import FeaturedHeader from "@/components/FeaturedHeader";
import FeaturedItem from "@/components/Featured/FeaturedItem";
import Timer from "@/components/Timer";
import SubjectCard from "@/components/Subjects/SubjectCard";
import NewsletterCard from "@/components/NewsletterCard";
import { PrismaClient } from "@prisma/client";

const inter = Inter({ subsets: ["latin"] });

const prisma = new PrismaClient();

const fetchCourse = async () => {
  const courses = await prisma.course.findMany();
  return courses;
};

const fetchHero = async () => {
  const hero = await prisma.hero.findMany();
  return hero;
};

export default async function Home({ searchParams }) {
  const courses = await fetchCourse();
  const hero = await fetchHero();

  const featuredCourses = courses.filter(
    (course) => course.isFeatured === true
  ); //filter featured courses
  // console.log("=====", courses);
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
          to="/online-courses"
        />
        <Card
          image="/black-student-boy-preparing-research-LKD6ZMJ.png"
          title="Master Your Coding Skills in Your Space"
          btnName="View More Courses"
          to="/offline-courses"
        />
      </div>
      <FeaturedHeader title="Explore Featured Courses " categories />
      <div className=" gap-4 mx-3 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:mx-20 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5   py-4 ">
        <FeaturedItem courses={featuredCourses} param={searchParams} />
      </div>

      <Timer />

      <FeaturedHeader title="Browse Subjects " btnName="View all Courses" />

      <div className=" gap-4 mx-3 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:mx-20 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4   py-4 ">
        <SubjectCard
          title="Coding"
          img="/black-businesswoman-using-computer-3LRZ45J.png"
          param="coding"
        />
        <SubjectCard
          title="UI/UX"
          img="/black-business-guy-taking-notes-in-notebook-M5W6MA5.png"
          param="graphics_media"
        />
        <SubjectCard
          title="Networking"
          img="/african-american-student-working-in-cafe-QUHME48 (1).png"
          param="networking"
        />
        <SubjectCard
          title="Productivity"
          img="/black-woman-in-modern-office-speeking-on-phone-PHV96YW (1).png"
          param="office_productivity"
        />

        <SubjectCard
          title="Data Science"
          img="/black-woman-in-modern-office-speeking-on-phone-PHV96YW (1).png"
          param="data_science"
        />

        <SubjectCard
          title="Cloud Computing"
          img="/black-woman-in-modern-office-speeking-on-phone-PHV96YW (1).png"
          param="cloud_computing"
        />
      </div>
      {/* <FeaturedHeader title="Loctech Partners " btnName="View all" /> */}
      {/* <Partners /> */}
      <NewsletterCard />
    </div>
  );
}

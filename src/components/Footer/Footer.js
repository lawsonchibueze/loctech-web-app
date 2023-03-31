import React from "react";
import Image from "next/image";
import FooterItem from "./FooterItem";
export default function Footer() {
  return (
    <>
      <div className=" sm:mx-20 sm:mt-8 sm:py-10 flex  flex-col sm:flex-row sm:justify-between sm:items-start">
        <div className="flex flex-col sm:flex-1 sm:flex-col text-center sm:text-start">
          <Image
            src="/loctech PNG reg.png"
            width={100}
            height={100}
            alt="logo"
          />
          <p className="text-base sm:mt-5">Call us</p>
          <p className="text-sm text-[#FF2883] ">+234 703 888 5466</p>
          <p className="text-sm my-2 mx-10 sm:mx-0 ">
            4a Etim Okpoyo Close, Beside Total Petrol Station, Aba Road PH.
          </p>
          <p className="text-sm font-light">customercare@loctechng.com</p>
        </div>
        <div className="flex flex-col sm:flex-1 sm:flex-col text-center sm:text-start">
          <p className="text-sm font-bold">About</p>
          <FooterItem title="About Us" />
          <FooterItem title="Courses" />
          <FooterItem title="Instructor" />
          <FooterItem title="Events" />
          <FooterItem title="Become A Teacher" />
        </div>
        <div className="flex flex-col sm:flex-1 sm:flex-col text-center sm:text-start">
          <p className="text-sm font-bold">Links</p>

          <FooterItem title="News & Blogs" />
          <FooterItem title="Library" />
          <FooterItem title="Gallery" />
          <FooterItem title="Partners" />
          <FooterItem title="Career" />
        </div>
        <div className="flex flex-col sm:flex-1 sm:flex-col sm:text-start text-center ">
          <p className="text-sm font-bold">Support</p>
          <FooterItem title="Documentation" />
          <FooterItem title="FAQs" />
          <FooterItem title="Forum" />
          <FooterItem title="Sitemap" />
        </div>
      </div>
      <div className="sm:mx-20 sm:flex-row text-sm py-3 flex-col sm:py-5 flex items-center justify-between">
        <div className="flex items-center ">
          <p>Terms of Use</p>
          <p className="mx-4 ">Privacy Policy</p>
        </div>
        <div>
          <p>© 2023 Loctech. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}

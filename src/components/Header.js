import React from "react";
import Socials from "./Socials";
import { TfiTwitter } from "react-icons/tfi";
import { AiFillFacebook, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex bg-gradient-to-r from-[#7F17E8] to-[#5103E2] p-5 w-full flex-col md:flex-row md:justify-between sm:px-20">
      <div className="flex items-center flex-col sm:flex-row">
        <div className="flex items-center">
          <AiOutlinePhone />
          <p className="text-sm">(+234) 703 888 5466</p>
        </div>
        <div className="flex items-center mx-4">
          <AiOutlineMail />
          <p className="text-sm">customercare@loctechng.com</p>
        </div>
      </div>

      <div className="flex items-center justify-between  	">
        <div className="flex items-center border-solid 	">
          <p className="mr-5">Log in</p>
          <p>Register</p>
        </div>
        <div className="flex justify-end">
          <Socials icon={<TfiTwitter />} />
          <Socials icon={<AiFillFacebook />} />

          <Socials icon={<FaInstagram />} />
        </div>
      </div>
    </div>
  );
}

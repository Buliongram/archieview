import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  X,
  YouTube,
  appstore,
  archieViewlogoblue,
  logo,
  playstore,
  telegram,
  tiktok,
} from "../assets/images/images";
import { IoChevronDownOutline } from "react-icons/io5";
export default function Footer() {
  const [showFooter, setShowFooter] = useState(false);
  const [showFooter1, setShowFooter1] = useState(false);

  return (
    <footer className="flex flex-col gap-10 w-full p-4 lg:p-8  mt-20">
      <main className="flex md:items-center justify-between flex-col md:flex-row gap-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <span className="text-[15px] font-semibold">FOLLOW US ON:</span>
          <span className="flex items-center gap-6">
            <a href="">
              <img src={Facebook} className="w-[20px]" alt="" />
            </a>
            <a href="">
              <img src={X} className="w-[20px]" alt="" />
            </a>
            <a href="">
              <img src={tiktok} className="w-[20px]" alt="" />
            </a>
            <a href="">
              <img src={telegram} className="w-[20px]" alt="" />
            </a>
            <a href="">
              <img src={YouTube} className="w-[20px]" alt="" />
            </a>
          </span>
        </div>
        <div className="flex items-center gap-6 w-full md:w-max justify-center">
          <span className="bg-black/80 shadow-md  shadow-black/20 rounded-full p-1.5 px-6  cursor-pointer">
            <img src={appstore} className=" w-[100px]" alt="" />
          </span>
          <span className="bg-white shadow-md  shadow-black/20 rounded-full p-2 px-6  cursor-pointer">
            <img src={playstore} className=" w-[100px]" alt="" />
          </span>
        </div>
      </main>
      <main className="flex justify-between w-full flex-col md:flex-row text-[14px] gap-10  mt-4 md:mt-0">
        <section className="  w-full  flex flex-col gap-4 lg:pr-14 ">
          <img
            className="w-[100px] md:w-[150px]"
            src={archieViewlogoblue}
            alt=""
          />
          <span>
            ArchieView is an app that rewards you with AVI tokens for completing
            small and simple tasks. It's a leading open engagement platform
            accessible to anyone, requiring no special skills. With minimal
            requirements.
          </span>
          <span className=" flex items-center gap-1 font-[500]">
            Archieview <i className="fa-light fa-copyright"></i>
            {new Date().getFullYear()}. All Rights Reserved
          </span>
        </section>
        <section className="  w-full  flex flex-col gap-4">
          <span
            onClick={() => setShowFooter(!showFooter)}
            className="text-[19px] flex items-center justify-between cursor-pointer"
          >
            <span>Company</span>
            <span
              className="h-8 w-8 rounded-full bg-[#f6fafd] flex items-center md:hidden justify-center text-[13px] shadow-md"
              id="faq1"
            >
              <IoChevronDownOutline />
            </span>
          </span>
          <div
            className={`md:flex flex-col gap-4 ${
              showFooter ? "flex" : "hidden"
            }`}
          >
            <Link to={"/about"}>About Us</Link>
            <Link to={"/contact"}>Contact us</Link>
            <Link to={"/benefits"}>Why choose ArchieView</Link>
            <Link to={"/referral-program"}>Referral Program</Link>
            <Link to={"/faq"}>FAQ</Link>
          </div>
        </section>

        <section className="  w-full  flex flex-col gap-4">
          <span
            onClick={() => setShowFooter1(!showFooter1)}
            className="text-[19px] flex items-center justify-between cursor-pointer"
          >
            <span>Quick Links</span>
            <span
              className="h-8 w-8 rounded-full bg-[#f6fafd] flex items-center md:hidden justify-center text-[13px] shadow-md"
              id="faq1"
            >
              <IoChevronDownOutline />
            </span>
          </span>
          <div
            className={`md:flex flex-col ${
              showFooter1 ? "flex" : "hidden"
            } gap-4`}
          >
            <Link to={"/"}>Home</Link>
            <Link to={"/register"}>Create an account</Link>
            <Link to={"/login"}>Sign In</Link>
            <Link to={"/features"}>Features</Link>
          </div>
        </section>
      </main>
    </footer>
  );
}

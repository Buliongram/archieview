import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  X,
  YouTube,
  appstore,
  logo,
  playstore,
  telegram,
  tiktok,
} from "../assets/images/images";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-10 w-full p-4 lg:p-8  mt-20">
      <main className="flex md:items-center justify-between flex-col md:flex-row gap-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <span className="text-[15px] font-semibold">FOLLOW US ON:</span>
          <span className="flex items-center gap-6">
            <Link>
              <img src={Facebook} className="w-[20px]" alt="" />
            </Link>
            <Link>
              <img src={X} className="w-[20px]" alt="" />
            </Link>
            <Link>
              <img src={telegram} className="w-[20px]" alt="" />
            </Link>
            <Link>
              <img src={tiktok} className="w-[20px]" alt="" />
            </Link>
            <Link>
              <img src={YouTube} className="w-[20px]" alt="" />
            </Link>
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
      <main className="flex justify-between w-full flex-col md:flex-row text-[14px] gap-10 md:gap-0 mt-4 md:mt-0">
        <section className="  w-full  flex flex-col gap-4 lg:pr-14">
          <img className="w-[40px]" src={logo} alt="" />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            iste distinctio ipsam mollitia hic? Vitae totam fuga, delectus
            sapiente possimus vel minus doloribus velit
          </span>
          <span className=" flex items-center gap-1 font-[500]">
            Archieview <i className="fa-light fa-copyright"></i>{" "}
            {new Date().getFullYear()}. All Rights Reserved
          </span>
        </section>
        <section className="  w-full  flex flex-col gap-4">
          <span className="text-[19px] ">Information & support</span>
          <Link to={"/contact"}>Contact us</Link>
          <Link to={"/methods-of-earning"}>Methods of earning</Link>
          <Link to={"/affiliate-program"}>Affiliate Program</Link>
          <Link to={"/referral-program"}>Referral Program</Link>
        </section>
        <section className="  w-full  flex flex-col gap-4">
          <span className="text-[19px] ">Legal</span>
          <Link to={"/privacy-policy"}>Privacy Policy</Link>
          <Link to={"/terms"}> Terms of Service</Link>
          <Link to={"/cookies"}> Cookies Policy</Link>
          <Link to={"/copyright"}> Copyright</Link>
          <Link to="/faq"> FAQ</Link>
        </section>
        <section className="  w-full  flex flex-col gap-4">
          <span className="text-[19px] ">Quick Links</span>
          <Link to={"/"}>Home</Link>
          <Link to={"/register"}>Create an account</Link>
          <Link to={"/login"}>Sign In</Link>
          <Link to={"/about"}>About Us</Link>
          <Link to={"/resources"}>Resources</Link>
        </section>
      </main>
    </footer>
  );
}

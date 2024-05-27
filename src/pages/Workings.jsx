import React, { useEffect } from "react";
import GetStarted from "../components/Home/GetStarted";
import { makemoney, process, whyjoin } from "../assets/images/images";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Workings() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="p-4  lg:px-20 flex flex-col md:flex-row pt-10 lg:pt-20 gap-8 lg:gap-0 mt-[4rem] md:mt-0">
        <main
          className="flex flex-col gap-6 lg:gap-10 w-full"
          data-aos="fade-right"
        >
          <span className="text-3xl lg:text-5xl font-bold text-blue-900 leading-tight">
            How to Earn Money at ArchieView
          </span>
          <span className="lg:text-[20px] text-blue-900">
            Watch videos,play games, take surveys, and complete other easy
            microtasks to earn rewards.
          </span>
        </main>
        <main
          className=" w-full flex items-center justify-center"
          data-aos="fade-left"
        >
          <img src={process} className="w-[300px] lg:w-[300px]" alt="" />
        </main>
      </section>

      <section className="p-4 lg:px-20 flex flex-col md:items-cente md:flex-row pt-10 lg:pt-20 lg:gap-8 gap-20 relative ">
        <main
          className="whyJoin relative w-full flex items-center lg:justify-start justify-center"
          data-aos="fade-right"
        >
          <img
            src={whyjoin}
            className="w-[300px] relative lg:w-[400px]"
            alt=""
          />
        </main>

        <main className="flex flex-col gap-6 w-full" data-aos="fade-left">
          <div className="flex items-center gap-4">
            <span className="h-8 w-8 rounded-full flex items-center justify-center bg-blue-100 text-center text-[20px]   text-blue-900 leading-tight">
              1
            </span>
            <span className="text-2xl lg:text-4xl  font-[500] text-blue-900 leading-tight">
              Sign up to ArchieView
            </span>
          </div>
          <span className="lg:text-[20px] text-blue-900 relative">
            To register on ArchieView simply click on "Registration" button on
            the
            <a href="/" className="text-blue-500">
              homepage
            </a>
            . You will be asked to provide some basic information during your
            account creation. After registering, you will be sent a confirmation
            email in order to finalize your registration. You must click the
            link sent to your email inbox to confirm your registration on{" "}
            <a href="www.ArchieView.com" className="text-blue-500">
              www.ArchieView.com
            </a>
            .
          </span>
        </main>
      </section>

      <section className="p-4 lg:px-20 flex flex-col md:flex-row-reverse mt-14 pt-10 lg:pt-20 lg:gap-8 gap-20">
        <main
          className="whyJoin relative w-full flex items-center lg:justify-end justify-center"
          data-aos="fade-right"
        >
          <img
            src={makemoney}
            className="w-[300px] relative lg:w-[400px]"
            alt=""
          />
        </main>

        <main className="flex flex-col gap-6 w-full" data-aos="fade-left">
          <div className="flex items-center gap-4">
            <span className="h-8 w-8 rounded-full flex items-center justify-center bg-blue-100 text-center text-[20px]   text-blue-900 leading-tight">
              2
            </span>
            <span className="text-2xl lg:text-4xl  font-[500] text-blue-900 leading-tight">
              Select a method of earning
            </span>
          </div>
          <span className="lg:text-[20px] text-blue-900">
            Discover a wide variety of opportunities for revenue. Whether you
            enjoy taking surveys, testing applications, watching videos, or
            performing micro-tasks tasks, there is an option for you. Turn your
            free time into earnings. Whether you're commuting, waiting in line,
            or taking a coffee break, turn these moments into real rewards.
          </span>
        </main>
      </section>

      <section className="p-4 lg:px-20 flex flex-col items-center md:flex-row pt-10 lg:pt-28 lg:gap-8 gap-20 relative ">
        <main
          className="whyJoin relative w-full flex items-center lg:justify-start justify-center"
          data-aos="fade-right"
        >
          <img
            src={whyjoin}
            className="w-[300px] relative lg:w-[400px]"
            alt=""
          />
        </main>

        <main className="flex flex-col gap-6 w-full" data-aos="fade-left">
          <div className="flex items-center gap-4">
            <span className="h-8 w-8 rounded-full flex md:items-center justify-center bg-blue-100 text-center text-[20px]   text-blue-900 leading-tight">
              3
            </span>
            <span className="text-2xl lg:text-4xl  font-[500] text-blue-900 leading-tight">
              Get paid in AVItokens
            </span>
          </div>
          <span className="lg:text-[20px] text-blue-900 relative">
            After successfully completing chosen tasks, you'll earn AVI tokens.
            These means of cryptocurrency can be withdrawn to your crypto
            wallet, converting your efforts into a tangible digital asset. AVI
            tokens have value beyond the platform. Trade them on exchanges or
            even gift cards. The possibilities are vast, and there are even more
            opportunities on the horizon.
          </span>
        </main>
      </section>
      <GetStarted />
    </>
  );
}

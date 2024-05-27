import React from "react";
import { makemoney } from "../assets/images/images";
import GetStarted from "../components/Home/GetStarted";

export default function About() {
  return (
    <>
      <section className="p-4  lg:px-20 flex flex-col md:flex-row pt-10 lg:pt-20 gap-8 lg:gap-0 mt-[4rem] md:mt-0">
        <main className="flex flex-col gap-6 lg:gap-6 w-full">
          <span className="text-3xl lg:text-[43px] font-bold text-blue-900 leading-tight">
            About ArchieView
          </span>
          <span className="lg:text-[20px] text-blue-900">
            Archieview is a free app that rewards you with AVI tokens for
            completing small and simple tasks. It's a leading open engagement
            platform accessible to anyone, requiring no special skills. With
            minimal requirements, it aims to provide the largest range of tasks,
            offering passive income opportunities for everyone.
          </span>
        </main>
        <main className=" w-full flex items-center justify-center">
          <img src={makemoney} className="w-[300px] lg:w-[400px]" alt="" />
        </main>
      </section>

      <section className="p-4  lg:px-20 flex flex-col md:flex-row-reverse pt-10 lg:pt-20 gap-8 lg:gap-0">
        <main className="flex flex-col gap-6 lg:gap-6 w-full">
          <span className="text-3xl lg:text-[43px] font-bold text-blue-900 leading-tight">
            Our Mission
          </span>
          <span className="lg:text-[20px] text-blue-900">
            We believe in transparency and ensuring that your time translates
            into tangible benefits. Here's why becoming a part of our community
            is a decision that goes beyond just getting paid to watch ads and
            perform tasks but also providing a simple way to get paid to watch
            ads without needing special skills or a lot of time.Say goodbye to
            mindless scrolling. With ArchieView, every minute spent watching
            videos is a minute well spent.
          </span>
        </main>
        <main className=" w-full flex items-center justify-center md:justify-start">
          <img src={makemoney} className="w-[300px] lg:w-[400px]" alt="" />
        </main>
      </section>

      <GetStarted />
    </>
  );
}

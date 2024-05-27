import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function GetStarted() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section
      className="flex items-center flex-col gap-6 lg:mt-[10rem] mt-4"
      data-aos="fade-right"
    >
      <span className=" text-center text-[20px] lg:text-4xl font-bold text-blue-900 leading-tight lg:px-[12rem] px-4 mt-10 lg:mt-0">
        Sign up now and start watching your way to rewards!
      </span>
      <a
        href="/register"
        className=" lg:py-3 py-2 font-[500] text-sm lg:text-lg px-4 lg:px-10 rounded-full shadow-lg text-white bg-blue-500 hover:bg-blue-700"
      >
        Get started now
      </a>
    </section>
  );
}

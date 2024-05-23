import React, { useEffect } from "react";
import {
  bluevector,
  cartoon,
  lightblueVector,
  makemoney,
  whyjoin,
} from "../assets/images/images";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Homepage() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <section className="p-4 bg-[#f1f5f9] lg:px-20 flex flex-col md:flex-row pt-10 lg:pt-20 gap-8 lg:gap-0">
        <main className="flex flex-col gap-6 lg:gap-10 w-full">
          <span className="text-3xl lg:text-5xl font-bold text-blue-900 leading-tight">
            Where Money Meets <br />
            Opportunity
          </span>
          <span className="lg:text-[20px] text-blue-900">
            On the phone, computer or tablet, Earn daily income wherever you
            are, by watching videos, filing out surveys, performing tasks.{" "}
          </span>
          <Link
            to={"/register"}
            className="py-2 font-[500] text-lg px-6 rounded-2xl w-max shadow-lg text-white bg-blue-500 hover:bg-blue-700"
          >
            Start Earning
          </Link>
        </main>
        <main className=" w-full flex items-center justify-center">
          <img src={makemoney} className="w-[300px] lg:w-[400px]" alt="" />
        </main>
      </section>
      <section className="flex flex-col items-center mt-10">
        <span className="px-4 text-center text-2xl lg:text-[40px] font-bold text-blue-900 leading-tight">
          Turn your time into profit
        </span>

        <section className="p-4 lg:px-20 flex flex-col md:flex-row pt-10 lg:pt-20 lg:gap-8 gap-20 relative ">
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
            <span className="text-2xl lg:text-4xl  font-[500] text-blue-900 leading-tight">
              Why choose Archieview
            </span>
            <span className=" text-blue-500 font-bold text-lg">Benefits</span>
            <span className="lg:text-[20px] text-blue-900 relative">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores architecto, tempore dicta cum laudantium molestiae
              porro libero ipsum laboriosam, dolorum, ea culpa? Necessitatibus
              suscipit magni molestiae nam magnam itaque est, asperiores velit
              adipisci consectetur similique ut atque sunt nobis sed.
            </span>
          </main>
          <img
            src={lightblueVector}
            alt=""
            className="absolute  w-[150px] lg:w-[250px] -right-[5rem] top-[70%] rotate-180"
          />
        </section>

        <section className="p-4 lg:px-20 flex flex-col md:flex-row-reverse lg:mt-20 pt-10 lg:pt-20 lg:gap-8 gap-20 relative">
          <main
            className="entertainment relative w-full flex items-center lg:justify-end justify-center"
            data-aos="fade-right"
          >
            <img
              src={cartoon}
              className="w-[300px] relative lg:w-[400px]"
              alt=""
            />
          </main>

          <main className="flex flex-col gap-6 w-full " data-aos="fade-left">
            <span className="text-2xl lg:text-4xl  font-[500] text-blue-900 leading-tight">
              Entertainment that pays
            </span>
            <span className=" text-blue-500 font-bold text-lg">
              How it works
            </span>
            <span className="lg:text-[20px] text-blue-900 relative">
              From web browser games,completing surveys, watching
              videos,performing daily tasks & testing mobile apps ,you can get
              paid daily on Archieview Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Hic facilis voluptates reiciendis ab asperiores
              quia.{" "}
            </span>
          </main>

          <img
            src={bluevector}
            alt=""
            className="absolute w-[150px] lg:w-[250px] -left-[5rem] top-[80%] rotate-180"
          />
        </section>

        <section className="p-4 lg:px-20 flex flex-col md:flex-row mt-14 pt-10 lg:pt-20 lg:gap-8 gap-20">
          <main
            className="whyJoin relative w-full flex items-center lg:justify-start justify-center"
            data-aos="fade-right"
          >
            <img
              src={makemoney}
              className="w-[300px] relative lg:w-[400px]"
              alt=""
            />
          </main>

          <main className="flex flex-col gap-6 w-full" data-aos="fade-left">
            <span className="text-2xl lg:text-4xl  font-[500] text-blue-900 leading-tight">
              Outstanding features
            </span>
            <span className=" text-blue-500 font-bold text-lg">Resources</span>
            <span className="lg:text-[20px] text-blue-900">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores architecto, tempore dicta cum laudantium molestiae
              porro libero ipsum laboriosam, dolorum, ea culpa? Necessitatibus
              suscipit magni molestiae nam magnam itaque est, asperiores velit
              adipisci consectetur similique ut atque sunt nobis sed.
            </span>
          </main>
        </section>

        <section className="flex items-center flex-col gap-6 lg:mt-[10rem] mt-4">
          <span className="px-4 text-center text-2xl lg:text-[40px] font-bold text-blue-900 leading-tight">
            Your gateway to exclusive opportunities
          </span>
          <a
            href="/register"
            className=" lg:py-3 py-2 font-[500] text-sm lg:text-lg px-4 lg:px-10 rounded-full shadow-lg text-white bg-blue-500 hover:bg-blue-700"
          >
            Get started now
          </a>
        </section>
      </section>
    </>
  );
}

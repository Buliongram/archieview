import React, { useEffect } from "react";
import {
  aviCryptotoken,
  bluevector,
  cartoon,
  getstarted,
  lightblueVector,
  makemoney,
  purchase,
  signup,
  startearning,
  whyjoin,
} from "../assets/images/images";

import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import GetStarted from "../components/Home/GetStarted";
export default function Homepage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="p-4 bg-[#f1f5f9] lg:px-20 flex flex-col md:flex-row pt-10 lg:pt-20 gap-8 lg:gap-0">
        <main
          className="flex flex-col gap-6 lg:gap-10 w-full"
          data-aos="fade-right"
        >
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
            className="py-2 font-[500] text-lg px-6 rounded-full w-max shadow-lg text-white bg-blue-500 hover:bg-blue-700"
          >
            Start Earning
          </Link>
        </main>
        <main
          className=" w-full flex items-center justify-center"
          data-aos="fade-left"
        >
          <img src={makemoney} className="w-[300px] lg:w-[400px]" alt="" />
        </main>
      </section>

      <section className="flex flex-col items-center mt-10">
        <span className="px-4 text-center text-2xl lg:text-[40px] font-bold text-blue-900 leading-tight">
          Convert your free time into profit
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
            <span className="lg:text-[20px] text-blue-900 relative">
              ArchieView is recognized as one of the best apps to earn money ,
              standing out for it's transparency. It provides more than just
              income. It is a holistic experience with exclusive bonuses,
              referral perks, and a supportive community. Moreover, ArchieView
              offers a unique opportunity to learn about cryptocurrency, making
              it a platform that covers all aspects of earning and education.
            </span>
          </main>
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

          <main className="flex flex-col gap-6 w-full" data-aos="fade-left">
            <span className="text-2xl lg:text-4xl  font-[500] text-blue-900 leading-tight">
              Entertainment that pays
            </span>
            <span className="lg:text-[20px] text-blue-900 relative">
              From web browser games,completing surveys, watching videos,
              performing daily tasks & testing mobile apps, ArchieView is here
              to revolutionize your digital experience. Imagine getting paid for
              something you already love doing - watching videos! Yes, you read
              that right. We reward you for enjoying your favorite content.
            </span>
          </main>
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
            <span className="lg:text-[20px] text-blue-900">
              Whether you're a student, a stay-at-home parent, a freelancer, or
              anyone looking to boost their income, ArchieView offers a diverse
              range of microtasks that require no special skills. Take surveys,
              play games, watch videos or do quick 3-5 minute tasks – turn spare
              moments into valuable earnings.
            </span>
          </main>
        </section>

        <section className="p-4 lg:px-20 flex flex-col md:flex-row-reverse mt-14 pt-10 lg:pt-20 lg:gap-8 gap-20">
          <main
            className=" relative w-full flex  lg:justify-end justify-center"
            data-aos="fade-right"
          >
            <img
              src={aviCryptotoken}
              className="w-[300px] relative lg:w-[450px]"
              alt=""
            />
          </main>

          <main className="flex flex-col gap-6 w-full" data-aos="fade-left">
            <span className="text-2xl lg:text-4xl  font-[500] text-blue-900 leading-tight">
              Learn Crypto, Risk-Free
            </span>
            <span className="lg:text-[20px] text-blue-900">
              Dive into the realm of cryptocurrency with user-friendly
              education. Grasp basics, dismiss myths, gain confidence for this
              digital landscape. Securely start your crypto journey by earning
              AVI tokens through microtasks.
            </span>
          </main>
        </section>
      </section>

      <section className="flex items-center flex-col gap-4 lg:mt-[10rem] mt-10 w-full">
        <span className=" text-center text-[26px] lg:text-4xl font-bold text-blue-900 leading-tight lg:px-[12rem] px-3">
          Get started in Minutes
        </span>
        <span className="lg:text-[20px] text-blue-900 px-4 text-center">
          Join our community by creating an account. It's quick and easy.{" "}
        </span>

        <section className="p-4 lg:px-20 flex flex-col md:flex-row lg:mt-5  lg:gap-8 gap-10   w-full">
          <main
            className="w-full flex items-center lg:justify-start justify-center "
            data-aos="fade-right"
          >
            <img src={getstarted} className="w-[250px]   lg:w-[430px]" alt="" />
          </main>

          <main className="flex flex-col gap-10 w-full ">
            <div className="flex items-center gap-4" data-aos="fade-right">
              <img src={signup} className="w-[70px] lg:w-[100px]" alt="" />
              <div className="flex flex-col gap-3">
                <span className="flex items-center gap-5">
                  <span className="h-8 w-8 rounded-full flex items-center justify-center bg-blue-100 text-center text-[20px]   text-blue-900 leading-tight">
                    1
                  </span>
                  <span className="text-center text-[20px] lg:text-2xl font-bold text-blue-500 leading-tight">
                    Create an account
                  </span>
                </span>
                <span className="lg:text-[20px] text-blue-900">
                  Click on “Registration” on the home page and input your
                  correct registration details.
                </span>
              </div>
            </div>
            <div
              className="flex items-center gap-4 lg:ml-10"
              data-aos="fade-left"
            >
              <img src={purchase} className="w-[70px] lg:w-[100px]" alt="" />
              <div className="flex flex-col gap-3">
                <span className="flex items-center gap-5">
                  <span className="h-8 w-8 rounded-full flex items-center justify-center bg-blue-100 text-center text-[20px]   text-blue-900 leading-tight">
                    2
                  </span>
                  <span className="text-center text-[20px] lg:text-2xl font-bold text-blue-500 leading-tight">
                    Purchase a vista plan
                  </span>
                </span>
                <span className="lg:text-[20px] text-blue-900">
                  After completing your registration, fund your ArchieView
                  wallet and purchase a vista plan by navigating to the
                  "subscribe" section on the dashboard
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4" data-aos="fade-right">
              <img
                src={startearning}
                className="w-[70px] lg:w-[100px]"
                alt=""
              />
              <div className="flex flex-col gap-3">
                <span className="flex items-center gap-5">
                  <span className="h-8 w-8 rounded-full flex items-center justify-center bg-blue-100 text-center text-[20px]   text-blue-900 leading-tight">
                    3
                  </span>
                  <span className="text-center text-[20px] lg:text-2xl font-bold text-blue-500 leading-tight">
                    Start earning
                  </span>
                </span>
                <span className="lg:text-[20px] text-blue-900">
                  Navigate to the 'Earn' section to start earning. When you
                  complete a task, you earn AVU tokens which can be converted to
                  USDT and withdrawn
                </span>
              </div>
            </div>
          </main>
        </section>
      </section>

      <section className="flex items-center flex-col gap-6 lg:mt-[10rem] mt-4">
        <span className=" text-center text-[20px] lg:text-4xl font-bold text-blue-900 leading-tight lg:px-[12rem] px-4 mt-10 lg:mt-0">
          Trusted by a variety of users
        </span>
        <span className="lg:text-[20px] text-blue-900 px-4 text-center">
          What our customers are saying
        </span>
        <section className="testimonials w-full px-8">
          <main
            className="flex flex-col justify-between h-[300px] p-5 rounded-lg shadow-lg"
            data-aos="fade-right"
          >
            <div className="flex flex-col gap-4">
              <span className="flex items-center gap-1 text-blue-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <span className="text-[16px]">
                Archieview is the recommended platform you should have on your
                phones. The navigation and transparency of performed tasks are
                smooth. I recommend this platform if you want to boost your
                income and need a side hustle.
              </span>
            </div>
          </main>
          <main
            className="flex flex-col justify-between h-[300px] p-5 rounded-lg shadow-lg"
            data-aos="fade-in"
          >
            <div className="flex flex-col gap-4">
              <span className="flex items-center gap-1 text-blue-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <CiStar className="text-[20px]" />
              </span>
              <span className="text-[16px]">
                This app is incredibly helpful. Just follow the rules and earn
                tokens massively. I give it a 4 because it works effectively for
                me. All the features are amazing. As a new user, I have noticed
                that some of the features are unavailable, but overall, the app
                is great.
              </span>
            </div>
          </main>
          <main
            className="flex flex-col justify-between h-[300px] p-5 rounded-lg shadow-lg"
            data-aos="fade-left"
          >
            <div className="flex flex-col gap-4">
              <span className="flex items-center gap-1 text-blue-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <span className="text-[16px]">
                Great app that gives you the opportunity to learn and grow your
                knowledge on projects with crypto. Great earning features also
              </span>
            </div>
          </main>
        </section>
      </section>

      <GetStarted />
    </>
  );
}

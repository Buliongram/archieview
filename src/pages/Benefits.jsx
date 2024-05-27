import React, { useEffect } from "react";
import GetStarted from "../components/Home/GetStarted";
import Aos from "aos";
import "aos/dist/aos.css";
import { makemoney, whyjoin } from "../assets/images/images";
export default function Benefits() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="p-4  lg:px-20 flex flex-col md:flex-row pt-10 lg:pt-20 gap-8 lg:gap-0 mt-[4rem] md:mt-0">
        <main
          className="flex flex-col gap-6 lg:gap-6 w-full"
          data-aos="fade-right"
        >
          <span className="text-3xl lg:text-[43px] font-bold text-blue-900 leading-tight">
            Why choose Archieview?
          </span>
          <span className="lg:text-[20px] text-blue-900">
            The appeal lies in the simplicity. We designed a platform that
            easily fits into your daily routine, providing a simple way to get
            paid to watch ads without needing special skills or a lot of time.
            As you watch ads and perform tasks to earn money, you're not just a
            viewer– you're an active participant in a community that values your
            time and compensates you for it.
          </span>
        </main>
        <main
          className=" w-full flex items-center justify-center"
          data-aos="fade-left"
        >
          <img src={makemoney} className="w-[300px] lg:w-[400px]" alt="" />
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
              Flexibility in Earning
            </span>
          </div>
          <span className="lg:text-[20px] text-blue-900 relative">
            Enjoy the freedom to earn on your own terms, fitting tasks
            seamlessly into your schedule. Archieview is designed to adapt to
            your lifestyle, allowing you to get paid to watch ads and perform
            tasks at your own pace. Whether you spend a few minutes or an hour
            completing tasks, the choice is yours.
          </span>
        </main>
      </section>
      <section className="p-4 lg:px-20 flex flex-col md:flex-row-reverse mt-14 pt-10 lg:pt-20 lg:gap-8 gap-20">
        <main
          className="  w-full flex items-center lg:justify-end justify-center"
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
              Variety of Content
            </span>
          </div>
          <span className="lg:text-[20px] text-blue-900">
            Dive into a diverse range of content while earning. Explore ads that
            align with your interests and preferences, surveys that matches your
            personal preferences and lots more making the entire experience not
            just profitable but enjoyable.
          </span>
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
              3
            </span>
            <span className="text-2xl lg:text-4xl  font-[500] text-blue-900 leading-tight">
              No Special Skills Required
            </span>
          </div>
          <span className="lg:text-[20px] text-blue-900 relative">
            Archieview is designed to be accessible to everyone. You don't need
            specialized skills or knowledge; all that is required is your
            willingness to watch ads and earn.
          </span>
        </main>
      </section>
      <section className="p-4 lg:px-20 flex flex-col md:flex-row-reverse mt-14 pt-10 lg:pt-20 lg:gap-8 gap-20">
        <main
          className="  w-full flex items-center lg:justify-end justify-center"
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
              4
            </span>
            <span className="text-2xl lg:text-4xl  font-[500] text-blue-900 leading-tight">
              Reliable Payouts
            </span>
          </div>
          <span className="lg:text-[20px] text-blue-900">
            Rest assured that your efforts are valued and will be rightly
            rewarded. Our transparent payout system ensures that you receive
            your earnings reliably and on time with rewards typically issued
            instantly after task completion
          </span>
        </main>
      </section>
      <section className="p-4 lg:px-20 flex flex-col md:flex-row mt-14 pt-10 lg:pt-20 lg:gap-8 gap-20">
        <main
          className="  w-full flex items-center lg:justify-start justify-center"
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
              5
            </span>
            <span className="text-2xl lg:text-4xl  font-[500] text-blue-900 leading-tight">
              User-Friendly Platform
            </span>
          </div>
          <span className="lg:text-[20px] text-blue-900">
            Enjoy a seamless and intuitive platform that simplifies the task
            completion process. Navigate tasks effortlessly, maximizing your
            earning potential with ease.
          </span>
        </main>
      </section>
      <section className="p-4 lg:px-20 flex flex-col md:flex-row-reverse mt-14 pt-10 lg:pt-20 lg:gap-8 gap-20">
        <main
          className="  w-full flex items-center lg:justify-end justify-center"
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
              6
            </span>
            <span className="text-2xl lg:text-4xl  font-[500] text-blue-900 leading-tight">
              Dedicated Support
            </span>
          </div>
          <span className="lg:text-[20px] text-blue-900">
            Our dedicated support team is available to assist you with any
            questions or concerns you may have, ensuring that you have the
            support you need every step of the way on your journey to completing
            tasks online for money.
          </span>
        </main>
      </section>
      <GetStarted />
    </>
  );
}

import React, { useEffect } from "react";
import GetStarted from "../components/Home/GetStarted";
import {
  app,
  cartoon,
  games,
  surveys,
  tasks,
  video,
} from "../assets/images/images";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Features() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="p-4 lg:px-20 flex flex-col md:flex-row pt-10 lg:pt-20 gap-8 lg:gap-0 mt-[4rem] md:mt-0">
        <main
          className="flex flex-col gap-6 lg:gap-10 w-full"
          data-aos="fade-right"
        >
          <span className="text-3xl lg:text-5xl font-bold text-blue-900 leading-tight">
            Outstanding Features
          </span>
          <span className="lg:text-[20px] text-blue-900">
            Explore our extensive collection of videos across various
            categories. From entertainment to education, there's something for
            everyone.
          </span>
        </main>
        <main
          className=" w-full hidden md:flex items-center justify-center"
          data-aos="fade-left"
        >
          <img src={cartoon} className="w-[250px] lg:w-[350px]" alt="" />
        </main>
      </section>

      <section className="p-4 lg:px-20 flex flex-col md:flex-row pt-10 lg:pt-14 lg:gap-8 gap-10  ">
        <main
          className="  w-full flex items-center lg:justify-start justify-center"
          data-aos="fade-right"
        >
          <img src={video} className="w-[300px]  lg:w-[400px]" alt="" />
        </main>

        <main className="flex flex-col gap-6 w-full" data-aos="fade-left">
          <span className="text-2xl lg:text-4xl  font-[500] text-blue-900 leading-tight">
            Watch videos
          </span>
          <span className="lg:text-[20px] text-blue-900 ">
            ArchieView provides a unique opportunity to get paid to watch
            videos, earning money from the comfort of your own home while
            enjoying a variety of engaging video content tailored to your
            personal preference. By joining ArchieView, you gain access to
            exclusive video-watching tasks that not only provide competitive
            rewards but also allow you to turn downtime into productive moments
            on your mobile device.
          </span>
        </main>
      </section>

      <section className="p-4 lg:px-20 flex flex-col md:flex-row-reverse pt-10 lg:pt-20 lg:gap-8 gap-14 ">
        <main
          className="  w-full flex items-center lg:justify-end justify-center"
          data-aos="fade-right"
        >
          <img src={surveys} className="w-[300px]  lg:w-[400px]" alt="" />
        </main>

        <main className="flex flex-col gap-6 w-full" data-aos="fade-left">
          <span className="text-2xl lg:text-4xl  font-[500] text-blue-900 leading-tight">
            Take Surveys
          </span>
          <span className="lg:text-[20px] text-blue-900 ">
            With ArchieView , earning extra cash is straightforward. You get
            paid for surveys you complete, turning your opinions and insights
            into real financial rewards. It’s a smart way to take surveys to
            make money, leveraging your spare time for financial benefits. Our
            system is designed to make the process of taking surveys to make
            money as seamless and rewarding as possible.
          </span>
        </main>
      </section>

      <section className="p-4 lg:px-20 flex flex-col md:flex-row pt-10 lg:pt-20 lg:gap-8 gap-10  ">
        <main
          className="  w-full flex items-center lg:justify-start justify-center"
          data-aos="fade-right"
        >
          <img src={games} className="w-[300px]  lg:w-[400px]" alt="" />
        </main>

        <main className="flex flex-col gap-6 w-full" data-aos="fade-left">
          <span className="text-2xl lg:text-4xl  font-[500] text-blue-900 leading-tight">
            Play Games
          </span>
          <span className="lg:text-[20px] text-blue-900 ">
            At ArchieView, you can dive into playing games for real money
            whenever it suits you best, whether you're relaxing at home or on
            the move. Play games, hit milestones, and collect rewards for an
            engaging and rewarding experience. It's the ideal solution for those
            seeking to turn their gaming skills into financial rewards during
            their downtime.
          </span>
        </main>
      </section>

      <section className="p-4 lg:px-20 flex flex-col md:flex-row-reverse pt-10 lg:pt-20 lg:gap-8 gap-10 ">
        <main
          className="  w-full flex items-center lg:justify-end justify-center"
          data-aos="fade-right"
        >
          <img src={app} className="w-[300px]  lg:w-[400px]" alt="" />
        </main>

        <main className="flex flex-col gap-6 w-full" data-aos="fade-left">
          <span className="text-2xl lg:text-4xl  font-[500] text-blue-900 leading-tight">
            Application testing
          </span>
          <span className="lg:text-[20px] text-blue-900 ">
            At ArchieView, we offer an exceptional opportunity for individuals
            to get paid to test products and actively shape the future of
            digital innovations.  By engaging in our platform, you'll gain
            access to exclusive digital product testing opportunities, where you
            can experience the latest innovations before they reach the market.
            Your insights and feedback play a pivotal role in refining these
            digital offerings, making you an essential contributor to the
            evolution of technology.
          </span>
        </main>
      </section>

      <section className="p-4 lg:px-20 flex flex-col md:flex-row pt-10 lg:pt-20 lg:gap-8 gap-10  ">
        <main
          className="  w-full flex items-center lg:justify-start justify-center"
          data-aos="fade-right"
        >
          <img src={tasks} className="w-[300px]  lg:w-[400px]" alt="" />
        </main>

        <main className="flex flex-col gap-6 w-full" data-aos="fade-left">
          <span className="text-2xl lg:text-4xl  font-[500] text-blue-900 leading-tight">
            Other small tasks
          </span>
          <span className="lg:text-[20px] text-blue-900 ">
            Explore earning opportunities by completing tasks online for money.
            Find various tasks to earn rewards from your computer or smartphone.
          </span>
        </main>
      </section>
      <GetStarted />
    </>
  );
}

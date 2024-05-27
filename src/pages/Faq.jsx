import React, { useEffect } from "react";
import { faq } from "../assets/images/images";
import { IoChevronDownOutline } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Faq() {
  function showFaq(cont) {
    cont.nextElementSibling.classList.toggle("dflex");
  }

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
            What can we help you find?
          </span>
          <span className="lg:text-[20px] text-blue-900">
            Do you need help with something or do you have questions on some
            features? Get answers to your questions by looking through our
            knowledge base.
          </span>
        </main>
        <main className=" w-full flex  justify-center " data-aos="fade-left">
          <img src={faq} className="w-[250px] lg:w-[350px] " alt="" />
        </main>
      </section>

      <section className="p-4  lg:px-20 flex flex-col  pt-10 lg:pt-20 gap-6 ">
        <span className="text-[20px] lg:text-4xl font-bold text-blue-900 leading-tight px-4 mt-10 lg:mt-0">
          Frequently asked questions
        </span>
        <main className="flex flex-col gap-3 max-w-[40rem] w-full">
          <div className="flex flex-col gap-6 bg-[#f6fafd] px-5 py-3">
            <span className="flex items-center justify-between cursor-pointer text-blue-900">
              <span className=" font-semibold">What is ArchieView?</span>
              <span
                className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-[13px] shadow-md"
                id="faq1"
              >
                <IoChevronDownOutline />
              </span>
            </span>
            <span className="hidden overflow-hidden">
              ArchieView is a platform for monetization of desktop, mobile web
              and in-app audiences, remnant ad inventory, and social traffic
              with access to worldwide advertisers and high
              revenue-oriented tools. It is a free app that rewards you with AVI
              tokens for completing small and simple tasks. It's a leading open
              engagement platform accessible to anyone, requiring no special
              skills. With minimal requirements, it aims to provide the largest
              range of tasks, offering passive income
              opportunities for everyone.
            </span>
          </div>

          <div className="flex flex-col gap-6 bg-[#f6fafd] px-5 py-3">
            <span className="flex items-center justify-between cursor-pointer text-blue-900">
              <span className=" font-semibold">
                How do I register on ArchieView?
              </span>
              <span
                className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-[13px] shadow-md"
                id="faq1"
              >
                <IoChevronDownOutline />
              </span>
            </span>
            <span className="hidden overflow-hidden">
              To register on ArchieView simply click on "Registration" button on
              the
              <a href="/" className="text-blue-500">
                homepage
              </a>
              . You will be asked to provide some basic information during your
              account creation. After registering, you will be sent a
              confirmation email in order to finalize your registration. You
              must click the link sent to your email inbox to confirm your
              registration on{" "}
              <a href="www.ArchieView.com" className="text-blue-500">
                www.ArchieView.com
              </a>
              .
            </span>
          </div>

          <div className="flex flex-col gap-6 bg-[#f6fafd] px-5 py-3">
            <span className="flex items-center justify-between cursor-pointer text-blue-900">
              <span className=" font-semibold">
                How can I start earning money on ArchieView?
              </span>
              <span
                className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-[13px] shadow-md"
                id="faq1"
              >
                <IoChevronDownOutline />
              </span>
            </span>
            <span className="hidden overflow-hidden">
              To start getting paid to watch ads with ArchieView, simply go to
              click on the “registration” to create your account. Once
              registered, navigate to the subscribe section and purchase a vista
              plan . This enables you to take part in the available features .
              Once you’ve purchased a plan, navigate to the "Earn" section, find
              tasks that interests you.Complete these tasks, and you will get
              paid in AVI token.
            </span>
          </div>

          <div className="flex flex-col gap-6 bg-[#f6fafd] px-5 py-3">
            <span className="flex items-center justify-between cursor-pointer text-blue-900">
              <span className=" font-semibold">
                How much money can you make on ArchieView?
              </span>
              <span
                className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-[13px] shadow-md"
                id="faq1"
              >
                <IoChevronDownOutline />
              </span>
            </span>
            <span className="hidden overflow-hidden">
              Each feature you engage in adds to your earnings, and with a bit
              of time, you can steadily accumulate passive income. It's an
              opportunity where the journey is as rewarding as the destination,
              making it a pleasant and hassle-free way to boost your pocket
              money. Engage, explore, and experience the satisfaction of earning
              at your own pace.
            </span>
          </div>

          <div className="flex flex-col gap-6 bg-[#f6fafd] px-5 py-3">
            <span className="flex items-center justify-between cursor-pointer text-blue-900">
              <span className=" font-semibold">
                Why choose ArchieView for passive income over other platforms?
              </span>
              <span
                className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-[13px] shadow-md"
                id="faq1"
              >
                <IoChevronDownOutline />
              </span>
            </span>
            <span className="hidden overflow-hidden">
              ArchieView is recognized as one of the best apps to earn money,
              standing out for its simplicity and transparency. It provides more
              than just income – it's a holistic experience with exclusive
              bonuses, referral perks, and a supportive community. Moreover,
              ArchieView offers a unique opportunity to learn about
              cryptocurrency, making it a platform that covers all aspects of
              earning and education.
            </span>
          </div>

          <div className="flex flex-col gap-6 bg-[#f6fafd] px-5 py-3">
            <span className="flex items-center justify-between cursor-pointer text-blue-900">
              <span className=" font-semibold">
                Can I refer friends to ArchieView and earn additional rewards?
              </span>
              <span
                className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-[13px] shadow-md"
                id="faq1"
              >
                <IoChevronDownOutline />
              </span>
            </span>
            <span className="hidden overflow-hidden">
              Absolutely! ArchieView encourages community engagement. Once you
              complete your registration, navigate to the "Referral" section in
              the menu bar where you can find your referral link. By sharing
              this link with friends, you’ll receive 5% bonus when your friends
              registers and purchase a vista plan and +2% bonus if your friend
              invites another friend. Referring friends is a great way to share
              the ArchieView experience and further boost your earnings.
            </span>
          </div>

          <div className="flex flex-col gap-6 bg-[#f6fafd] px-5 py-3">
            <span className="flex items-center justify-between cursor-pointer text-blue-900">
              <span className=" font-semibold">
                I did not receive a Verification Link to confirm my
                registration?
              </span>
              <span
                className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-[13px] shadow-md"
                id="faq1"
              >
                <IoChevronDownOutline />
              </span>
            </span>
            <span className="hidden overflow-hidden">
              If you did not receive a verification link in your mailbox, please
              check your spam folder. Alternatively, log into your ArchieView
              Account and if your email is not verified, there will be a link
              which you can click to resend a verification email into your
              mailbox
            </span>
          </div>

          <div className="flex flex-col gap-6 bg-[#f6fafd] px-5 py-3">
            <span className="flex items-center justify-between cursor-pointer text-blue-900">
              <span className=" font-semibold">
                I've forgotten my password, what can I do?
              </span>
              <span
                className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-[13px] shadow-md"
                id="faq1"
              >
                <IoChevronDownOutline />
              </span>
            </span>
            <span className="hidden overflow-hidden">
              Please go to the sign in section, and down below click on the link
              ‘’Forgot your Password’’. You will be asked to provide the email
              address associated with your ArchieView account. You will then
              receive a reset password email with a link that will remain valid
              for 30 minutes. Following this link will allow you to create a new
              password for your ArchieView account.
            </span>
          </div>
          <div className="flex flex-col gap-6 bg-[#f6fafd] px-5 py-3">
            <span className="flex items-center justify-between cursor-pointer text-blue-900">
              <span className=" font-semibold">
                What devices are compatible for performing tasks on ArchieView?
              </span>
              <span
                className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-[13px] shadow-md"
                id="faq1"
              >
                <IoChevronDownOutline />
              </span>
            </span>
            <span className="hidden overflow-hidden">
              ArchieView is compatible with both laptops and smartphones. An
              android and iOS app will be released soon. If you're using any
              other device, you can still access ArchieView through the web
              version to start earning money. Simply connect to the internet and
              get started with your earnings.
            </span>
          </div>
          <div className="flex flex-col gap-6 bg-[#f6fafd] px-5 py-3">
            <span className="flex items-center justify-between cursor-pointer text-blue-900">
              <span className=" font-semibold">
                How can I edit my personal information?
              </span>
              <span
                className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-[13px] shadow-md"
                id="faq1"
              >
                <IoChevronDownOutline />
              </span>
            </span>
            <span className="hidden overflow-hidden">
              Sign in to your ArchieView account, then click on the profile
              photo icon at the top right, select settings and you can edit your
              information and click SAVE.
            </span>
          </div>
          <div className="flex flex-col gap-6 bg-[#f6fafd] px-5 py-3">
            <span className="flex items-center justify-between cursor-pointer text-blue-900">
              <span className=" font-semibold">
                How to withdraw AVItokens to your cryptocurrency wallet?
              </span>
              <span
                className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-[13px] shadow-md"
                id="faq1"
              >
                <IoChevronDownOutline />
              </span>
            </span>
            <span className="hidden overflow-hidden">
              Once you’ve reached the payout thresholds on ArchieView , you can
              withdraw your AVI tokens whenever you want. Once you have decided
              that you have accumulated enough and wish to withdraw your AVI
              token simply navigate to the “assets” section , click on trade and
              convert your AVI tokens to USDT, then click on withdraw and paste
              your USDT withdrawal address.
            </span>
          </div>
        </main>
      </section>
      <section
        className="flex items-center flex-col gap-6 lg:mt-[10rem] mt-4"
        data-aos="fade-right"
      >
        <span className=" text-center text-[20px] lg:text-4xl font-bold text-blue-900 leading-tight lg:px-[12rem] px-4 mt-10 lg:mt-0">
          Have any other questions?
        </span>
        <span className="lg:text-[20px] text-blue-900 px-4 text-center">
          Do not hesitate to send us an email with your enquiry and statement
          at:
        </span>
        <a
          className="lg:text-[20px] text-blue-500 font-semibold px-4 text-center"
          href="mailto:"
        >
          Info@ArchieView.com
        </a>
      </section>
    </>
  );
}

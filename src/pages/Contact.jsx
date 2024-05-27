import React from "react";
import { supppott } from "../assets/images/images";

export default function Contact() {
  return (
    <>
      <section className="p-4  lg:px-20 flex flex-col md:flex-row pt-10 lg:pt-20 gap-8 lg:gap-0 mt-[4rem] md:mt-0">
        <main className="flex flex-col gap-6 lg:gap-10 w-full">
          <span className="text-3xl lg:text-5xl font-bold text-blue-900 leading-tight">
            Less Phone More Support
          </span>
          <span className="lg:text-[20px] text-blue-900">
            You are not going to hit a ridiculously long phone menu when you
            call us. Your email isn't going to the inbox abyss,never to be seen
            or heard from again. At choice screening, we provide exceptional
            serveice we'd want to experience ourselves!
          </span>
        </main>
        <main className=" w-full flex items-center justify-center">
          <img src={supppott} className="w-[200px] lg:w-[400px]" alt="" />
        </main>
      </section>
      <section className="flex items-center flex-col gap-4 mt-10 w-full p-4">
        {" "}
        <span className=" text-center text-[26px] lg:text-4xl font-bold text-blue-900 leading-tight lg:px-[12rem] px-3">
          Let's start a conversation
        </span>
        <span className="lg:text-[20px] text-blue-900 px-4 text-center">
          We are here for you 24/7. Our Customer Success Team is called that way
          for a reason.
        </span>
        <form
          id="saveContactForm"
          action="{{ route('saveContact') }}"
          method="POST"
          className="border addBorder  flex flex-col gap-6 w-full max-w-[60rem] bg-[#f6fafd] rounded-3xl p-4 lg:p-7 mt-5"
        >
          @csrf
          <div className="flex items-center flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-2 w-full">
              <label for="firstname" className="flex gap-1">
                <span className="text-red-500">*</span>First name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                className="p-3 rounded-xl border addBorder bg-white outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label for="lastname" className="flex gap-1">
                <span className="text-red-500">*</span>Last name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                className="p-3 rounded-xl border addBorder bg-white outline-none"
                required
              />
            </div>
          </div>
          <div className="flex items-center flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-2 w-full">
              <label for="email" className="flex gap-1">
                <span className="text-red-500">*</span>Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="p-3 rounded-xl border addBorder bg-white outline-none"
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label for="category" className="flex gap-1">
                <span className="text-red-500">*</span>Message Category
              </label>
              <select
                name="category"
                id="category"
                required
                className="p-3 rounded-xl border addBorder bg-white outline-none appearance-none cursor-pointer"
              >
                <option value="" selected disabled>
                  Choose only one option
                </option>
                <option value="Account problem">Account Problem</option>
                <option value="Withdrawal">Withdrawal</option>
                <option value="Deposit">Deposit</option>
                <option value="Trading">Trade</option>
                <option value="Transfer">Transfer</option>
                <option value="Purchasing a plan">Purchasing a plan</option>
                <option value="Technical error">Technical Error</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label for="message" className="flex gap-1">
              <span className="text-red-500">*</span>Message
            </label>
            <textarea
              className="p-3 rounded-xl border addBorder bg-white outline-none"
              required
              name="message"
              id="message"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="relative h-[35px] lg:h-[50px] flex items-center justify-center  rounded-full  bg-blue-500 hover:bg-blue-700 cursor-pointer px-4 lg:px-14 mt-7 mx-auto w-[150px] lg:w-[250px]">
            <button
              id="contactBtn"
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 w-full text-center  font-semibold text-sm lg:text-lg  rounded-full text-white h-full"
            >
              Send Message
            </button>
            <div className="loader" id="contactLoader"></div>
          </div>
        </form>
      </section>
    </>
  );
}

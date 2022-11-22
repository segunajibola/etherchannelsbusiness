import React from "react";
import Logo from "../assets/home/homepage1.jpg";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import Testimonials from "./Testimonials";
import { HiOutlineMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const Home = () => {
  const slides = [
    { url: "/images/homepage1.jpg", title: "beach" },
    { url: "/images/homepage2.jpg", title: "beach" },
    { url: "/images/homepage3.jpg", title: "beach" },
    { url: "/images/homepage4.jpg", title: "beach" },
    { url: "/images/homepage5.jpg", title: "beach" },
    { url: "/images/homepage6.jpg", title: "beach" },
  ];

  return (
    <>
      <div className="grid bg-gray-200 pt-14 px-[2px] dark:bg-gray-700 lg:grid-cols-2 2xl:grid-cols-5 w-screen sm:w-full">
        <div className="mx-auto bg-gray-200 lg:max-w-full lg:px-12 lg:py-24 xl:mr-0 2xl:col-span-2 pb-4">
          <div className="mx-auto w-fit mt-0 text-center">
            <div className="w-full h-[200px] mb-6 md:hidden">
              <ImageSlider slides={slides} className="h-fit" />
            </div>
            <h1 className="my-5">GREETINGS!!!</h1>
            <p className="mt-2 text-sm text-gray-900 dark:text-white sm:mt-4 lg:mt-4 lg:text-3xl">
              Hello!!! Good to see you on our website today!!! Are you thinking of acquiring an In-Demand I.T skills to fetch you your dreams job, here is the best place for you to take all things IT Training and CBT Testing hub!! Our core value is the provision of affordable
              professional and Top-Notch I.T training and Computer-Based Testing to corporate organizations and individual clients.
            </p>
            <div className="mt-4 space-x-3 sm:mt-6">
              <a
                href="/"
                className="focus:outline-none inline-block transform rounded-lg bg-[#2b4b77] px-3 py-2 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-400 focus:ring focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 active:bg-blue-600 dark:bg-[#264775]"
              >
                View all courses
              </a>
              <a
                href="/"
                className="focus:outline-none inline-block rounded-lg bg-gray-300 px-3 py-2 text-sm font-semibold uppercase tracking-wider text-gray-800 hover:bg-gray-200 focus:ring focus:ring-gray-300 focus:ring-opacity-50 focus:ring-offset-2 active:bg-gray-400 sm:text-base"
              >
                Know more
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-3 hidden lg:block 2xl:col-span-3">
          <div className="w-[550px] h-[280px] my-0 mx-auto">
            <ImageSlider slides={slides} />
          </div>
        </div>
      </div>

      {/* About */}

      <div className="grid lg:grid-cols-2 bg-gray-100 dark:bg-gray-700">
        <img
          src="/images/aboutUs2.jpeg"
          alt=""
          className="mt-0 mb-3 w-screen mx-2 h-[320px] mx-auto"
        />
        <div className="mx-auto text-center">
          <h2 className="text-2xl font-semibold tracking-wider text-gray-900 dark:text-white my-2">
            About Us
          </h2>
          <p className="w-11/12 mx-auto">
            Ether-channel Solution Services is an I.T firm founded on the 21st
            of December 2020, which aimed at providing quality assurance with a
            top-notch I.T solutions to all our business partners and customers.
            We are innovative, highly motivated and well equipped with one of
            the best IT infrastructures in place and quality training hands. We
            are absolutely committed to ensure that our clients are making good
            technical decisions and are realizing business value and results
            from their I.T. investments throughout our business partnering.
          </p>
          <Link to="/about">
            <button
              className="m-2 pb-2 text-sm font-semibold underline tracking-widest dark:border-white dark:bg-blue-600 dark:text-white"
              onClick={() => window.scrollTo(0, 0)}
            >
              More about us.
            </button>
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-[1000px] px-2 py-2 lg:max-w-full lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-wider text-gray-900 dark:text-white">
          Testimonials
        </h2>
        <Testimonials />
      </div>
      <div className="mx-auto max-w-full px-8 py-4 dark:bg-gray-800 lg:max-w-full lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-wider text-gray-900 dark:text-white">
          Our Partners
        </h2>
        <div className="grid grid-cols-2">
          <div className="mx-auto">
            <img src={Logo} alt="" className="w-24 h-24" />
            <img src={Logo} alt="" className="w-24 h-24" />
            <img src={Logo} alt="" className="w-24 h-24" />
          </div>
          <div className="mx-auto">
            <img src={Logo} alt="" className="w-24 h-24" />
            <img src={Logo} alt="" className="w-24 h-24" />
            <img src={Logo} alt="" className="w-24 h-24" />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-full px-8 py-4 dark:bg-gray-800 lg:max-w-full lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-wider text-gray-900 dark:text-white">
          Contact Information
        </h2>
        <div className="w-4/5 mx-auto">
          <a href="">
            <HiOutlineMail
              size={29}
              className="my-[5px] text-gray-300 dark:text-gray-600 inline"
            />
            etherchannelsbusiness@gmail.com
          </a>
          <a href="" className="block">
            <HiPhone
              size={29}
              className="text-gray-300 dark:text-gray-600 inline"
            />
            +234 803 985 0630
          </a>
          <a href="">
            <HiLocationMarker
              size={29}
              className="my-[4px] text-gray-300 dark:text-gray-600 inline"
            />
            Address: 23, Oluwalopeye Street, PPL, Ojo, Lagos, Nigeria.
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;

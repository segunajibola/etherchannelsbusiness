import React from "react";
import Logo from "../assets/home/homepage1.jpg";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import Testimonials from "./Testimonials";
import { HiOutlineMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import data from "../data/services.js";
import ServicesCard from "./ServiceCard";
import CountUp, { useCountUp } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Home = () => {
  const slides = [
    { url: "/images/pic1.jpeg", title: "beach" },
    { url: "/images/pic2.jpeg", title: "beach" },
    { url: "/images/pic3.jpeg", title: "beach" },
    { url: "/images/pic4.jpeg", title: "beach" },
    { url: "/images/pic5.jpeg", title: "beach" },
  ];

  useCountUp({
    ref: 'counter',
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <>
      <div className="grid bg-gray-200 pt-10 px-[2px] dark:bg-gray-700 lg:grid-cols-1 w-screen sm:w-full">
        <div className="relative mt-2 hidden md:block md:col-span-5 2xl:col-span-3">
          <div className="w-full h-[470px] my-0 mx-auto">
            <ImageSlider slides={slides} />
          </div>
        </div>
        <div className="mx-auto bg-gray-200 lg:max-w-full pb-4 lg:p-8 xl:mr-0 2xl:col-span-2">
          <div className="mx-auto w-fit mt-0 text-center">
            <div className="w-full h-[230px] mb-6 md:hidden">
              <ImageSlider slides={slides} className="h-fit" />
            </div>
            <p className="mt-2 text-sm text-gray-900 dark:text-white sm:mt-4 md:mt-2 lg:text-2xl">
              Are you thinking of acquiring an in-demand IT skills to fetch you
              your dream job? Here is the best place for you to up-skill your
              knowledge and growth in the digital world.
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
      </div>

      {/* About */}

      {/* <div className="grid lg:grid-cols-2 bg-gray-100 dark:bg-gray-700">
        <img
          src="/images/aboutUs2.jpeg"
          alt=""
          className="mt-0 mb-3 md:my-2 w-screen mx-2 h-[320px] md:h-[400px] mx-auto object-cover object-top rounded-md"
        />
        <div className="text-center m-auto">
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
      </div> */}

      {/* Services */}

      <div id="services" className="w-full bg-gray-200 dark:bg-gray-100">
        <div className="p-2 flex flex-col justify-center h-full">
          <div className="text-center">
            <h2 className="text-2xl uppercase font-semibold tracking-wider pb-4">
              Services
            </h2>
          </div>
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 pt-4 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data
              .filter((item, index) => index < 6)
              .map((services) => (
                <ServicesCard services={services} />
              ))}
          </div>
          <Link to="/services" className="flex justify-center">
            <button
              className="text-gray-100 bg-blue-500 px-2 py-2 my-6 rounded-md tracking-wide text-xl"
              onClick={() => window.scrollTo(0, 0)}
            >
              See all services
            </button>
          </Link>
        </div>
      </div>

      <div className="my-4 w-[80%] mx-auto">
        <div className="text-center">
          <h3 className="text-3xl">Some numbers that matters</h3>
          <h4 className="my-2 text-lg">
            Our recent achievement shown by numbers
          </h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 md:w-11/12 mx-auto py-4">
          <div className="text-center text-xl">
          <CountUp end={10} enableScrollSpy />
            <span className="inline">+</span>
            <h5 className="">Years of Experience</h5>
          </div>
          <div className="text-center text-xl">
          <CountUp end={100} enableScrollSpy />
            <span className="inline">+</span>
            <h5 className="">Clients</h5>
          </div>
          <div className="text-center text-xl">
          <CountUp end={200} enableScrollSpy />
            <span className="inline">+</span>
            <h5 className="">Successful Deployment</h5>
          </div>
          <div className="text-center text-xl">
            {/* <VisibilitySensor
              className="inline"
              partialVisibility
              offset={{ bottom: 200 }}
            >
              {({ isVisible }) => (
                <div className="inline h-[20px">
                  {isVisible ? <CountUp end={14} /> : null}
                </div>
              )}
            </VisibilitySensor> */}
            <CountUp end={14} enableScrollSpy />
            <span className="inline">+</span>
            <h5 className="">Awards & Recognition</h5>
          </div>
        </div>
      </div>

      <div className="mx-auto bg-gray-200 max-w-[1000px] px-2 py-2 lg:max-w-full md:mt-4 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-wider text-gray-900 dark:text-white">
          Testimonials
        </h2>
        <p className="text-center text-2xl">What others are saying.</p>
        <Testimonials />
      </div>
      <div className="mx-auto max-w-full px-8 py-4 dark:bg-gray-800 lg:max-w-full lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-wider text-gray-900 dark:text-white">
          Our Partners
        </h2>
        <div className="grid grid-rows-1 md:grid-cols-3 md:w-[30rem] mx-auto">
          <div className="mx-auto">
            <img src={Logo} alt="" className="w-24 h-24" />
            <img src={Logo} alt="" className="w-24 h-24" />
          </div>
          <div className="mx-auto">
            <img src={Logo} alt="" className="w-24 h-24" />
            <img src={Logo} alt="" className="w-24 h-24" />
          </div>
          <div className="mx-auto">
            <img src={Logo} alt="" className="w-24 h-24" />
            <img src={Logo} alt="" className="w-24 h-24" />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-full px-8 py-4 dark:bg-gray-800 lg:max-w-full lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-wider text-gray-900 dark:text-white">
          Contact Information
        </h2>
        <div className="w-11/12 my-3 mx-auto">
          <div className="grid grid-cols-3 mx-auto">
            <div className="bg-gray-200 w-[400px] rounded-xl p-4 mx-auto">
              <HiOutlineMail size={39} className="my-[5px]" />
              <p className="">etherchannelsbusiness@gmail.com</p>
            </div>
            <div className="bg-gray-200 w-[400px] rounded-xl p-4 mx-auto">
              <HiPhone size={39} className="my-[5px]" />
              <p className="">+234 803 985 0630</p>
            </div>
            <div className="bg-gray-200 w-[400px] rounded-xl p-4 mx-auto">
              <HiLocationMarker size={39} className="my-[5px]" />
              <p className="">
                Address: 23, Oluwalopeye Street, PPL, Ojo, Lagos, Nigeria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

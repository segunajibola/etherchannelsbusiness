import React from "react";
import partner1 from "../assets/home/ciscoLogo.png";
import partner2 from "../assets/home/ecCouncil.png";
import partner3 from "../assets/home/juniper.png";
import partner4 from "../assets/home/lasuLogo.png";
import partner5 from "../assets/home/microsoft.jpeg";
import partner6 from "../assets/home/pearson.png";
import client1 from "../assets/home/collegeOfNursing.webp";
import client2 from "../assets/home/dragnet.png";
import client3 from "../assets/home/jambLogo.png";
import client4 from "../assets/home/lasuLogo.png";
import client5 from "../assets/home/trcnLogo.jpeg";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import Testimonials from "./Testimonials";
import { HiOutlineMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import data from "../data/services.js";
import ServicesCard from "./ServiceCard";
import Clients from "./Clients";
import CountUp, { useCountUp } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Home = () => {
  const slides = [
    { url: "/images/slide1.png", title: "beach" },
    { url: "/images/slide2.png", title: "beach" },
    { url: "/images/slide3.png", title: "beach" },
    { url: "/images/slide4.png", title: "beach" },
    { url: "/images/slide5.png", title: "beach" },
    { url: "/images/slide6.png", title: "beach" },
  ];

  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <>
      <div className="grid bg-gray-200 pt-10 px-[2px] dark:bg-gray-700 lg:grid-cols-1 w-screen sm:w-full">
        <div className="relative mt-2 hidden md:block md:col-span-5 2xl:col-span-3">
          <div className="w-full h-[85vh] my-0 mx-auto">
            <ImageSlider slides={slides} />
          </div>
        </div>
        <div className="mx-auto bg-gray-200 lg:max-w-full pb-4 lg:p-8 xl:mr-0 2xl:col-span-2">
          <div className="mx-auto w-fit mt-0 text-center">
            <div className="w-full h-[230px] md:hidden">
              <ImageSlider slides={slides} className="h-fit" />
            </div>
            <p className="my-12 text-sm text-gray-900 dark:text-white lg:text-2xl">
              Are you thinking of acquiring an in-demand IT skills to fetch you
              your dream job? Here is the best place for you to up-skill your
              knowledge and growth in the digital world.
            </p>
            <div className="pt-4 space-x-3 sm:mt-6">
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

      <div
        id="services"
        className="w-full dark:bg-gray-100 flex items-center justify-center mb-12 bg-fixed bg-center bg-cover bg"
      >
        <div className="p-2 flex flex-col justify-center h-full">
          <div className="text-center">
            <h2 className="text-3xl uppercase font-semibold tracking-wider pb-4 md:my-8">
              Services
            </h2>
          </div>
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 pt-4 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {data
              .filter((item, index) => index < 6)
              .map((services) => (
                <ServicesCard services={services} />
              ))}
          </div>
          <Link to="/services" className="flex justify-center">
            <button
              className="text-gray-100 bg-blue-500 p-2 md:p-4 my-6 md:mt-12 rounded-md tracking-wide text-xl font-semibold"
              onClick={() => window.scrollTo(0, 0)}
            >
              See all services
            </button>
          </Link>
        </div>
      </div>

      <div className="my-4 w-[80%] h-[500px] mx-auto">
        <div className="relative h-[300px] pt-[150px]">
          <div className="text-center">
            <h3 className="text-4xl">Some numbers that matters</h3>
            <h4 className="my-2 text-xl">
              Our recent achievement shown by numbers
            </h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 md:w-11/12 mx-auto pt-4 text-2xl">
            <div className="text-center">
              <CountUp end={10} enableScrollSpy />
              <span className="inline">+</span>
              <h5 className="">Years of Experience</h5>
            </div>
            <div className="text-center">
              <CountUp end={100} enableScrollSpy />
              <span className="inline">+</span>
              <h5 className="">Clients</h5>
            </div>
            <div className="text-center">
              <CountUp end={200} enableScrollSpy />
              <span className="inline">+</span>
              <h5 className="">Successful Deployment</h5>
            </div>
            <div className="text-center">
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
      </div>

      <div className="mx-auto max-w-full px-8 py-4 bg-gray-200 dark:bg-gray-800 lg:max-w-full md:px-8 md:py-28 md:my-4 flex items-center justify-center mb-12 bg-fixed bg-center bg-cover bg-2">
        <h2 className="text-center text-2xl font-semibold tracking-wider text-gray-900 dark:text-white md:mb-8">
          Our Clients
        </h2>
        <div className="grid md:grid-cols-5 gap-8 md:w-[60rem] mx-auto">
          <img src={client1} alt="" className="w-44 h-40" />
          <img src={client2} alt="" className="w-44 h-40" />
          <img src={client3} alt="" className="w-44 h-40" />
          <img src={client4} alt="" className="w-44 h-40" />
          <img src={client5} alt="" className="w-44 h-40" />
        </div>
      </div>

      <div className="mx-auto max-w-[1000px] px-2 py-2 lg:max-w-full md:mt-4 md:py-20">
        <h2 className="text-center mt-4 text-2xl font-semibold tracking-wider text-gray-900 dark:text-white">
          Testimonials
        </h2>
        <p className="text-center text-2xl">What others are saying.</p>
        <Testimonials />
      </div>

      <Clients />

      <div className="mx-auto max-w-full px-8 py-4 bg-gray-200 dark:bg-gray-800 lg:max-w-full md:px-8 md:py-28 md:my-4 flex items-center justify-center mb-12 bg-fixed bg-center bg-cover bg-3">
        <h2 className="text-center text-2xl font-semibold tracking-wider text-gray-900 dark:text-white md:mb-8">
          Our Partners
        </h2>
        <div className="grid md:grid-cols-6 gap-8 md:w-[60rem] mx-auto">
          <img src={partner1} alt="" className="w-44 h-40" />
          <img src={partner2} alt="" className="w-44 h-40" />
          <img src={partner3} alt="" className="w-44 h-40" />
          <img src={partner4} alt="" className="w-44 h-40" />
          <img src={partner5} alt="" className="w-44 h-40" />
          <img src={partner6} alt="" className="w-44 h-40" />
        </div>
      </div>

      <div className="mx-auto max-w-full px-8 py-4 dark:bg-gray-800 lg:max-w-full lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-wider text-gray-900 dark:text-white md:pb-8">
          Contact Information
        </h2>
        <div className="w-11/12 my-6 mx-auto">
          <div className="grid grid-cols-3 mx-auto">
            <div className="bg-gray-200 w-[380px] rounded-xl p-4 mx-auto">
              <HiOutlineMail size={39} className="my-[5px]" />
              <p className="text-lg">etherchannelsbusiness@gmail.com</p>
            </div>
            <div className="bg-gray-200 w-[380px] rounded-xl p-4 mx-auto">
              <HiPhone size={39} className="my-[5px]" />
              <p className="text-lg">+234 803 985 0630</p>
            </div>
            <div className="bg-gray-200 w-[380px] rounded-xl p-4 mx-auto">
              <HiLocationMarker size={39} className="my-[5px]" />
              <p className="text-lg">
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

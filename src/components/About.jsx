import { Link } from "react-router-dom";
import React from "react";
import banner from "../assets/about/about5.webp";
import { MdVisibility, MdCreditScore } from "react-icons/md";
import { GiMissileLauncher } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import quotes from "../data/quotes";

const About = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 py-4">
      <div className="grid grid-cols-2 md:grid-cols-1 mt-[60px]">
        <div className="relative">
          <img
          src={banner}
          alt=""
          className="mb-3 w-screen h-[70vh] object-cover object-center"
        />
        <p className="absolute text-7xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold shadow">We Provide Customize I.T Solutions That Suit Your Needs.</p>
        </div>
        
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-wider text-gray-900 dark:text-white my-4">
            About Us
          </h2>
          <p className="w-11/12 mx-auto py-16 text-xl">
            We are IT Solution Services firm founded on the 21st of December
            2020 and Our motive is aimed at providing quality assurance with an
            unbeatable solutions driven to all our business partners and
            customers. We are innovative, highly motivated and well equipped
            with one of the best IT infrastructures, quality and competent
            training hands. We are absolutely committed to ensure that our
            clients are taking highly recommended technical decisions and are
            realizing business value and results from their IT Investments
            throughout our business partnering.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto text-center my-16 gap-8">
        <div className="my-3 bg-gray-300 p-8 rounded-2xl hover:scale-110 delay-100 duration-300">
          <GiMissileLauncher size={100} className="text-center w-24 mx-auto" />
          <h2 className="text-2xl py-8 font-semibold">Our Mission</h2>
          <p className="text-xl">
            Our primary aim and objectives is to bridge the technology gap in
            Nigeria and to motivate and groom young talented tech minds in
            providing quality, cost-effective training and digital solution
            services to increase individual and organizational productivity and
            enrichment.
          </p>
        </div>
        <div className="my-3 bg-gray-300 p-8 rounded-2xl hover:scale-110 delay-100 duration-300">
          <MdVisibility size={100} className="text-center w-24 mx-auto" />
          <h2 className="text-2xl py-8 font-semibold">Our Vision</h2>
          <p className="text-xl">
            Our vision is to be the best and foremost provider of Industry-lead
            Technological and Business skills set training institute in Nigeria
            and all across the Africa.
          </p>
        </div>
        <div className="my-3 bg-gray-300 p-8 rounded-2xl hover:scale-110 delay-100 duration-300">
          <MdCreditScore size={100} className="text-center w-24 mx-auto" />
          <h2 className="text-2xl py-8 font-semibold">Our Core Values</h2>
          <ul className="text-xl">
            <li>Honesty</li>
            <li>Dignity</li>
            <li>Integrity</li>
            <li>Ownership</li>
            <li>Innovation</li>
            <li>Dedication</li>
            <li>Satisfaction</li>
          </ul>
        </div>
      </div>

      <div
        className="w-full overflow-hidden dark:text-white"
      >
        <div className="grid grid-cols sm:grid-cols-1 justify-center gap-8 px-2 pt-4">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-[430px] sm:w-[30rem] mx-auto md:w-[40rem]"
          >
            {quotes.map((quote) => (
              <SwiperSlide className="md:my-2 p-2">
                <figure className="p-3 text-center">
                  <p>{quote.text}</p>
                  <p className="text-xl my-2 italic">{quote.name}</p>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default About;

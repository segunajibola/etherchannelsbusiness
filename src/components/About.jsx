import { Link } from "react-router-dom";
import React from "react";
import banner from "../assets/about/about2.jpeg"

const About = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 py-4">
      <div className="grid grid-cols-2 md:grid-cols-1 mt-[60px]">
        <img
          src={banner}
          alt=""
          className="mb-3 w-screen h-[70vh] object-cover object-center"
        />
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-wider text-gray-900 dark:text-white my-4">
            About Us
          </h2>
          <p className="w-11/12 mx-auto my-2 text-xl">
            Ether-channel Solution Services is an I.T firm founded on the 21st
            of December 2020, which aimed at providing quality assurance with a
            top-notch I.T solutions to all our business partners and customers.
            We are innovative, highly motivated and well equipped with one of
            the best IT infrastructures in place and quality training hands. We
            are absolutely committed to ensure that our clients are making good
            technical decisions and are realizing business value and results
            from their I.T. investments throughout our business partnering.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto text-center my-16 gap-4">
        <div className="my-3">
          <h2 className="text-2xl py-8 font-semibold">OUR MISSION CONTENTS</h2>
          <p className="text-xl">
            Our primary aim and objectives is to bridge the technology gap in Nigeria and to motivate and blend young talented tech minds to provides quality, cost-effective training and services to increase individual and organizational productivity and enrichment.
          </p>
        </div>
        <div className="mb-3 md:my-3">
          <h2 className="text-2xl py-8 font-semibold">OUR VISION CONTENTS</h2>
          <p className="text-xl">
            Our vision is to be the best and foremost provider of
            Industry-leading Technological and Business skill set training institute in Nigeria and all around the globe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

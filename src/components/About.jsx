import { Link } from "react-router-dom";
import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700">
      <div className="grid lg:grid-cols-2">
        <img
          src="/images/aboutUs1.png"
          alt=""
          className="mt-0 mb-3 w-screen mx-2 h-[320px] mx-auto"
        />
        <div className="mx-auto text-center">
          <h2 className="text-2xl font-semibold tracking-wider text-gray-900 dark:text-white my-2">
            About Us
          </h2>
          <p className="w-11/12 mx-auto my-2">
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

      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto text-center">
        <div className="my-3">
          <h2>OUR MISSION CONTENTS</h2>
          <p>
            Our primary aim and objectives is to bridge the technology gap in Nigeria and to motivate and blend young talented tech minds to provides quality, cost-effective training and services to increase individual and organizational productivity and enrichment.
          </p>
        </div>
        <div className="mb-3 md:my-3">
          <h2>OUR VISION CONTENTS</h2>
          <p>
            Our vision is to be the best and foremost provider of
            Industry-leading Technological and Business skill set training institute in Nigeria and all around the globe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

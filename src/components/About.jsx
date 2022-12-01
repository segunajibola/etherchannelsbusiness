import { Link } from "react-router-dom";
import React from "react";
import banner from "../assets/about/about2.jpeg";

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
            We are IT Solution Services firm founded on the 21st of December
            2020 and Our core value is aimed at providing quality assurance with
            an unbeatable solutions driven to all our business partners and
            customers. We are innovative, highly motivated and well equipped
            with one of the best IT infrastructures, quality and competent
            training hands. We are absolutely committed to ensure that our
            clients are taking highly recommended technical decisions and are
            realizing business value and results from their IT Investments
            throughout our business partnering.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto text-center my-16 gap-4">
        <div className="my-3">
          <h2 className="text-2xl py-8 font-semibold">OUR MISSION</h2>
          <p className="text-xl">
          Our primary aim and objectives is to bridge the technology gap in Nigeria and to motivate and groom young talented tech minds in providing quality, cost-effective training and digital solution services to increase individual and organizational productivity and enrichment.
          </p>
        </div>
        <div className="mb-3 md:my-3">
          <h2 className="text-2xl py-8 font-semibold">OUR VISION</h2>
          <p className="text-xl">
          Our vision is to be the best and foremost provider of Industry-lead Technological and Business skills set training institute in Nigeria and all across the Afrvica.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

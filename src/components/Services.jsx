import React from "react";
import banner from "../assets/services/services3.jpeg";
import data from "../data/services.js";
import ServicesCard from "./ServiceCard";

const Services = () => {
  return (
    <>
      <div className="bg-gray-100 py-4 dark:bg-gray-700">
        <div className="grid grid-cols-2 md:grid-cols-1 mt-[40px]">
          <div>
          <img
            src={banner}
            alt=""
            className="mb-3 w-screen h-[70vh] object-cover object-center"
          />
          <p className="absolute text-6xl w-[1000px] text-white top-1/2 left-[30px] -t ranslate-x-1/2 -translate-y-1/2 font-semibold shadow">Improve Your Business Efficiency With Our High Quality Solutions.</p>
          </div>
          <div className="mx-auto text-center">
            <h2 className="text-3xl font-semibold tracking-wider text-gray-900 dark:text-white my-8">
              Our Services
            </h2>
            <p className="w-11/12 mx-auto py-16 text-xl">
              Our core value is the provision of affordable, professional and up-to-date digital I.T training skills that focuses on business need for both corporate organizations, governments and individuals.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-center font-bold text-2xl my-3">What we offer</h2>

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 py-8 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {data.filter(services => services.name !== "IT Training")
          .map((services) => (
            <ServicesCard services={services} first={false} />
          ))}
      </div>
    </>
  );
};

export default Services;

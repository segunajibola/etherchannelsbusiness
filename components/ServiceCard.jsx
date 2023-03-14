"use client";

import React from "react";
import { BsLink } from "react-icons/bs";
import Link from "next/link";

const ServiceCard = (props) => {
  return (
    <div
      className="bg-blue-500 text-white rounded-3xl shadow-xl shadow-black hover:scale-110 delay-100 ease-in-out duration-300"
      key={props.services.id}
    >
      <div className="relative">
        <img
          src={
            props.first === true ? props.services.image1 : props.services.image2
          }
          alt={props.services.alt}
          className="rounded-t-2xl object-cover object-top w-full h-72 opacity-90 hover:opacity-100"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center bg-black-rgba">
          <BsLink className="text-blue-500" size={72} />
        </div>
      </div>

      <div className="px-4 py-8 text-center">
        <h3 className="font-bold w-full text-[22px]">{props.services.name}</h3>
        <p className="py-6" id="line-clamp">
          {props.services.description}
        </p>
        <Link href={`/services/${props.services.name}`} className="block">
          <button
            className="block mt-3 px-2 md:p-3 py-1 bg-white rounded-md shadow-md text-sm md:text-lg font-bold text-black w-11/12 mx-auto text-center"
            onClick={() => window.scroll(0, 0)}
          >
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

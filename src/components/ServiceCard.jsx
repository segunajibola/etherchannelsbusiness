import React from "react";
import { BsLink } from "react-icons/bs";

const ServiceCard = ({ services }) => {
  return (
    <a href={services.link}>
      <div
        className="bg-blue-500 text-white rounded-3xl shadow-lg hover:scale-110 delay-500 ease-in-out duration-300"
        key={services.id}
      >
        <div className="relative">
          <img
            src={services.image}
            alt={services.alt}
            className="rounded-t-2xl object-cover object-top w-full h-72 opacity-90 hover:opacity-100"
          />
          <div
            class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out flex items-center justify-center bg-black-rgba"
          ><BsLink className="text-blue-500" size={72}/></div>
          
        </div>

        <div className="p-8 text-center">
          <h3 className="font-bold w-full text-2xl">{services.name}</h3>
          <p className="py-6 truncate">{services.description}</p>
          <a
            href={services.link}
            className="block mt-2 px-2 md:p-4 py-1 bg-white rounded-md shadow-md text-sm md:text-lg font-bold text-black w-11/12 mx-auto text-center"
          >
            See More
          </a>
        </div>
      </div>
    </a>
  );
};

export default ServiceCard;

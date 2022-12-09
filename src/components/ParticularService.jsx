import React from "react";
import { useParams } from "react-router-dom";

const ParticularService = ({ services }) => {
  // console.log("services", services);

  const { service } = useParams();

  // console.log("params", service);
  
  return (
    <div className="overflow-hidden bg-gray-100 dark:bg-gray-700">
      <div className="mx-auto max-w-7xl pt-12">
        {services
          .filter((services) => services.name === service)
          .map((services) => (
            <div className="flex-shrink-0 text-center py-8">
              <img
                src={services.image1}
                alt={services.alt}
                className="mb-3 w-screen h-[70vh] object-cover object-center"
              />
              <h1 className="py-12">{services.name}</h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ParticularService;
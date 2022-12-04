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
            <div className="flex-shrink-0 text-center py-16">
              <img
                src={services.image}
                alt={services.alt}
                className="h-[50vh] w-full object-cover"
              />
              <p className="py-12">Hello, {services.name}</p>
              <p className="py-12">Hello, {services.alt}</p>
              <p className="py-12">Hello, {services.id}</p>
            </div>
          ))}
      </div>

      {/* <div className="mx-auto mb-3 grid max-w-full gap-6 rounded-md px-4 py-6 md:grid-cols-2 lg:max-w-full lg:px-8 xl:grid-cols-3">
        {destination
          .filter((destination) => destination.state === state)
          .map((destination) =>
            destination.tourCenter?.map((center) => (
              <TourismCards center={center} key={center.id} />
            ))
          )}
      </div> */}
    </div>
  );
};

export default ParticularService;
import React from "react";
import { useParams } from "react-router-dom";

const ParticularService = ({ services }) => {
  // console.log("services", services);

  const { service } = useParams();

  // console.log("params", service);
  
  return (
    <div className="overflow-hidden bg-gray-100 dark:bg-gray-700">
      <div className="w-screen pt-12">
        {services
          .filter((services) => services.name === service)
          .map((services) => (
            <div className="flex-shrink-0 text-center py-8">
              <img
                src={services.image2}
                alt={services.alt}
                className="mb-3 w-screen h-[70vh] object-cover object-center"
              />
              <h1 className="py-12 text-xl">{services.name}</h1>
              <p className="px-12 py-4 text-lg">{services.description2}</p>
              <h1>Check out those exams we deliver</h1>
              <p>{services.heading1}</p>
              <ul>
                <li>{services.heading1.li1}</li>
                <li>{services.heading1.li1}</li>
                <li>{services.heading1.li1}</li>
                <li>{services.heading1.li1}</li>
                <li>{services.heading1.li1}</li>
                <li>{services.heading1.li1}</li>
              </ul>
              <p>{services.heading2}</p>
              <ul>
                <li>

                </li>
              </ul>
              <p>{services.heading3}</p>
              <ul>
                <li>

                </li>
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ParticularService;
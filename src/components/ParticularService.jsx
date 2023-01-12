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
              <p className="font-semibold py-4">{services.heading1}</p>
              <ul className="flex w-[90%] mx-auto border-4 text-center">
                {/* exam map */}
                <li>{services.heading1li3}</li>
                <li>{services.heading1li1}</li>
                <li>{services.heading1li2}</li>
                <li>{services.heading1li4}</li>
                <li>{services.heading1li5}</li>
              </ul>
              <p className="font-semibold py-4">{services.heading2}</p>
              <ul className="flex">
                <li>{services.heading2li1}</li>
                <li>{services.heading2li2}</li>
                <li>{services.heading2li3}</li>
                <li>{services.heading2li4}</li>
                <li>{services.heading2li5}</li>
                <li>{services.heading2li6}</li>
                <li>{services.heading2li7}</li>
              </ul>
              <p className="font-semibold py-4">{services.heading3}</p>
              <ul className="flex">
                <li>{services.heading3li1}</li>
                <li>{services.heading3li2}</li>
                <li>{services.heading3li3}</li>
                <li>{services.heading3li4}</li>
                <li>{services.heading3li5}</li>
                <li>{services.heading3li6}</li>
                <li>{services.heading3li7}</li>
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ParticularService;

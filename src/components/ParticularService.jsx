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
              <h1 className="py-12 text-3xl font-semibold">{services.name}</h1>
              <p className="px-12 py-4 text-lg">{services.description2}</p>
              <h1 className="text-2xl">Check out those exams we deliver</h1>
              <p className="font-semibold py-4 text-xl">{services.heading1}</p>
              <div className="flex w-[60%] mx-auto text-center gap-5">
                <div>
                  <img
                    src={services.firstpic1}
                    className="w-32 h-32"
                    alt=""
                    srcset=""
                  />
                  <p>{services.firstname1}</p>
                </div>
                <div>
                  <img
                    src={services.firstpic2}
                    className="w-32 h-32"
                    alt=""
                    srcset=""
                  />
                  <p>{services.firstname2}</p>
                </div>
                <div>
                  <img
                    src={services.firstpic3}
                    className="w-32 h-32"
                    alt=""
                    srcset=""
                  />
                  <p>{services.firstname3}</p>
                </div>
                <div>
                  <img
                    src={services.firstpic4}
                    className="w-32 h-32"
                    alt=""
                    srcset=""
                  />
                  <p>{services.firstname4}</p>
                </div>
                <div>
                  <img
                    src={services.firstpic5}
                    className="w-32 h-32"
                    alt=""
                    srcset=""
                  />
                  <p>{services.firstname5}</p>
                </div>
              </div>
              <p className="font-semibold py-4 text-xl">{services.heading2}</p>
              <div className="flex w-[70%] mx-auto text-center gap-3">
                <div>
                  <img
                    src={services.secondpic1}
                    className="w-32 h-32"
                    alt=""
                    srcset=""
                  />
                  <p>{services.secondname1}</p>
                </div>
                <div>
                  <img
                    src={services.secondpic2}
                    className="w-32 h-32"
                    alt=""
                    srcset=""
                  />
                  <p>{services.secondname2}</p>
                </div>
                <div>
                  <img
                    src={services.secondpic3}
                    className="w-32 h-32"
                    alt=""
                    srcset=""
                  />
                  <p>{services.secondname3}</p>
                </div>
                <div>
                  <img
                    src={services.secondpic4}
                    className="w-32 h-32"
                    alt=""
                    srcset=""
                  />
                  <p>{services.secondname4}</p>
                </div>
                <div>
                  <img
                    src={services.secondpic5}
                    className="w-32 h-32"
                    alt=""
                    srcset=""
                  />
                  <p>{services.secondname5}</p>
                </div>
                <div>
                  <img
                    src={services.secondpic6}
                    className="w-32 h-32"
                    alt=""
                    srcset=""
                  />
                  <p>{services.secondname6}</p>
                </div>
                <div>
                  <img
                    src={services.secondpic7}
                    className="w-32 h-32"
                    alt=""
                    srcset=""
                  />
                  <p>{services.secondname7}</p>
                </div>
              </div>
              <p className="font-semibold py-4 text-xl">{services.heading3}</p>
              <div className="flex w-[70%] mx-auto text-center gap-3">
                <div>
                  <img
                    src={services.thirdpic1}
                    className="w-32 h-32"
                    alt=""
                    srcset=""
                  />
                  <p>{services.thirdname1}</p>
                </div>
                <div>
                  <img
                    src={services.thirdpic2}
                    className="w-32 h-32"
                    alt=""
                    srcset=""
                  />
                  <p>{services.thirdname2}</p>
                </div>
                <div>
                  <img
                    src={services.thirdpic3}
                    className="w-32 h-32"
                    alt=""
                    srcset=""
                  />
                  <p>{services.thirdname3}</p>
                </div>
                <div>
                  <img
                    src={services.thirdpic4}
                    className="w-32 h-32"
                    alt=""
                    srcset=""
                  />
                  <p>{services.thirdname4}</p>
                </div>
                <div>
                  <img
                    src={services.thirdpic5}
                    className="w-32 h-32"
                    alt=""
                    srcset=""
                  />
                  <p>{services.thirdname5}</p>
                </div>
                <div>
                  <img
                    src={services.thirdpic6}
                    className="w-32 h-32"
                    alt=""
                    srcset=""
                  />
                  <p>{services.thirdname6}</p>
                </div>
                <div>
                  <img
                    src={services.thirdpic7}
                    className="w-32 h-32"
                    alt=""
                    srcset=""
                  />
                  <p>{services.thirdname7}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ParticularService;

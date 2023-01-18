import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ParticularService = ({ services }) => {
  // console.log("services", services);

  const { service } = useParams();

  // console.log("params", service);

  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: 'ease-in-out-quart',
    })
  })

  return (
    <div className="overflow-hidden bg-gray-100 dark:bg-gray-700">
      <div className="w-screen pt-12">
        {services
          .filter((services) => services.name === service)
          .map((services) => (
            <div className="flex-shrink-0 text-center py-8">
              <img
                src={services.image3}
                alt={services.alt}
                className="mb-3 w-screen h-[85vh] object-cover object-center"
              />
              <h1 className="pt-10 text-3xl font-semibold">{services.name}</h1>
              <p className="px-12 py-4 text-lg">{services.description2}</p>
              <h1 className="text-2xl pt-[150px] pb-8">
                Check out those exams we deliver
              </h1>
              <div className="bg-4">
              <p className="font-bold py-4 text-2xl pt-10 pb-16">
                {services.heading1}
              </p>
              <div className="flex w-[80vw] mx-auto text-center gap-6 pb-24 justify-center" data-aos="zoom-in">
                <div>
                  <img
                    src={services.firstpic1}
                    className="w-44 h-44 border-4 border-blue-200 p-2"
                    alt=""
                    srcset=""
                  />
                  {/* <p>{services.firstname1}</p> */}
                </div>
                <div>
                  <img
                    src={services.firstpic2}
                    className="w-52 h-44 border-4 border-blue-200 p-2"
                    alt=""
                    srcset=""
                  />
                  {/* <p>{services.firstname2}</p> */}
                </div>
                <div>
                  <img
                    src={services.firstpic3}
                    className="w-52 h-44 border-4 border-blue-200 p-2"
                    alt=""
                    srcset=""
                  />
                  {/* <p>{services.firstname3}</p> */}
                </div>
                <div>
                  <img
                    src={services.firstpic4}
                    className="w-52 h-44 border-4 border-blue-200 p-2"
                    alt=""
                    srcset=""
                  />
                  {/* <p>{services.firstname4}</p> */}
                </div>
                <div>
                  <img
                    src={services.firstpic5}
                    className="w-52 h-44 border-4 border-blue-200 p-2"
                    alt=""
                    srcset=""
                  />
                  {/* <p>{services.firstname5}</p> */}
                </div>
              </div>
              <p className="font-bold py-4 text-2xl pt-10 pb-16">
                {services.heading2}
              </p>
              <div className="flex w-[80%] mx-auto text-center gap-5 pb-24 justify-center" data-aos="zoom-right">
                <div>
                  <img
                    src={services.secondpic1}
                    className="w-36 h-36 border-4 border-blue-200 p-2"
                    alt=""
                    srcset=""
                  />
                  {/* <p>{services.secondname1}</p> */}
                </div>
                <div>
                  <img
                    src={services.secondpic2}
                    className="w-36 h-36 border-4 border-blue-200 p-2"
                    alt=""
                    srcset=""
                  />
                  {/* <p>{services.secondname2}</p> */}
                </div>
                <div>
                  <img
                    src={services.secondpic3}
                    className="w-36 h-36 border-4 border-blue-200 p-2"
                    alt=""
                    srcset=""
                  />
                  {/* <p>{services.secondname3}</p> */}
                </div>
                <div>
                  <img
                    src={services.secondpic4}
                    className="w-36 h-36 border-4 border-blue-200 p-2"
                    alt=""
                    srcset=""
                  />
                  {/* <p>{services.secondname4}</p> */}
                </div>
                <div>
                  <img
                    src={services.secondpic5}
                    className="w-36 h-36 border-4 border-blue-200 p-2"
                    alt=""
                    srcset=""
                  />
                  {/* <p>{services.secondname5}</p> */}
                </div>
                <div>
                  <img
                    src={services.secondpic6}
                    className="w-36 h-36 border-4 border-blue-200 p-2"
                    alt=""
                    srcset=""
                  />
                  {/* <p>{services.secondname6}</p> */}
                </div>
                <div>
                  <img
                    src={services.secondpic7}
                    className="w-36 h-36 border-4 border-blue-200 p-2"
                    alt=""
                    srcset=""
                  />
                  {/* <p>{services.secondname7}</p> */}
                </div>
              </div>
              </div>
              <p className="font-bold py-4 text-2xl pt-10 pb-16">
                {services.heading3}
              </p>
              <div className="flex w-[80%] mx-auto text-center gap-5 pb-24 justify-center" data-aos="zoom-right">
                <div>
                  <img
                    src={services.thirdpic1}
                    className="w-36 h-36 border-4 border-blue-200 p-2"
                    alt=""
                    srcset=""
                  />
                  {/* <p>{services.thirdname1}</p> */}
                </div>
                <div>
                  <img
                    src={services.thirdpic2}
                    className="w-36 h-36 border-4 border-blue-200 p-2"
                    alt=""
                    srcset=""
                  />
                  {/* <p>{services.thirdname2}</p> */}
                </div>
                <div>
                  <img
                    src={services.thirdpic3}
                    className="w-36 h-36 border-4 border-blue-200 p-2"
                    alt=""
                    srcset=""
                  />
                  {/* <p>{services.thirdname3}</p> */}
                </div>
                <div>
                  <img
                    src={services.thirdpic4}
                    className="w-36 h-36 border-4 border-blue-200 p-2"
                    alt=""
                    srcset=""
                  />
                  {/* <p>{services.thirdname4}</p> */}
                </div>
                <div>
                  <img
                    src={services.thirdpic5}
                    className="w-36 h-36 border-4 border-blue-200 p-2"
                    alt=""
                    srcset=""
                  />
                  {/* <p>{services.thirdname5}</p> */}
                </div>
                <div>
                  <img
                    src={services.thirdpic6}
                    className="w-36 h-36 border-4 border-blue-200 p-2"
                    alt=""
                    srcset=""
                  />
                  {/* <p>{services.thirdname6}</p> */}
                </div>
                <div>
                  {/* <img
                    src={services.thirdpic7}
                    className="w-36 h-36 border-4 border-blue-200 p-2"
                    alt=""
                    srcset=""
                  /> */}
                  {/* <p>{services.thirdname7}</p> */}
                </div>
                <div>
                  <img
                    src={services.thirdpic8}
                    className="w-36 h-36 border-4 border-blue-200 p-2"
                    alt=""
                    srcset=""
                  />
                  {/* <p>{services.thirdname8}</p> */}
                </div>
                </div>
              {/* </div> */}
              <div>
                <h2 className="pt-24 pb-8 font-bold text-2xl">
                  {services.amenities}
                </h2>

                <div>
                  <div className="flex w-[80%] mx-auto my-28 gap-x-8" data-aos="zoom-in-right">
                    <img
                      src={services.amenities1pic}
                      style={{ width: "700px" }}
                      className="w-[70remg] h-[20rem] rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
                      alt=""
                      srcset=""
                    />
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xl my-4">{services.amenities1}</h3>
                      <p className="text-lg">{services.amenities1text}</p>
                    </div>
                  </div>
                  <div className="flex w-[80%] mx-auto my-28 gap-x-8" data-aos="zoom-in-left">
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xl my-4">{services.amenities2}</h3>
                      <p className="text-lg">{services.amenities2text}</p>
                    </div>
                    <img
                      src={services.amenities2pic}
                      style={{ width: "1120px" }}
                      className="w-[70remg] h-[20rem] rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="flex w-[80%] mx-auto my-28 gap-x-8" data-aos="slide-right">
                    <img
                      src={services.amenities3pic}
                      style={{ width: "480px", objectFit: "cover" }}
                      className="w-[7f0rem] h-[20rem] rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
                      alt=""
                      srcset=""
                    />
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xl my-4">{services.amenities3}</h3>
                      <p className="text-lg">{services.amenities3text}</p>
                    </div>
                  </div>
                  <div className="flex w-[80%] mx-auto my-28 gap-x-8" data-aos="slide-left">
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xl my-4">{services.amenities4}</h3>
                      <p className="text-lg">{services.amenities4text}</p>
                    </div>
                    <img
                      src={services.amenities4pic}
                      style={{ width: "1120px" }}
                      className="w-[70frem] h-[20rem] rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="flex w-[80%] mx-auto my-28 gap-x-8" data-aos="slide-right">
                    <img
                      src={services.amenities5pic}
                      style={{ width: "500px" }}
                      className="w-[7f0rem] h-[20rem] rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
                      alt=""
                      srcset=""
                    />
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xl my-4">{services.amenities5}</h3>
                      <p className="text-lg">{services.amenities5text}</p>
                    </div>
                  </div>
                  <div className="flex w-[80%] mx-auto my-28 gap-x-8" data-aos="zoom-down">
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xl my-4">{services.amenities6}</h3>
                      <p className="text-lg">{services.amenities6text}</p>
                    </div>
                    <img
                      src={services.amenities6pic}
                      style={{ width: "600px" }}
                      className="w-[7f0rem] h-[20rem] rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ParticularService;

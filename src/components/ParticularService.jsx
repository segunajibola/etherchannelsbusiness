import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosPeople } from "react-icons/io";
import { FaPeopleArrows } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

const ParticularService = ({ services }) => {
  // console.log("services", services);

  const { service } = useParams();

  // console.log("params", service);

  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: "ease-in-out-quart",
    });
  });

  return (
    <div className="overflow-hidden bg-gray-100 dark:bg-gray-700">
      {services
        .filter((services) => services.name === service)
        .map((services) => (
          <div className="flex-shrink-0 pt-[80px] text-center">
            <div className="relative">
              <img
                src={services.image3}
                alt={services.alt}
                className="mb-3 w-screen h-[85vh] object-cover object-center"
              />
              {services.name === "Corporate Training" ? (
                <p className="absolute text-7xl w-[75rem] text-gray-100 top-1/2 left-[30px] -t ranslate-x-1/2 -translate-y-1/2 font-semibold shadow">
                  Accelerating The Digital Revolution.
                  <p className="text-left mt-5 ml-4 text-5xl">
                    We take digital skills education global, empowering
                    individual and enterprise to succeed in digital landscape.
                  </p>
                </p>
              ) : (
                ""
              )}
            </div>

            <h1 className="pt-10 text-3xl font-semibold">{services.name}</h1>
            <p className="px-12 py-4 text-lg">{services.description}</p>
            <h1 className="text-2xl font-semibold pt-[150px] pb-8">
              {services.heading0}
            </h1>

            {/* CBT TESTING */}
            {services.heading1 && (
              <div className="bg-4">
                <p className="font-bold py-4 text-2xl text-white shadow-xl pt-10 pb-16">
                  {services.heading1}
                </p>
                <div
                  className="flex w-[80vw] mx-auto text-center gap-6 pb-24 justify-center"
                  data-aos="zoom-in"
                >
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
                <p className="font-bold py-4 text-2xl text-white pt-10 pb-16">
                  {services.heading2}
                </p>
                <div
                  className="flex w-[80%] mx-auto text-center gap-5 pb-24 justify-center"
                  data-aos="zoom-right"
                >
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
                {/* </div> */}
                <p className="font-bold py-4 text-2xl text-white pt-10 pb-16">
                  {services.heading3}
                </p>
                <div
                  className="flex w-[80%] mx-auto text-center gap-5 pb-24 justify-center"
                  data-aos="zoom-right"
                >
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
              </div>
            )}
            {/* CBT TESTING */}

            {services.corporatetraininga && (
              <div className="flex w-[70%] mx-auto mb-14">
                <div className="w-[30rem] m-4 p-5 border-4 rounded-lg">
                  <IoIosPeople size={64} className="mx-auto" />
                  <p className="my-5 text-xl">{services.corporatetraininga}</p>
                </div>
                <div className="w-[30rem] m-4 p-5 border-4 rounded-lg">
                  <SiGoogleclassroom size={64} className="mx-auto" />
                  <p className="my-5 text-xl">{services.corporatetrainingb}</p>
                </div>
                <div className="w-[30rem] m-4 p-5 border-4 rounded-lg">
                  <FaPeopleArrows size={64} className="mx-auto" />
                  <p className="my-5 text-xl">{services.corporatetrainingc}</p>
                </div>
              </div>
            )}

            {services.coursesHeading && (
              <div className="pb-10">
                <h3 className="pt-24 pb-8 font-bold text-3xl">
                  {services.coursesHeading}
                </h3>
                <div className="grid grid-cols-3 gap-4 w-[80%] mx-auto">
                  <div>
                    <img
                      src={services.course1}
                      alt=""
                      className="w-64 h-64 m-5"
                    />
                  </div>
                  <div>
                    <img
                      src={services.course1}
                      alt=""
                      className="w-64 h-64 m-5"
                    />
                  </div>
                  <div>
                    <img
                      src={services.course1}
                      alt=""
                      className="w-64 h-64 m-5"
                    />
                  </div>
                  <div>
                    <img
                      src={services.course1}
                      alt=""
                      className="w-64 h-64 m-5"
                    />
                  </div>
                  <div>
                    <img
                      src={services.course1}
                      alt=""
                      className="w-64 h-64 m-5"
                    />
                  </div>
                  <div>
                    <img
                      src={services.course1}
                      alt=""
                      className="w-64 h-64 m-5"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="bg-gray-300 pb-5">
              <h2 className="pt-24 pb-8 font-bold text-3xl">
                {services.amenities}
              </h2>

              <div>
                <div
                  className="flex w-[80%] mx-auto my-28 gap-x-8"
                  data-aos="zoom-in-right"
                >
                  <img
                    src={services.amenities1pic}
                    style={{ width: "480px" }}
                    className="object-cover object-bottom h-[20rem] rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
                    alt=""
                    srcset=""
                  />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl my-4 font-semibold">
                      {services.amenities1}
                    </h3>
                    <p className="text-lg">{services.amenities1text}</p>
                  </div>
                </div>
                <div
                  className="flex w-[80%] mx-auto my-28 gap-x-8"
                  data-aos="zoom-in-left"
                >
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl my-4 font-semibold">
                      {services.amenities2}
                    </h3>
                    <p className="text-lg">{services.amenities2text}</p>
                  </div>
                  <img
                    src={services.amenities2pic}
                    style={{ width: "480px" }}
                    className="object-cover object-center h-[20rem] rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
                    alt=""
                    srcset=""
                  />
                </div>
                <div
                  className="flex w-[80%] mx-auto my-28 gap-x-8"
                  data-aos="slide-right"
                >
                  <img
                    src={services.amenities3pic}
                    style={{ width: "480px" }}
                    className="object-cover object-center h-[20rem] rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
                    alt=""
                    srcset=""
                  />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl my-4 font-semibold">
                      {services.amenities3}
                    </h3>
                    <p className="text-lg">{services.amenities3text}</p>
                  </div>
                </div>
                <div
                  className="flex w-[80%] mx-auto my-28 gap-x-8"
                  data-aos="slide-left"
                >
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl my-4 font-semibold">
                      {services.amenities4}
                    </h3>
                    <p className="text-lg">{services.amenities4text}</p>
                  </div>
                  <img
                    src={services.amenities4pic}
                    style={{ width: "480px" }}
                    className="object-cover object-center h-[20rem] rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
                    alt=""
                    srcset=""
                  />
                </div>
                <div
                  className="flex w-[80%] mx-auto my-28 gap-x-8"
                  data-aos="slide-right"
                >
                  <img
                    src={services.amenities5pic}
                    style={{ width: "480px" }}
                    className="object-cover object-center h-[20rem] rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
                    alt=""
                    srcset=""
                  />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl my-4 font-semibold">
                      {services.amenities5}
                    </h3>
                    <p className="text-lg">{services.amenities5text}</p>
                  </div>
                </div>
                {services.amenities6text && (
                  <div
                    className="flex w-[80%] mx-auto my-28 gap-x-8"
                    data-aos="zoom-down"
                  >
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
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ParticularService;

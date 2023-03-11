"use client"

import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosPeople } from "react-icons/io";
import { FaPeopleArrows } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import courses from "../data/courses.js";
import CorporateCourses from "../components/CorporateCourses";
import services from "../data/services.js"

export const ParticularService = ({ params }) => {
  // console.log("services", services);
  const { service } = params
//   const { service } = useParams();

  // console.log("params", service);

  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: "ease-in-out-quart",
    });
  });
  
  return (
    <div className="overflow-hidden dark:bg-gray-700">
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
                <p className="absolute text-6xl w-[75rem] text-gray-100 top-1/2 left-[20px] -t ranslate-x-1/2 -translate-y-1/2 font-semibold shadow">
                  Accelerating The Digital Solution Driven
                  <p className="text-left mt-10 ml-8 text-3xl">
                    Providing the right digital solutions and skills that
                    empower individuals, government and enterprise to succeed in
                    digital landscape.
                  </p>
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="md:w-[85%] mx-auto">
              <h1 className="pt-10 text-4xl font-semibold">{services.name}</h1>
              <p className="px-20 py-4 text-lg">{services.description}</p>
              {services.heading0 && (
                <h1 className="text-2xl font-semibold pt-[150px] pb-8">
                  {services.heading0}
                </h1>
              )}
            </div>

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

            {/* CORPORATE TRAINING */}
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
                  {courses?.map((course) => (
                    <CorporateCourses course={course} />
                  ))}
                </div>
              </div>
            )}

            {/* CORPORATE TRAINING */}

            <div className="pb-5  md:w-[85%] mx-auto">
              <h2 className="pt-20 pb-6 font-bold text-3xl">
                {services.amenities}
              </h2>

              {services.subamenities && (
                <h1 className="text-xl pb-8 mx-20">{services.subamenities}</h1>
              )}
            </div>

            {services.subamenities && (
              <div className="bg-gray-700">
                <div className="w-[90%] mx-auto">
                  <div className="bg-6" data-aos="zoom-in-right">
                    <div className="grid md:grid-cols-2 w-[95%] mx-auto mt-28 gap-x-2 py-10 px-12">
                      <img
                        src={services.amenities1pic}
                        style={{ width: "480px", height: "100%" }}
                        className="object-cover object-bottom rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
                        alt=""
                      />
                      <div className="grid grid-cols-1 grid-rows-2 p-2 text-white gap-4">
                        <div>
                          <h3 className="text-2xl mb-4 font-semibold">
                            {services.amenities1}
                          </h3>
                          <p className="text-md text-justify text-lg">
                            {services.amenities1text}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-2xl my-2">
                            {services.amenitiesMainBenefit}
                          </h3>
                          <ul className="list-disc text-left text-lg">
                            <li>{services.mainBenefitsdome1}</li>
                            <li>{services.mainBenefitsdome2}</li>
                            <li>{services.mainBenefitsdome3}</li>
                            <li>{services.mainBenefitsdome4}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div data-aos="slide-left">
                    <div className="grid md:grid-cols-2 w-[95%] mx-auto mt-28 gap-x-2 py-10 px-12">
                      <div className="grid grid-cols-1 grid-rows-2 p-2 text-white gap-4">
                        <div>
                          <h3 className="text-2xl mb-4 font-semibold">
                            {services.amenities2}
                          </h3>
                          <p className="text-md text-justify text-lg">
                            {services.amenities2text}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-2xl my-2">
                            {services.amenitiesMainBenefit}
                          </h3>
                          <ul className="list-disc text-left text-lg">
                            <li>{services.mainBenefitsbullet1}</li>
                            <li>{services.mainBenefitsbullet2}</li>
                            <li>{services.mainBenefitsbullet3}</li>
                            <li>{services.mainBenefitsbullet4}</li>
                          </ul>
                        </div>
                      </div>
                      <div className="grid justify-center">
                        <img
                          src={services.amenities2pic}
                          style={{ width: "480px", height: "100%" }}
                          className="object-cover object-bottom rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div data-aos="slide-right">
                    <div className="grid md:grid-cols-2 w-[95%] mx-auto mt-28 gap-x-2 py-10 px-12">
                      <img
                        src={services.amenities3pic}
                        style={{ width: "480px", height: "100%" }}
                        className="object-cover object-bottom rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
                        alt=""
                      />
                      <div className="grid grid-cols-1 grid-rows-2 p-2 text-white gap-4">
                        <div>
                          <h3 className="text-2xl mb-4 font-semibold">
                            {services.amenities3}
                          </h3>
                          <p className="text-md text-justify text-lg">
                            {services.amenities3text}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-2xl my-2">
                            {services.amenitiesMainBenefit}
                          </h3>
                          <ul className="list-disc text-left text-lg">
                            <li>{services.mainBenefitscmount1}</li>
                            <li>{services.mainBenefitscmount2}</li>
                            <li>{services.mainBenefitscmount3}</li>
                            <li>{services.mainBenefitscmount4}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div data-aos="zoom-down">
                    <div className="grid md:grid-cols-2 w-[95%] mx-auto mt-28 gap-x-2 py-10 px-12">
                      <div className="grid grid-cols-1 grid-rows-2 p-2 text-white gap-4">
                        <div>
                          <h3 className="text-2xl mb-4 font-semibold">
                            {services.amenities4}
                          </h3>
                          <p className="text-md text-justify text-lg">
                            {services.amenities4text}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-2xl my-2">
                            {services.amenitiesMainBenefit}
                          </h3>
                          <ul className="list-disc text-left text-lg">
                            <li>{services.mainBenefitsptz1}</li>
                            <li>{services.mainBenefitsptz2}</li>
                            <li>{services.mainBenefitsptz3}</li>
                            <li>{services.mainBenefitsptz4}</li>
                          </ul>
                        </div>
                      </div>
                      <div className="grid justify-center">
                        <img
                          src={services.amenities4pic}
                          style={{ width: "480px", height: "100%" }}
                          className="object-cover object-bottom rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div data-aos="slide-right">
                    <div className="grid md:grid-cols-2 w-[95%] mx-auto mt-28 gap-x-2 py-10 px-12">
                      <img
                        src={services.amenities5pic}
                        style={{ width: "480px", height: "100%" }}
                        className="object-cover object-bottom rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
                        alt=""
                      />
                      <div className="grid grid-cols-1 grid-rows-2 p-2 text-white gap-4">
                        <div>
                          <h3 className="text-2xl mb-4 font-semibold">
                            {services.amenities5}
                          </h3>
                          <p className="text-md text-justify text-lg">
                            {services.amenities5text}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-2xl my-2">
                            {services.amenitiesMainBenefit}
                          </h3>
                          <ul className="list-disc text-left text-lg">
                            <li>{services.mainBenefitsdaynight1}</li>
                            <li>{services.mainBenefitsdaynight2}</li>
                            <li>{services.mainBenefitsdaynight3}</li>
                            <li>{services.mainBenefitsdaynight4}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div data-aos="slide-left">
                    <div className="grid md:grid-cols-2 w-[95%] mx-auto mt-28 gap-x-2 py-10 px-12">
                      <div className="grid grid-cols-1 grid-rows-2 p-2 text-white gap-4">
                        <div>
                          <h3 className="text-2xl mb-4 font-semibold">
                            {services.amenities6}
                          </h3>
                          <p className="text-md text-justify text-lg">
                            {services.amenities6text}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-2xl my-2">
                            {services.amenitiesMainBenefit}
                          </h3>
                          <ul className="list-disc text-left text-lg">
                            <li>{services.mainBenefitsinfarednight1}</li>
                            <li>{services.mainBenefitsinfarednight2}</li>
                            <li>{services.mainBenefitsinfarednight3}</li>
                            <li>{services.mainBenefitsinfarednight4}</li>
                          </ul>
                        </div>
                      </div>
                      <div className="grid justify-center">
                        <img
                          src={services.amenities6pic}
                          style={{ width: "480px", height: "100%" }}
                          className="object-cover object-bottom rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div data-aos="zoom-in-left">
                    <div className="grid md:grid-cols-2 w-[95%] mx-auto mt-28 gap-x-2 py-10 px-12">
                      <img
                        src={services.amenities7pic}
                        style={{ width: "480px", height: "100%" }}
                        className="object-cover object-bottom rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
                        alt=""
                      />
                      <div className="grid grid-cols-1 grid-rows-2 p-2 text-white gap-4">
                        <div>
                          <h3 className="text-2xl mb-4 font-semibold">
                            {services.amenities7}
                          </h3>
                          <p className="text-md text-justify text-lg">
                            {services.amenities7text}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-2xl my-2">
                            {services.amenitiesMainBenefit}
                          </h3>
                          <ul className="list-disc text-left text-lg">
                            <li>{services.mainBenefitsnetwork1}</li>
                            <li>{services.mainBenefitsnetwork2}</li>
                            <li>{services.mainBenefitsnetwork3}</li>
                            <li>{services.mainBenefitsnetwork4}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div data-aos="slide-right">
                    <div className="grid md:grid-cols-2 w-[95%] mx-auto mt-28 gap-x-2 py-10 px-12">
                      <div className="grid grid-cols-1 grid-rows-2 p-2 text-white gap-4">
                        <div>
                          <h3 className="text-2xl mb-4 font-semibold">
                            {services.amenities8}
                          </h3>
                          <p className="text-md text-justify text-lg">
                            {services.amenities8text}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-2xl my-2">
                            {services.amenitiesMainBenefit}
                          </h3>
                          <ul className="list-disc text-left text-lg">
                            <li>{services.mainBenefitswireless1}</li>
                            <li>{services.mainBenefitswireless2}</li>
                            <li>{services.mainBenefitswireless3}</li>
                            <li>{services.mainBenefitswireless4}</li>
                          </ul>
                        </div>
                      </div>
                      <div className="grid justify-center">
                        <img
                          src={services.amenities8pic}
                          style={{ width: "480px", height: "100%" }}
                          className="object-cover object-bottom rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  <div data-aos="zoom-down">
                    <div className="grid md:grid-cols-2 w-[95%] mx-auto mt-28 gap-x-2 py-10 px-12">
                      <img
                        src={services.amenities9pic}
                        style={{ width: "480px", height: "100%" }}
                        className="object-cover object-bottom rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
                        alt=""
                      />
                      <div className="grid grid-cols-1 grid-rows-2 p-2 text-white gap-4">
                        <div>
                          <h3 className="text-2xl mb-4 font-semibold">
                            {services.amenities9}
                          </h3>
                          <p className="text-md text-justify text-lg">
                            {services.amenities9text}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-2xl my-2">
                            {services.amenitiesMainBenefit}
                          </h3>
                          <ul className="list-disc text-left text-lg">
                            <li>{services.mainBenefitshd1}</li>
                            <li>{services.mainBenefitshd2}</li>
                            <li>{services.mainBenefitshd3}</li>
                            <li>{services.mainBenefitshd4}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!services.subamenities && (
              <div className="pb-10">
                <div
                  className="flex w-[80%] mx-auto mt-28 gap-x-8"
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
                  className="flex w-[80%] mx-auto mt-28 gap-x-8"
                  data-aos="zoom-in-right"
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
                    className="object-cover object-bottom h-[20rem] rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
                    alt=""
                    srcset=""
                  />
                </div>
                <div
                  className="flex w-[80%] mx-auto mt-28 gap-x-8"
                  data-aos="slide-in-right"
                >
                  <img
                    src={services.amenities3pic}
                    style={{ width: "480px" }}
                    className="object-cover object-bottom h-[20rem] rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
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
                  className="flex w-[80%] mx-auto mt-28 gap-x-8"
                  data-aos="zoom-in-left"
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
                    className="object-cover object-bottom h-[20rem] rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
                    alt=""
                    srcset=""
                  />
                </div>
                <div
                  className="flex w-[80%] mx-auto mt-28 gap-x-8"
                  data-aos="zoom-down"
                >
                  <img
                    src={services.amenities5pic}
                    style={{ width: "480px" }}
                    className="object-cover object-bottom h-[20rem] rounded-lg border-4 border-blue-500 p-2 hover:scale-110 duration-200 delay-100 ease-in-out"
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
              </div>
            )}
          </div>
        ))}
    </div>
  );
};
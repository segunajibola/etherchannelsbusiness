import React from "react";

const About = () => {
  return (
    <>
      <div className="mt-12 p-4 bg-blue-300">
        <img
          src="/images/aboutUs1.png"
          alt=""
          className="mt-0 mb-3 w-screen sm:w-full sm:mx-2 h-[320px] mx-auto"
        />
      </div>
      <h2 className="text-2xl text-center font-semibold tracking-wider text-gray-900 dark:text-white my-3">
        About Us
      </h2>
      <p className="w-4/5 mx-auto text-center pb-5">
        Ether-channel Solution Services is an I.T firm founded on the 21st of
        December 2020, which aimed at providing quality assurance with a
        top-notch I.T solutions to all our business partners and customers. We
        are innovative, highly motivated and well equipped with one of the best
        IT infrastructures in place and quality training hands. We are
        absolutely committed to ensure that our clients are making good
        technical decisions and are realizing business value and results from
        their I.T. investments throughout our business partnering.
      </p>
    </>
  );
};

export default About;

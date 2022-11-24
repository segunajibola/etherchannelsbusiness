import React from "react";

const Services = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 bg-gray-100 dark:bg-gray-700">
        <div className="relative">
          <img
            src="/images/services.jpg"
            alt=""
            className="mt-0 w-screen mx-2 h-[320px] mx-auto"
          />
        </div>

        <div className="w-full mx-auto text-center text-white p-5">
          <h2 className="text-2xl font-semibold tracking-wider dark:text-white my-2">
            Services
          </h2>
          <p className="w-11/12 mx-auto">
            At Etherchannel Solution Sevices, our team are dedicated
            professionals and solution driven who follow due process that will
            enable us to deliver quality I.T services that ensures the growth of
            your business. We are absolutely concern Our experienced and
            seasoned professionals create, configure, implement, and maintain a
            healthy cloud and on-premises infrastructure for your business,
            reducing your IT expenses, and allowing for budgetary planning for
            the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

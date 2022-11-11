import React from "react";
import Logo from "../assets/home/homepage1.jpg";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";

const Home = () => {
  const slides = [
    { url: "/images/homepage1.jpg", title: "beach" },
    { url: "/images/homepage2.jpg", title: "beach" },
    { url: "/images/homepage3.jpg", title: "beach" },
    { url: "/images/homepage4.jpg", title: "beach" },
    { url: "/images/homepage5.jpg", title: "beach" },
    { url: "/images/homepage6.jpg", title: "beach" },
  ];

  return (
    <>
      <div className="grid bg-gray-200 pt-14 dark:bg-gray-700 lg:grid-cols-2 2xl:grid-cols-5">
        <div className="mx-auto py-4 bg-gray-200 lg:max-w-full lg:px-12 lg:py-24 xl:mr-0 2xl:col-span-2">
          <div className="mx-auto w-[380px] text-center">
            <div className="w-[340px] h-[300px] mb-32 mx-2">
              <ImageSlider slides={slides} />
            </div>
            <h1 className="mt-26 text-sm text-center font-bold text-gray-900 dark:text-white sm:mt-4 lg:mt-4 lg:text-3xl">
              GREETINGS!!! Hello!!! Good to see you on our website today!!! Are
              you thinking of acquiring an In-Demand I.T skills to fetch you
              your dreams job, here is the best place for you to take all things
              IT Training and CBT Testing hub!! Our core value is the provision
              of affordable professional and Top-Notch I.T training and
              Computer-Based Testing to corporate organizations and individual
              clients.
            </h1>
            {/* <p className='mt-2 text-gray-600 dark:text-white sm:text-xl'>
            e eos nesciunt praesentium mollitia repudiandae repellat dolore
            </p> */}
            {/* <img
              src={Logo}
              alt="People going in the bus"
              className="my-2 h-52 w-full rounded-lg object-center shadow-xl sm:mt-8 sm:h-64 sm:object-cover lg:hidden"
            /> */}
            {/* <div style={containerStyles}>
              <ImageSlider slides={slides} />
            </div> */}
            <div className="mt-4 space-x-1 sm:mt-6">
              <a
                href="/"
                className="focus:outline-none inline-block transform rounded-lg bg-[#2b4b77] px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-400 focus:ring focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 active:bg-blue-600 dark:bg-[#264775]  sm:text-base "
              >
                View all courses
              </a>
              <a
                href="/"
                className="focus:outline-none inline-block rounded-lg bg-gray-300 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-gray-800 hover:bg-gray-200 focus:ring focus:ring-gray-300 focus:ring-opacity-50 focus:ring-offset-2 active:bg-gray-400 sm:text-base"
              >
                Know more
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-3 hidden lg:block 2xl:col-span-3">
          <div className="w-[550px] h-[280px] my-0 mx-auto">
            <ImageSlider slides={slides} />
          </div>
          {/* <img
            src={Logo}
            alt="People going in the bus"
            className="absolute inset-0 h-full w-full rounded object-cover object-center"
          /> */}
        </div>
      </div>
      {/* About */}
      <div className="grid lg:grid-cols-2 bg-gray-100 dark:bg-gray-700">
        <img
          src="/images/aboutUs2.jpeg"
          alt=""
          className="m-10 w-[350px] h-[320px] rounded-lg mx-auto"
        />
        <div className="w-[340px] mx-auto text-center">
          <h2 className="text-center text-2xl font-semibold tracking-wider text-gray-900 dark:text-white">
            About Us
          </h2>
          <p>
            Ether-channel Solution Services is an I.T firm founded on the 21st
            of December 2020, which aimed at providing quality assurance with a
            top-notch I.T solutions to all our business partners and customers.
            We are innovative, highly motivated and well equipped with one of
            the best IT infrastructures in place and quality training hands. We
            are absolutely committed to ensure that our clients are making good
            technical decisions and are realizing business value and results
            from their I.T. investments throughout our business partnering.
          </p>
          <div className="text-center">
            <Link to="/all-states">
              <button
                className="m-3 transform rounded-lg bg-blue-500 px-6 py-2 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-400 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-600 dark:border-white dark:bg-blue-600 dark:text-white"
                onClick={() => window.scrollTo(0, 0)}
              >
                More about us.
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-full px-8 py-4 dark:bg-gray-800 lg:max-w-full lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-wider text-gray-900 dark:text-white">
          About Us
        </h2>

        {/* <div className='mt-6 grid gap-6 rounded-md lg:grid-cols-2 xl:grid-cols-3'>
          {allDestinations
            .filter((item, index) => index < 6)
            .map((eachDestination) => (
              <>
                <DestinationCards
                  destination={eachDestination}
                  key={eachDestination.id}
                />
              </>
            ))}
        </div> 
        
        Add some professional homepage and all other tab pictures and catchy contents. 
    Testimonials from clients
    Office Location
    Our Partners
    Add a drop down at the buttom level of the home page (Navigation, Our Services, Contacts)
    */}
        <div className="text-center">
          <Link to="/all-states">
            <button
              className="m-5 transform rounded-lg bg-blue-500 px-6 py-2 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-400 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-600 dark:border-white dark:bg-blue-600 dark:text-white"
              onClick={() => window.scrollTo(0, 0)}
            >
              See all
            </button>
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-full px-8 py-4 dark:bg-gray-800 lg:max-w-full lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-wider text-gray-900 dark:text-white">
          Testimonials
        </h2>

        <div className="text-center">
          <Link to="/all-states">
            <button
              className="m-5 transform rounded-lg bg-blue-500 px-6 py-2 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-400 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-600 dark:border-white dark:bg-blue-600 dark:text-white"
              onClick={() => window.scrollTo(0, 0)}
            >
              See all
            </button>
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-full px-8 py-4 dark:bg-gray-800 lg:max-w-full lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-wider text-gray-900 dark:text-white">
          Office Location
        </h2>

        <div className="text-center">
          <Link to="/all-states">
            <button
              className="m-5 transform rounded-lg bg-blue-500 px-6 py-2 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-400 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-600 dark:border-white dark:bg-blue-600 dark:text-white"
              onClick={() => window.scrollTo(0, 0)}
            >
              See all
            </button>
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-full px-8 py-4 dark:bg-gray-800 lg:max-w-full lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-wider text-gray-900 dark:text-white">
          Our Partners
        </h2>

        <div className="text-center">
          <Link to="/all-states">
            <button
              className="m-5 transform rounded-lg bg-blue-500 px-6 py-2 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-400 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-600 dark:border-white dark:bg-blue-600 dark:text-white"
              onClick={() => window.scrollTo(0, 0)}
            >
              See all
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

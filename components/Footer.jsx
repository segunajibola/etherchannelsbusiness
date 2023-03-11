"use client"

import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaArrowUp,
} from "react-icons/fa";
import Link from "next/link";
import { HiOutlineMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="w-full text-left text-white bg-[#2b4b77] md:py-8 dark:bg-gray-300 dark:text-gray-800 text-lg">
      <div className="grid max-w-[90%] md:grid-cols-4 gap-1 space-x-8 space-y-1 p-2 mx-auto">
        <div>
          {/* <Link
            className="cursor-pointer"
            href="/"
            onClick={() => window.scrollTo(0, 0)}
          >
            <img
              src="/navbar/etherchannellogo.png"
              alt="Logo Image"
              style={{ width: "180px", height: "180px", borderRadius: "50px" }}
              className="md:-mt-6"
            />
          </Link>
          <p>
            Ether-channel Solution Services is an I.T firm founded on the 21st
            of December 2020, which aimed at providing quality assurance with a
            top-notch I.T solutions to all our business partners and customers.
          </p> */}
          <div className="grid grid-cols-1 gap-1.5">
          <h5 className="my-2 text-xl uppercase font-semibold">Social Media</h5>
          <div>
            <a href="https://www.twitter.com/">
              <FaTwitter size={20} className="text-blue-500 inline" />
            </a> <span className="">Twitter</span>
          </div>
            <div>
            <a href="https://www.linkedin.com/in/">
              <FaLinkedin size={20} className="text-blue-500 inline" />
            </a> <span className="">LinkedIn</span>
          </div>
          <div>
            <a href="https://wa.me/">
              <FaWhatsapp size={20} className="text-green-500 inline" />
            </a> <span className="">WhatsApp</span>
          </div>
          <div>
            <a href="https://www.facebook.com/">
              <FaFacebook size={20} className="text-blue-300 inline" />
            </a> <span className="">Facebook</span>
          </div>
          <div>
            <a href="https://www.instagram.com/">
              <FaInstagram
                size={20}
                className="text-red-300 dark:text-red-900 inline"
              />
            </a> <span className="">Instagram</span>
          </div>
          </div>
        </div>
        <div className="">
          <h5 className="my-2 text-xl uppercase font-semibold">Quick Links</h5>
            <a className="cursor-pointer" href="/">
              Home
            </a>
          <p>
            <a className="cursor-pointer" href="/#about">
              About Us
            </a>
          </p>
          <p>
            <a className="cursor-pointer" href="/#projects">
              What We Do
            </a>
          </p>
          <p>
            <a className="cursor-pointer" href="/#testimonials">
              Meet Our Staff
            </a>
          </p>
          <p>
            <a className="cursor-pointer" href="/#testimonials">
              Contact Us
            </a>
          </p>
        </div>

        <div className="">
          <h5 className="my-2 text-xl uppercase font-semibold">Other Links</h5>
          <a href="" className="block">
            Blog
          </a>
          <a href="" className="block">
            Book A Tour
          </a>
          <a href="" className="block">
            Privacy Policy
          </a>
          <a href="" className="block">
            Term & Conditions
          </a>
          <a href="https://calendly.com/" className="mt-[1px] block">
            Schedule a Meeting
          </a>
        </div>

        <div>
          <h5 className="my-2 text-xl uppercase font-semibold">Reach Us</h5>
          <div>
            <HiOutlineMail
              size={25}
              className="inline mr-1 -mt-[2px] text-gray-300 dark:text-gray-600"
            />
            <span className="text-[17px]">etherchannelsbusiness@gmail.com</span>
          </div>
          <div className="my-2">
            <HiPhone
              size={29}
              className="inline mr-1 -mt-[2px] text-gray-300 dark:text-gray-600"
            />
            <span>+234 803 985 0630</span>
          </div>
          <div>
            <HiLocationMarker
              size={29}
              className="inline mr-1 -mt-[2px] text-gray-300 dark:text-gray-600"
            />
            <span>Address: 23, Oluwalopeye Street, PPL, Ojo, Lagos, Nigeria.</span>
          </div>
        </div>
      </div>

      <Link href="/" className="flex justify-end m-4">
        <button
          className="text-black text-sm border-2 hover:text-white bg-gray-100 hover:bg-black hover:border-gray-200 px-1 py-1 md:my-2 dark:text-gray-900 dark:border-gray-500 dark:hover:bg-black dark:hover:border-gray-800 mr-3 rounded-md hover:scale-110"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to Top <FaArrowUp className="ml-2 inline" />
        </button>
      </Link>
      <p className="p-2 text-center">
        &copy; Etherchannels Limited {new Date().getFullYear()}. All Right
        Reserved.
      </p>
    </footer>
  );
};

export default Footer;
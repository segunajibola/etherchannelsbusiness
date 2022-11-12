import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="w-full text-left text-gray-300 bg-[#2b4b77] md:pt-10 dark:bg-gray-300 dark:text-gray-800">
      <div className="grid max-w-7xl md:grid-cols-2 gap-1 space-y-1 md:mx-2 p-2">
        <div className="">
          <h5 className="my-2 text-xl uppercase font-semibold">Quick Links</h5>
          <p>
            <HashLink className="cursor-pointer" to="/#about">
              Home
            </HashLink>
          </p>
          <p>
            <HashLink className="cursor-pointer" to="/#tools">
              About Us
            </HashLink>
          </p>
          <p>
            <HashLink className="cursor-pointer" to="/#projects">
              What We Do
            </HashLink>
          </p>
          <p>
            <HashLink className="cursor-pointer" to="/#testimonials">
              Meet Our Staff
            </HashLink>
          </p>
          <p>
            <HashLink className="cursor-pointer" to="/#testimonials">
              Contact Us
            </HashLink>
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
      </div>

      <div className="flex gap-1.5 mt-4">
            <a href="https://www.twitter.com/">
              <FaTwitter size={20} className="text-blue-500" />
            </a>
            <a href="https://www.linkedin.com/in/">
              <FaLinkedin size={20} className="text-blue-500" />
            </a>
            <a href="https://wa.me/">
              <FaWhatsapp size={20} className="text-green-500" />
            </a>
            <a href="https://www.facebook.com/">
              <FaFacebook size={20} className="text-blue-300" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram
                size={20}
                className="text-red-300 dark:text-red-900"
              />
            </a>
            <a href="">
              <HiOutlineMail
                size={29}
                className="-mt-[2px] text-gray-300 dark:text-gray-600"
              />
            </a>
          </div>

      <Link to="/" className="flex justify-end m-2">
        <button
          className="text-gray-100 text-sm border-2 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-200 px-1 py-1 md:my-2 dark:text-gray-900 dark:border-gray-500 dark:hover:bg-gray-300 dark:hover:border-gray-800"
          onClick={() => window.scrollTo(0, 0)}
        >
          Back to Top <FaArrowUp className="inline" />
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

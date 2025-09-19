import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-[#1e1b4b] text-white py-8 w-full">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 text-lg">
          {/* Quick Link */}
          <div className="flex flex-col items-center lg:items-start poppins-medium text-center lg:text-left space-y-4">
            <h2 className="text-xl poppins-bold mb-8">Quick Link</h2>
            <nav className="flex flex-col items-center text-base  lg:items-start space-y-2 text-gray-300 poppins-medium">
              <Link to="/" className="hover:text-yellow-400 transition-colors cursor-pointer" href="/">Home</Link>
              <a href="/#aboutus" className="hover:text-yellow-400 transition-colors cursor-pointer text-center lg:text-left w-full">About The Conference</a>
              <a href="/#scope" className="hover:text-yellow-400 transition-colors cursor-pointer text-center lg:text-left w-full">Scope Of Our Conference</a>
              <Link to="/contact-us" className="hover:text-yellow-400 transition-colors cursor-pointer" href="/contact">Contact Us</Link>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-center lg:items-start text-center poppins-medium sm:text-left space-y-4">
            <h3 className="text-xl poppins-bold mb-8">Contact Details</h3>
            <p className="text-base lg:text-lg text-gray-300 mb-4">Venue: Benin, Nigeria</p>
            {/* <p className="text-base l text-gray-300 mb-4 poppins-medium">
              Mobile: <Link href="tel:+911234567890" className="hover:text-yellow-400 transition-colors cursor-pointer ">+91 10101 10101</Link>
            </p> */}
            <p className="text-base l text-gray-300 mb-4 poppins-medium">
              Email: <Link href="mailto:icabcic.org@gmail.com" className="hover:text-yellow-400 transition-colors poppins-medium cursor-pointer">icabcic.org@gmail.com</Link>
            </p>
          </div>

          {/* Key Dates */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            <h3 className="text-xl poppins-bold mb-8">Key Dates</h3>
            <div className="flex flex-col space-y-2 text-gray-300 poppins-medium">
              <div className="">
                <p className="text-base">Paper Submission : October 14, 2024</p>
              </div>
              <div className="">
                <p className="text-base">Registration Deadline : October 21, 2024</p>
              </div>
              <div className="">
                <p className="text-base">Conference Dates : November 07, 2024</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mb-8" />

        <div className="text-center text-sm text-gray-400">
          <p>
         © 2025 {' '}
            <Link href="/" className="hover:text-yellow-400 transition-colors  cursor-pointer poppins-medium" rel="noopener noreferrer">
                 ICABCIC .
            </Link>{' '}
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
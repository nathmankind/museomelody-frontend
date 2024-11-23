"use client";
// components/Footer.tsx
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid gap-4 grid-cols-4 ">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">MuseoMelody</h3>
            <p className="text-gray-300">
              Inspiring creativity and passion through art and history. Join us
              and explore a world of exhibitions and events.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Membership
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
            <p className="text-gray-300">123 Museum St, Art City, Country</p>
            <p className="text-gray-300">Phone: (123) 456-7890</p>
            <p className="text-gray-300">Email: info@museumname.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-gray-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and events.
            </p>
            <form className="flex flex-col sm:flex-row sm:space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-lg mb-2 sm:mb-0 sm:flex-1 text-gray-900"
              />
              <button
                type="submit"
                className="p-2 bg-yellow-400 text-purple-900 font-semibold rounded-lg transition hover:bg-yellow-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 mt-8 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} MuseumName. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

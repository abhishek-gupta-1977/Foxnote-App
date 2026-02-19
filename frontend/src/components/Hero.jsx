import React from "react";
import "../index.css";
import image from "../assets/img.webp";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
const Hero = () => {


  const {user} = useAuth()
  return (
    <motion.div id="Hero" className="pt-32 pb-20"
      initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true, margin: "-100px" }}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="tracking-in-contract-bck-bottom-normal text-5xl  font-extrabold  text-gray-900 sm:text-6xl md:text-7xl">
            Organize your thoughts,
            <span className="bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text">
              not your{" "}
              <span className="line-through bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text">
                chaos
              </span>
            </span>
          </h1>
          <h2 className=" mt-6 text-lg tracking-tight leading-8 text-gray-600 max-w-2xl mx-auto">
            Turn scattered ideas into clear, actionable notes with instant
            search, smart tagging, and seamless sync across all your devices.
            Whether you're brainstorming, planning, or capturing moments, your
            notes stay focused, beautiful, and always within reach.
          </h2>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              className="bg-white py-2 px-4 rounded-lg border border-gray-400"
              href="/#Faqs"
            >
              How it Works?
            </a>
            {user ? (<a href="/dashboard" className="rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-300">Create New Note</a>) : <a
              className="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-300 "
              href="/Signup"
            >
              Sign Up ?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>}
          </div>
        </div>
        <div className="relative mx-auto mt-10 max-w-lg">
          <img
            className="w-full rounded-2xl border border-gray-100 shadow"
            src={image}
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;

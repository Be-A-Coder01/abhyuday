import React from "react";
import Navbar from "./Navbar";
import "../App.css";
import hulk from "../assets/Hulk.png";
import shadowBg from "../assets/bgRegistration.png";

const RegistrationForm = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="bg-gradient-to-br   from-[#0f0c29] via-[#302b63] to-[#24243e] justify-center h-[130vh] pt-[100px] relative flex items-center">
          {/* Background Hulk Image */}
          <img
            src={shadowBg}
            className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
            alt="Hulk Watermark"
          />

          {/* Registration Form */}
          <form
            action=""
            className=" backdrop-blur-md bg-white/10 border border-white/20 
                       rounded-2xl p-8 flex flex-col items-center w-[90%] max-w-md gap-6"
          >
            <h1 className="text-3xl font-bold text-white mb-6">Register Now</h1>

            {/* Name */}
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="name" className="text-white font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="bg-white/20 placeholder-white/70 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email */}
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="email" className="text-white font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="bg-white/20 placeholder-white/70 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Contact Number */}
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="number" className="text-white font-medium">
                Contact No.
              </label>
              <input
                type="number"
                name="number"
                id="number"
                placeholder="Enter your contact number"
                className="bg-white/20 placeholder-white/70 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* College */}
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="college" className="text-white font-medium">
                College
              </label>
              <input
                type="text"
                name="college"
                id="college"
                placeholder="Enter your college name"
                className="bg-white/20 placeholder-white/70 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <label htmlFor="event" className="text-white font-medium">
                Select Event
              </label>
              <select
                name="event"
                id="event"
                className="bg-white/20 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">-- Choose an Event --</option>
                <option className="text-black" value="itquiz">
                  IT Quiz
                </option>
                <option className="text-black" value="coding">
                  Coding
                </option>
                <option className="text-black" value="uiux">
                  UI/UX
                </option>
                <option className="text-black" value="itmanager">
                  IT Manager
                </option>
                <option className="text-black" value="gaming">
                  Gaming
                </option>
                <option className="text-black" value="ideathon">
                  Ideathon
                </option>
                <option className="text-black" value="treasurehunt">
                  Treasure Hunt
                </option>
                <option className="text-black" value="photography">
                  Photography
                </option>
              </select>
            </div>

            {/* Submit */}
            <input
              type="submit"
              value="Register"
              className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-pink-500 hover:to-purple-500 text-white font-semibold py-3 rounded-md transition-all duration-300 mt-4"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;

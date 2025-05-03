import React from "react";
import "../App.css";
import Navbar from "./Navbar";

import "../JavaScript/index.js";
import "../JavaScript/loader.js";

import "../CSS/common/bg-animation.css";
import "../CSS/aboutUs/aboutUs.css";

import rupesh from "../assets/rupesh.jpeg";
import jeevitha from "../assets/jeevitha.jpeg";
import sriram from "../assets/sriram.jpeg";
import prithvi from "../assets/prithvi.jpeg";
import aditya from "../assets/aditya.jpg";
import blen from "../assets/blen.jpeg";

const Team = () => {
  return (
    <>
      <Navbar></Navbar>

      <div className="wrapper  ">
        <div id="stars" className="-z-10"></div>
        <div id="stars2" className="-z-10"></div>
        <div id="stars3" className="-z-10"></div>
      </div>

      <div className=" z-10 flex flex-row flex-wrap pt-48 py-20  px-7 gap-9">
        {/* start */}

        <div className="w-[460px] z-10 h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src={jeevitha} // <-- Replace this with your image path
              alt="Jeevitha"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-2xl  font-bold">Jeevitha P</h2>
            <p className=" text-white tag text-md rounded-md py-1 px-2 font-semibold bg-gradient-to-r from-pink-500/30 to-purple-500/30">
              Student Coordinator
            </p>

            {/* Name */}

            {/* Role */}
            <p className="text-pink-400 text-lg font-semibold ">6366269221</p>
          </div>
          {/* Description */}
        </div>

        <div className="w-[460px] z-10 h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src={sriram} // <-- Replace this with your image path
              alt="sriram"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-2xl  font-bold">Shri Ram</h2>
            <p className=" text-white tag text-md rounded-md py-1 px-2 font-semibold bg-gradient-to-r from-pink-500/30 to-purple-500/30">
              Student Coordinator
            </p>

            {/* Name */}

            {/* Role */}
            <p className="text-pink-400 text-lg font-semibold ">8762677494</p>
          </div>

          {/* Description */}
        </div>

        <div className="w-[460px] z-10 h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src={prithvi} // <-- Replace this with your image path
              alt="darshan"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-2xl  font-bold">Prathviraj</h2>
            <p className=" text-white tag text-md rounded-md py-1 px-2 font-semibold bg-gradient-to-r from-pink-500/30 to-purple-500/30">
              Student Coordinator
            </p>

            {/* Name */}

            {/* Role */}
            <p className="text-pink-400 text-lg font-semibold ">7892451885</p>
          </div>

          {/* Description */}
        </div>

        <div className="w-[460px] z-10 h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src={aditya} // <-- Replace this with your image path
              alt="aditya"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-2xl  font-bold">Aditya Shree</h2>
            <p className=" text-white tag text-md rounded-md py-1 px-2 font-semibold bg-gradient-to-r from-pink-500/30 to-purple-500/30">
              Student Coordinator
            </p>

            {/* Name */}

            {/* Role */}
            <p className="text-pink-400 text-lg font-semibold ">997285328</p>
          </div>
        </div>

        <div className="w-[460px] z-10 h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src="https://media-blr1-2.cdn.whatsapp.net/v/t61.24694-24/491873504_1770633523501491_8356581768967755685_n.jpg?ccb=11-4&oh=01_Q5Aa1QFPPpsvDm9oI9djnXsaAEESkvBgN7mo65cmh4Ns_gNeTQ&oe=681C9775&_nc_sid=5e03e0&_nc_cat=101" // <-- Replace this with your image path
              alt="darshan"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-2xl  font-bold">Darshan</h2>
            <p className=" text-white tag text-md rounded-md py-1 px-2 font-semibold bg-gradient-to-r from-pink-500/30 to-purple-500/30">
              Technical Support
            </p>

            {/* Name */}

            {/* Role */}
            <p className="text-pink-400 text-lg font-semibold ">8762001156</p>
          </div>

          {/* Description */}
        </div>

        <div className="w-[460px] z-10 h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src={blen} // <-- Replace this with your image path
              alt="Blen"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-2xl  font-bold">Blen</h2>
            <p className=" text-white tag text-md rounded-md py-1 px-2 font-semibold bg-gradient-to-r from-pink-500/30 to-purple-500/30">
              Technical Support
            </p>

            {/* Name */}

            {/* Role */}
            <p className="text-pink-400 text-lg font-semibold ">9606027172</p>
          </div>
          {/* Description */}
        </div>

        <div className="w-[460px] z-10 h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src={rupesh} // <-- Replace this with your image path
              alt="Rupesh"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-2xl  font-bold">Rupesh Reddy</h2>
            <p className=" text-white tag text-md rounded-md py-1 px-2 font-semibold bg-gradient-to-r from-pink-500/30 to-purple-500/30">
              Technical Support
            </p>

            {/* Name */}

            {/* Role */}
            <p className="text-pink-400 text-lg font-semibold ">9606027172</p>
          </div>
          {/* Description */}
        </div>

        {/* <div className="w-[460px] h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src={prithvi}
              alt="prithvi"
              className="object-cover w-full h-full"
            />
          </div>

          <h2 className="text-white text-2xl font-bold">Prithvi</h2>

          <p className="text-pink-400 text-lg font-semibold mb-4">
            jr Fest Cordinator
          </p>

          <p className="text-gray-300 text-sm">
            Event coordination expert managing complex logistics and team
            communications.
          </p>
        </div> */}

        {/* <div className="w-[460px] h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
         
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src={aditya} 
              alt="aditya"
              className="object-cover w-full h-full"
            />
          </div>

       
          <h2 className="text-white text-2xl font-bold">Aditya Shree</h2>

      
          <p className="text-pink-400 text-lg font-semibold mb-4">
            Jr Fest Coordinator
          </p>

          
          <p className="text-gray-300 text-sm">
            Event coordination expert managing complex logistics and team
            communications.
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Team;

import React from "react";
import "../App.css";
import Navbar from "./Navbar";

import ankitaPic from "../assets/ankita.jpeg";
import jeevitha from "../assets/jeevitha.jpeg";
import sriram from "../assets/sriram.jpeg";
// import prithvi from "../assets/prithvi.jpeg";
// import aditya from "../assets/aditya.jpeg";

const Team = () => {
  return (
    <>
      <Navbar></Navbar>

      <div className="bg-[#0D0D1A] flex flex-row flex-wrap pt-24 py-20  px-7 gap-9">
        {/* start */}

        <div className="w-[460px] h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src={jeevitha} // <-- Replace this with your image path
              alt="Jeevitha"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name */}
          <h2 className="text-white text-2xl font-bold">Jeevitha</h2>

          {/* Role */}
          <p className="text-pink-400 text-lg font-semibold mb-4">
            Sr Fest Coordinator
          </p>

          {/* Description */}
          <p className="text-gray-300 text-sm">
            Event coordination expert managing complex logistics and team
            communications.
          </p>
        </div>
        <div className="w-[460px] h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src="" // <-- Replace this with your image path
              alt="Sam"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name */}
          <h2 className="text-white text-2xl font-bold">Sam</h2>

          {/* Role */}
          <p className="text-pink-400 text-lg font-semibold mb-4">Lady Boss</p>

          {/* Description */}
          <p className="text-gray-300 text-sm">
            Event coordination expert managing complex logistics and team
            communications.
          </p>
        </div>
        <div className="w-[460px] h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src={ankitaPic} // <-- Replace this with your image path
              alt="Ankitha"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name */}
          <h2 className="text-white text-2xl font-bold">Ankita</h2>

          {/* Role */}
          <p className="text-pink-400 text-lg font-semibold mb-4">
            Jr Event Coordinator
          </p>

          {/* Description */}
          <p className="text-gray-300 text-sm">
            Event coordination expert managing complex logistics and team
            communications.
          </p>
        </div>
        <div className="w-[460px] h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src={sriram} // <-- Replace this with your image path
              alt="sriram"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name */}
          <h2 className="text-white text-2xl font-bold">Sriram</h2>

          {/* Role */}
          <p className="text-pink-400 text-lg font-semibold mb-4">
            Head Coordinator
          </p>

          {/* Description */}
          <p className="text-gray-300 text-sm">
            Event coordination expert managing complex logistics and team
            communications.
          </p>
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
        <div className="w-[460px] h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src="https://media-blr1-1.cdn.whatsapp.net/v/t61.24694-24/491866700_1114268440740721_4875775447951938251_n.jpg?ccb=11-4&oh=01_Q5Aa1QHCLCeDypjhHJaekKx70TID3_Icf1tUIB0VraWsOI6JSw&oe=681B59DA&_nc_sid=5e03e0&_nc_cat=110" // <-- Replace this with your image path
              alt="Deekshita"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name */}
          <h2 className="text-white text-2xl font-bold">Deekshita</h2>

          {/* Role */}
          <p className="text-pink-400 text-lg font-semibold mb-4">Convenor</p>

          {/* Description */}
          <p className="text-gray-300 text-sm">
            Event coordination expert managing complex logistics and team
            communications.
          </p>
        </div>
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
        <div className="w-[460px] h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src="https://media-blr1-1.cdn.whatsapp.net/v/t61.24694-24/491866700_1114268440740721_4875775447951938251_n.jpg?ccb=11-4&oh=01_Q5Aa1QHCLCeDypjhHJaekKx70TID3_Icf1tUIB0VraWsOI6JSw&oe=681B59DA&_nc_sid=5e03e0&_nc_cat=110" // <-- Replace this with your image path
              alt="Deekshita"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name */}
          <h2 className="text-white text-2xl font-bold">Deekshita</h2>

          {/* Role */}
          <p className="text-pink-400 text-lg font-semibold mb-4">
            Sr Coordinator
          </p>

          {/* Description */}
          <p className="text-gray-300 text-sm">
            Event coordination expert managing complex logistics and team
            communications.
          </p>
        </div>
        <div className="w-[460px] h-[350px]  bg-[#1E1E2D] rounded-xl p-6  flex flex-col items-center text-center shadow-lg">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-500 mb-4">
            <img
              src="https://media-blr1-1.cdn.whatsapp.net/v/t61.24694-24/491866700_1114268440740721_4875775447951938251_n.jpg?ccb=11-4&oh=01_Q5Aa1QHCLCeDypjhHJaekKx70TID3_Icf1tUIB0VraWsOI6JSw&oe=681B59DA&_nc_sid=5e03e0&_nc_cat=110" // <-- Replace this with your image path
              alt="Deekshita"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name */}
          <h2 className="text-white text-2xl font-bold">Deekshita</h2>

          {/* Role */}
          <p className="text-pink-400 text-lg font-semibold mb-4">Convenor</p>

          {/* Description */}
          <p className="text-gray-300 text-sm">
            Event coordination expert managing complex logistics and team
            communications.
          </p>
        </div>
      </div>
    </>
  );
};

export default Team;

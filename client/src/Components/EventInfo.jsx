import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import "../App.css";
import "../CSS/common/bg-animation.css";
import hulk from "../assets/Hulk.png";
import gamora from "../assets/Gamora.png";
import drax from "../assets/Drax.png";
import groot from "../assets/Groot.png";
import nebula from "../assets/Nebula.png";
import rocket from "../assets/Rocket.png";
import starLord from "../assets/Star_Lord.png";
import cosmoDog from "../assets/Cosmos_Dog.png";
const EventInfo = () => {
  const [state, setState] = useState();
  // let getEventName = async () => {
  // const event = await useSelector(
  //   (state) => state.currentEventSlice.currentEvent
  // );
  const currentEvent = useSelector((state) => state.eventName?.currentEvent);
  // };

  // useEffect(() => {
  // getEventName();
  // }, []);

  const characterImages = {
    hulk,
    gamora,
    drax,
    groot,
    nebula,
    rocket,
    starLord,
    cosmoDog,
  };

  let eventFlow = {
    uiux: {
      title: "Gamora’s UI Forge ",
      count: 3,
      charcater: "gamora",
      shortDetail:
        "Design intuitive and attractive user interfaces while showcasing creativity and problem-solving in crafting seamless user experiences for real-world problems.",
      overview:
        "This event will test pariticipants on their creativity, UI/UX design skills and ability to implement designsinto working prototypes. THe evnt consist of two consecutive rounds:Ideation and Implementation",
      location: "AIML Lab 2",
      discription:
        " This event will test pariticipants on their creativity , UI/UX design skills and ability to implement designs into working prototypes. THe evnt consist of two consecutive rounds:Ideation and Implementation",
      rule1: "Static and Dynamic website designing event.",
      rule2:
        "TechStack allowed - (Figma , Cancva , Adobe XD , HTML , CSS , JS)",
      rule3: "No. of participants : 2-3",
      rule4: "Each college may register a maximum of 2 teams",
      timing: "10am to 1pm",
      miniDescription: "test your self",
      Prizes: {
        first: "3000",
        second: "2250",
      },
      coordinators: {
        first: {
          name: "Sheela",
          contact: 9345604294,
        },
        second: {
          name: "Afreed",
          contact: 9741799939,
        },
      },
    },
    itQuiz: {
      title: "Cosmo’s Space Trivia",
      count: 2,
      charcater: "cosmoDog",
      location: "Lab",
      shortDetail:
        "Test your tech knowledge in a thrilling quiz covering programming, hardware, software, and current trends in the IT world.",
      overview:
        "This event will test participants on their overall knowledge, speed, and accuracy in the field of Information Technology. It aims to engage tech enthusiasts in a fun yet competitive environment that encourages quick thinking and smart decision-making. The quiz is designed to not only assess theoretical understanding but also promote curiosity and awareness of the ever-evolving tech world. ",
      discription:
        " This event will test pariticipants on their creativity , UI/UX design skills and ability to implement designs into working prototypes. THe evnt consist of two consecutive rounds:Ideation and Implementation",
      rule1: "No. of Participants allowed - 2",
      rule2: "Max two teams per college is 2",
      rule3:
        "Scores from Round1 and Round 2 are used only for qualification purpose",
      rule4: " Final round scores alone will determine the winners.",
      timing: "10am to 1pm",
      miniDescription: "test your self",
      Prizes: {
        first: "3000",
        second: "2250",
      },
      coordinators: {
        first: {
          name: "Kartik R S ",
          contact: 6361154606,
        },
        second: {
          name: "Ganesh K ",
          contact: 8310821825,
        },
      },
    },
    coding: {
      title: "Nebula’s Cyber Takeover",
      count: 3,
      charcater: "nebula",
      shortDetail:
        "Showcase your programming skills by solving real-time coding challenges under pressure—logic, speed, and accuracy will lead you to victory.",
      overview:
        "This event will challenge participants on their coding skills, logical thinking, and problem-solving abilities. It aims to provide an engaging platform where programmers can showcase their talent, creativity, and technical precision under time constraints. Participants will be expected to think critically, write efficient code, and debug effectively to solve given tasks.",
      location: "MCA Lab 2",
      discription:
        " This event will test participants on their creativity , UI/UX design skills and ability to implement designs into working prototypes. THe evnet consist of two consecutive rounds:Ideation and Implementation",
      rule1: "No. of Participants:2-3",
      rule2: "Max two teams per college is 2",
      rule3: "Knowledge of programming language C/C++ is mandatory",
      rule4:
        " Any malpractice during the event will lead to team disqualification.",
      timing: "11am to 1pm",
      miniDescription: "test your self",
      Prizes: {
        first: "3000",
        second: "2250",
      },
      coordinators: {
        first: {
          name: "Adesh.M",
          contact: 9136191475,
        },
        second: {
          name: "Adesh.M",
          contact: 9136191475,
        },
      },
    },
    ideathon: {
      title: "Drax’s Power Pitch",
      count: 1,
      charcater: "drax",
      shortDetail:
        "Pitch groundbreaking tech ideas to solve real-world problems—innovate, collaborate, and impress judges with your originality and vision.",
      overview:
        "This event encourages participants to think creatively and come up with innovative solutions to real-world problems. It is designed to spark ideation, critical thinking, and collaborative brainstorming in a time-bound environment. ",
      location: "AB411",
      discription:
        " This event will test pariticipants on their creativity , UI/UX design skills and ability to implement designs into working prototypes. THe evnt consist of two consecutive rounds:Ideation and Implementation",
      rule1: "No. of participant : 1",
      rule2: "Maximum two registrations per college",
      rule3: "Plagiarism of any kind will lead to immediate disqualification.",
      rule4: " Submissions will be thoroughly checked for authenticity.",
      timing: "10am to 1pm",
      miniDescription: "test your self",
      Prizes: {
        first: "2000",
        second: "1000",
      },
      coordinators: {
        first: {
          name: "Saniya",
          contact: 8951038618,
        },
        second: {
          name: "Ankita",
          contact: 8088006141,
        },
      },
    },
    treasureHunt: {
      title: "Rocket’s Relic Raid",
      count: 3,
      charcater: "rocket",
      shortDetail:
        "Crack codes, solve tech-based riddles, and follow digital clues across campus in this thrilling tech-themed treasure hunt adventure.",
      overview:
        "This event is designed to test participants’ problem-solving skills, teamwork, and presence of mind through a series of exciting clues and challenges. Participants will race against time, decoding hints and navigating through different stages to find the final treasure. The event combines logic, observation, and strategy in a fun and energetic atmosphere, promoting collaboration and quick thinking. Each clue will bring them closer to the goal, making the journey as thrilling as the destination. ",
      location: "AB412",
      discription:
        " This event will test pariticipants on their creativity , UI/UX design skills and ability to implement designs into working prototypes. THe evnt consist of two consecutive rounds:Ideation and Implementation",
      rule1: "Maximum two teams per college.",
      rule2: "No. of participants : 2-3",
      rule3: "Final Round will determine the winner of the overall event",
      rule4:
        " Any malpractice during the event will lead to team disqualification.",
      timing: "10am to 1pm",
      miniDescription: "test your self",
      Prizes: {
        first: "3000",
        second: "2250",
      },
      coordinators: {
        first: {
          name: "Darshan K ",
          contact: 8762001156,
        },
        second: {
          name: "Mayur Hambar ",
          contact: 8088198131,
        },
      },
    },
    gaming: {
      title: "Groot’s Game Grid",
      count: 3,
      charcater: "groot",
      shortDetail:
        "Battle it out in high-octane eSports matches—showcase reflexes, strategy, and teamwork in a thrilling gaming showdown.",
      overview:
        "This event is all about excitement, strategy, and fast-paced action, offering participants a chance to showcase their gaming skills in a competitive environment. It promotes teamwork, quick reflexes, and tactical thinking as players go head-to-head in popular games. Whether you're a casual gamer or a hardcore enthusiast, this event promises high energy and intense gameplay. ",
      location: "MCA Lab 1",
      discription:
        " This event will test pariticipants on their creativity , UI/UX design skills and ability to implement designs into working prototypes. THe evnt consist of two consecutive rounds:Ideation and Implementation",
      rule1: "No. of participants : 2-3",
      rule2: "Maximum two teams per college.",
      rule3: "Participants should carry their own laptops and equipment’s.",
      rule4: " Any player caught cheating will be disqualified with the team",
      timing: "10am to 1pm",
      miniDescription: "test your self",
      Prizes: {
        first: "3000",
        second: "2250",
      },
      coordinators: {
        first: {
          name: "Samarth G",
          contact: 8095207935,
        },
        second: {
          name: "Vishwas M ",
          contact: 8073338266,
        },
      },
    },
    itManager: {
      title: "Star Lord’s IT Command",
      count: 1,
      charcater: "starLord",
      shortDetail:
        "Prove your leadership in tech management through rounds of crisis handling, decision-making, pitching, and real-world IT scenario simulations.",
      overview:
        "This event is crafted to test participants on their decision-making, leadership, and problem-solving skills in real-world IT management scenarios. Participants will step into the shoes of an IT manager, facing simulated challenges that require strategic thinking, resource management, and effective communication. The event promotes a balance of technical knowledge and managerial acumen, encouraging participants to think critically and lead with confidence.",
      location: "Seminar Hall",
      discription:
        " This event will test pariticipants on their creativity , UI/UX design skills and ability to implement designs into working prototypes. THe evnt consist of two consecutive rounds:Ideation and Implementation",
      rule1: "No. of participants : 1",
      rule2: "Maximum two teams per college.",
      rule3:
        "Participants should keep communication professional and constructive",
      rule4:
        " Participants should bring their own device with MS Office pre-installed, and resume hard copy customized for the event.",
      timing: "10am to 12:30pm",
      miniDescription: "test your self",
      Prizes: {
        first: "2000",
        second: "1000",
      },
      coordinators: {
        first: {
          name: "Blen P",
          contact: 9535745513,
        },
        second: {
          name: "Samskrithi",
          contact: 8296759865,
        },
      },
    },
    photography: {
      title: "Hulk’s Smash Clicks",
      count: 1,
      charcater: "hulk",
      shortDetail:
        "Capture compelling moments, perspectives, and emotions through your lens—show your storytelling skills with creativity and technical finesse.",
      overview:
        "This event celebrates the art of storytelling through the lens, challenging participants to capture moments that speak volumes. It encourages creativity, attention to detail, and a unique perspective on everyday scenes. Participants will be judged on composition, originality, and the ability to convey emotion or a message through their photographs.",
      location: "AB402",
      discription:
        " This event will test pariticipants on their creativity , UI/UX design skills and ability to implement designs into working prototypes. THe evnt consist of two consecutive rounds:Ideation and Implementation",
      rule1: "No. of participants : 1",
      rule2: "Maximum two teams per college.",
      rule3: "Camera or Smartphone may be used.",
      rule4:
        " Editing is allowed, but manipulation like AI-generated elements or misleading alterations are not permitted.",
      timing: "Full Day",
      miniDescription: "test your self",
      Prizes: {
        first: "2000",
        second: "1000",
      },
      coordinators: {
        first: {
          name: "Anirudh B",
          contact: 9980708940,
        },
        second: {
          name: "Amit",
          contact: 8618567318,
        },
      },
    },
  };
  // console.log(eventFlow[currentEvent].charcater, "juiyuii");

  return (
    <>
      <div className="wrapper  ">
        <div id="stars" className="-z-10"></div>
        <div id="stars2" className="-z-10"></div>
        <div id="stars3" className="-z-10"></div>
      </div>

      <div className="mt-2">
        <Navbar></Navbar>
      </div>
      {currentEvent && (
        <div className="mt-[140px] md:mt-20 flex md:justify-center-safe lg:py-6">
          <div className=" mx-5 w-[95vw]  md:w-[90vw] rounded-xl bg-[#0F1016]  flex flex-col gap-24">
            <div>
              <p className="title text-[25px] my-3 md:text-[50px] lg:text-[40px] md:font-bold text-center md:my-5 lg:my-5">
                {eventFlow[currentEvent]?.title}
              </p>
              <div className="flex gap-5 md:gap-10 justify-center">
                <div className=" justify-center  place-items-center p-auto flex gap-[3px]  md:gap-4">
                  <i class="fa-regular fa-clock text-[#C3CFD1] text-xs md:text-lg font-thin my-1"></i>
                  <p className="text-[#C3CFD1] text-[10px] md:text-xl lg:text-lg">
                    16 MAY 2025
                  </p>
                </div>

                <div className=" flex  place-items-center justify-center p-auto gap-2 md:gap-4">
                  <i class="fa-solid fa-location-dot text-[#C3CFD1] text-xs md:text-lg my-1"></i>
                  <p className=" text-[#C3CFD1] text-[10px] md:text-xl lg:text-lg">
                    {eventFlow[currentEvent]?.location}
                  </p>
                </div>
                <div className=" flex place-items-center gap-2 md:gap-4  justify-center p-auto">
                  <i class="fa-solid fa-user-group text-[#C3CFD1] text-xs md:text-lg my-1"></i>
                  <p className="text-[#C3CFD1] text-[10px] md:text-xl lg:text-lg">
                    {eventFlow[currentEvent]?.count} MEMBERS
                  </p>
                </div>
              </div>
            </div>
            <div className=" relative flex  flex-col lg:flex-row">
              <div>
                <img
                  src={characterImages[eventFlow[currentEvent]?.charcater]}
                  className=" h-[30vh] ml-[60px] md:ml-[200px] mb-10 lg:ml-[850px] lg:absolute md:h-[40vh] lg:h-[90vh]"
                  alt={eventFlow[currentEvent]?.charcater}
                />
              </div>
              <div>
                {/* <img src={charcater} alt="" /> */}

                <button
                  onClick={() => {
                    window.location.href =
                      "https://docs.google.com/forms/d/e/1FAIpQLScn3HY1clIbxEJl5pTtbU3ZAOfI_vbU_R4jsYArty15CmanBQ/viewform";
                  }}
                  className="registerButton w-4/12 text-lg py-2 ml-5 mb-10 md:text-xl rounded-md font-bold text-white md:ml-14 md:mb-10 md:py-3 md:w-3/12  lg:ml-16 lg:mb-10 lg:w-2/12 lg:py-3"
                >
                  Register
                </button>

                <ol class="relative border-s border-gray-200  dark:border-gray-700 ml-4 md:ml-16 lg:ml-14">
                  <li class="mb-10 ms-4 ">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <p className="text-white text-2xl mb-5 md:text-4xl md:ml-1 md:mb-5 lg:text-3xl lg:ml-1 font-bold lg:mb-4">
                      Event Overview
                    </p>
                    <time class=" text-gray-400 dark:text-gray-500 ">
                      <div className="details  ml-2 w-[75vw] md:w-3/4 bg-[#1E1E2D] lg:w-2/4  rounded-lg">
                        <p className="text-[#D2D2D5]">
                          {eventFlow[currentEvent]?.overview}
                        </p>
                      </div>
                    </time>
                  </li>
                  <li class="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <p className="text-white text-2xl mb-5  md:text-4xl md:ml-1 md:mb-5 lg:text-3xl lg:ml-1 font-bold lg:mb-4">
                      Event Details
                    </p>
                    <time class=" text-gray-400 dark:text-gray-500 ">
                      <div className="details ml-2  w-[75vw] md:ml-9 md:w-3/4 lg:ml-9 bg-[#1E1E2D] lg:w-2/4  rounded-lg">
                        <p className="text-[#D2D2D5]">
                          {eventFlow[currentEvent]?.shortDetail}
                        </p>
                        <div className="flex flex-col  mt-4 ">
                          <div className="">
                            <p className="sub-head font-bold text-xl d:text-2xl lg:text-xl mt-5">
                              Timing
                            </p>
                            <p className="font-normal">
                              {eventFlow[currentEvent]?.timing}
                            </p>
                          </div>
                          {/* <div className="">
                            <p className="sub-head font-bold text-xl md:text-2xl lg:text-xl  mt-5">
                              Prizes
                            </p>
                            <div className=" flex gap-16 mt-2 ml-3">
                              <li className="list-disc">
                                {eventFlow[currentEvent]?.Prizes.first}
                              </li>
                              <li className="list-disc">
                                {eventFlow[currentEvent]?.Prizes.second}
                              </li>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </time>
                  </li>
                  <li class="mb-10 ms-4 ">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <p className="text-white text-2xl mb-5  md:text-4xl md:ml-1 md:mb-5 lg:text-3xl lg:ml-1 font-bold lg:mb-4">
                      Rules & Regulations
                    </p>
                    <time class="   text-gray-400 dark:text-gray-500 ">
                      <div className="details ml-2  w-[75vw]  bg-[#1E1E2D] md:w-[70vw] lg:w-[80vw] flex flex-col lg:flex-row gap-4 md:gap-3 lg:gap-20  rounded-lg">
                        <div className="flex flex-col gap-4 text-[#D2D2D5]">
                          <li className="list-disc">
                            {eventFlow[currentEvent]?.rule1}
                          </li>
                          <li className="list-disc">
                            {eventFlow[currentEvent]?.rule2}
                          </li>
                        </div>
                        <div className="flex flex-col text-[#D2D2D5]  gap-4">
                          <li className="list-disc">
                            {eventFlow[currentEvent]?.rule3}
                          </li>
                          <li className="list-disc">
                            {eventFlow[currentEvent]?.rule4}
                          </li>
                        </div>
                      </div>
                    </time>
                  </li>
                  <li class="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <p className="text-white text-2xl mb-5  md:text-4xl md:ml-1 md:mb-5 lg:text-3xl lg:ml-1 font-bold lg:mb-4">
                      Event Coordinators
                    </p>
                    <time class="   text-gray-400 dark:text-gray-500 ">
                      <div className="details  ml-2  w-[75vw] bg-[#1E1E2D] md:w-[70vw] lg:w-[80vw] flex flex-col md:flex-row gap-10  md:h-[22vh] place-items-center  rounded-lg">
                        <div className="bg-[#231E49]  flex flex-col p-4 md:p-5 rounded-md md:rounded-xl  w-[60vw] md:w-1/3 ">
                          <span className="sub-head text-md md:text-xl font-bold">
                            {eventFlow[currentEvent]?.coordinators.first.name}
                          </span>
                          <span className="text-[#D2D2D5] text-xs md:text-sm  font-semibold">
                            {
                              eventFlow[currentEvent]?.coordinators.first
                                .contact
                            }
                          </span>
                        </div>
                        <div className="bg-[#231E49]  flex flex-col p-3 md:p-5 rounded-md md:rounded-xl w-[60vw] md:w-1/3 ">
                          <span className="text-md md:text-xl font-bold sub-head">
                            {eventFlow[currentEvent]?.coordinators.second.name}
                          </span>
                          <span className="text-[#D2D2D5]text-xs md:text-sm  font-semibold">
                            {
                              eventFlow[currentEvent]?.coordinators.second
                                .contact
                            }
                          </span>
                        </div>
                      </div>
                    </time>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventInfo;

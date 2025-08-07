import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[5vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Main Container */}
      <div className="relative flex flex-col space-y-16">
        {/* Vertical line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="relative flex flex-col lg:flex-row items-center lg:items-start"
          >
            {/* Image instead of Circle */}
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
              <img
                src={edu.img}
                alt="timeline icon"
                className="w-10 h-10 rounded-full border-2 border-purple-500 object-cover"
              />
            </div>

            {/* Content Card */}
            <div
              className={`
                w-full 
                sm:w-[90%]
                md:w-[80%]
                lg:w-[48%]
                p-4 sm:p-5 md:p-6
                rounded-2xl  border border-white bg-gray-900 backdrop-blur-md 
                
                shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
                transform transition-transform duration-300 hover:scale-105
                ${index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"}
              `}
            >
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <h4 className="text-sm sm:text-md text-gray-300">
                  {edu.school}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">{edu.date}</p>
              </div>

              <p className="mt-4 text-gray-400 font-bold text-sm sm:text-base">
                Grade: {edu.grade}
              </p>
              <p className="mt-4 text-gray-400 text-sm sm:text-base">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
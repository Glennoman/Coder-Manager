import React from "react";

const ForManagers = () => {
  return (
    <div className="for-managers">
      <h1 className="text-secondaryPurple text-4xl font-bold">For Managers</h1>
      <h1 className="text-7xl font-black text-wrap max-w-[90%]">
        Access{" "}
        <span className="text-secondaryPurple font-black text-7xl text-wrap max-w-[90%]">
          high-professional
        </span>{" "}
        platform for coding challenges design
      </h1>
      <div class="grid grid-cols-2 grid-rows-[auto_auto_auto] gap-5">
        <div className="grid-item">
          <img src="./assets/ok.svg" alt="Feature 1" />
          <p className="font-normal text-base text-gray-20">
            Craft tailored coding challenges suited to your specific needs and
            objectives
          </p>
        </div>
        <div className="grid-item">
          <img src="./assets/ok.svg" alt="Feature 2" />
          <p className="font-normal text-base text-gray-20">
            Design challenges that align perfectly with your recruitment
            criteria
          </p>
        </div>
        <div className="grid-item">
          <img src="./assets/ok.svg" alt="Feature 3" />
          <p className="font-normal text-base text-gray-20">
            Choose from a wide range of problem types including algorithmic,
            data structures, puzzles, and more.
          </p>
        </div>
        <div className="grid-item">
          <img src="./assets/ok.svg" alt="Feature 4" />
          <p className="font-normal text-base text-gray-20">
            Ergonomic tools for challenges design
          </p>
        </div>
        <div className="grid-item">
          <img src="./assets/ok.svg" alt="Feature 5" />
          <p className="font-normal text-base text-gray-20">
            Collaborate with colleagues or peers in creating and refining coding
            challenges
          </p>
        </div>
        <div className="grid-item">
          <img src="./assets/ok.svg" alt="Feature 6" />
          <p className="font-normal text-base text-gray-20">
            Access dedicated support from our team of experts
          </p>
        </div>
      </div>
      <button className="bg-secondaryPurple text-white border-none py-2 px-4 text-base rounded-md cursor-pointer transition-colors mt-5 mb-36 hover:opacity-90">
        Join managers community
      </button>
    </div>
  );
};

export default ForManagers;

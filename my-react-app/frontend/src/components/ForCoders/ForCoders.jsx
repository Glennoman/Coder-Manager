import React from "react";

const ForCoders = () => {
  return (
    <div className="for-coders">
      <h1 className="text-secondaryPurple text-4xl font-bold">For Coders</h1>
      <h1 className="text-7xl font-black text-wrap max-w-[90%]">
        What you will{" "}
        <span className="text-secondaryPurple font-black text-7xl text-wrap max-w-[90%]">
          gain
        </span>
      </h1>
      <p className="font-semibold text-gray-90 text-shadow-custom text-wrap max-w-[90%]">
        You are a coder who wants to level up his skills in coding and problem
        solving? Here is what we provide
      </p>
      <div class="grid grid-cols-2 grid-rows-[auto_auto_auto] gap-5">
        <div className="grid-item">
          <img src="./assets/ok.svg" alt="Benefit 1" />
          <p className="font-normal text-base text-gray-20">
            <span className="par">Rich practice set of problems</span>
            <br />
            Access a rich library of practice problems, algorithms, and data
            structures to enhance your skills
          </p>
        </div>
        <div className="grid-item">
          <img src="./assets/ok.svg" alt="Benefit 2" />
          <p className="font-normal text-base text-gray-20">
            <span className="par">Universal contests</span>
            <br />
            Compete in regularly scheduled contests against top talent from
            around the globe
          </p>
        </div>
        <div className="grid-item">
          <img src="./assets/ok.svg" alt="Benefit 3" />
          <p className="font-normal text-base text-gray-20">
            <span className="par">Constant feedback</span>
            <br />
            Receive personalized insights and feedback to improve your
            problem-solving abilities
          </p>
        </div>
        <div className="grid-item">
          <img src="./assets/ok.svg" alt="Benefit 4" />
          <p className="font-normal text-base text-gray-20">
            <span className="par">Sharing is caring</span>
            <br />
            Connect with like-minded individuals, form teams, and tackle
            challengers together
          </p>
        </div>
        <div className="grid-item">
          <img src="./assets/ok.svg" alt="Benefit 5" />
          <br />
          <span className="font-normal text-base text-gray-20">
            Track your progress and climb the ranks on our leaderboard
          </span>
        </div>
        <div className="grid-item">
          <img src="./assets/ok.svg" alt="Benefit 6" />
          <br />
          <span className="font-normal text-base text-gray-20">
            Detailed solutions for problems
          </span>
        </div>
      </div>
      <button className="bg-secondaryPurple text-white border-none py-2 px-4 text-base rounded-md cursor-pointer transition-colors mt-5 mb-36 hover:opacity-90">
        Join coders community
      </button>
    </div>
  );
};

export default ForCoders;

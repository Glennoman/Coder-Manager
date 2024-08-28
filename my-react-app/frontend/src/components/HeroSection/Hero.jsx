import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section>
      <main className="flex flex-col flex-wrap justify-between items-center">
        <div>
          <div className="text-center text-wrap max-w-[90%]">
            <h1>The Place for Competitive Programmers</h1>
            <p>
              CodeCLA is where programmers participate in programming contests,
              solve algorithm and data structure challenges, and become part of
              an awesome community.
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-wrap gap-5 px-12 py-3 items-center">
          <button className="bg-secondaryPurple text-white py-3 px-5 text-base rounded-md cursor-pointer transition-colors mt-5 mb-36 hover:bg-primary hover:border-secondaryPurple hover:text-secondaryPurple">
            <a href="become-coder.html" target="_blank">
              Become a Coder
            </a>
          </button>
          <button className="bg-primary text-secondaryPurple border border-secondaryPurple text-base rounded-lg py-[10px] px-5 mt-5 mb-36 text-center hover:bg-secondaryPurple hover:text-primary">
            <a href="become-manager.html" target="_blank">
              Become a Manager
            </a>
          </button>
        </div>
        <h1 className="text-secondaryPurple text-center">
          Practice to level-up
        </h1>
        <div className="grid justify-center">
          <div class="grid grid-cols-[repeat(2,_minmax(150px,_1fr))] gap-5 mt-5 justify-center">
            <div className="square">
              <h2 class="text-center text-[16px] rounded-[50px] text-gray-90 m-0">
                Problems for practice
                <br />
                1k
              </h2>
            </div>

            <div className="square">
              <h2 class="text-center text-[16px] rounded-[50px] text-gray-90 m-0">
                Coders
                <br />
                100+
              </h2>
            </div>
            <div className="square">
              <h2 class="text-center text-[16px] rounded-[50px] text-gray-90 m-0">
                Programming languages
                <br />
                10
              </h2>
            </div>
            <div className="square">
              <h2 class="text-center text-[16px] rounded-[50px] text-gray-90 m-0">
                Submissions
                <br />
                130K
              </h2>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;

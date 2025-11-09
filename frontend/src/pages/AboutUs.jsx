import React from "react";
import heading1 from "../images/about_us/A montage of familiar faces and names..png";
import para1 from "../images/about_us/Some stories come from the biggest names. Others begin with bold, rising voices. We’ve been fortunate to walk alongside both - listening, creating, and building stories that matter..png";
import quote from "../images/about_us/Every project is more than just a brief - it’s a new chapter waiting to be written. Together, we've crafted tales that inspire, connect, and endure..png";
import stats1 from "../images/about_us/Frame 9.png";
import stats2 from "../images/about_us/Frame 22.png";
import stats3 from "../images/about_us/Frame 23.png";
import mountain from "../images/about_us/Group 10.png";
import brands from "../images/about_us/OBJECTS.png";

export default function AboutUs(){
  return (
    <section className="py-16 md:py-20 bg-[radial-gradient(circle_at_center,_#fde7db_1px,_#fff6f0_1px)] [background-size:8px_8px]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="md:pr-6">
            <img src={heading1} alt="heading" className="w-full max-w-xl" />
            <img src={para1} alt="copy" className="mt-6 w-full max-w-sm" />
            <div className="mt-10 flex gap-6 items-end">
              <img src={stats1} alt="85+ projects" className="w-28 md:w-32 rotate-[-8deg] drop-shadow" />
              <img src={stats2} alt="50+ clients" className="w-28 md:w-32 rotate-[6deg] drop-shadow" />
              <img src={stats3} alt="10+ team" className="w-28 md:w-32 rotate-[-4deg] drop-shadow" />
            </div>
          </div>
          <div className="md:pl-6 flex justify-center md:justify-end">
            <img src={quote} alt="quote" className="w-full max-w-xl" />
          </div>
        </div>
        <div className="relative mt-16 h-64 overflow-visible">
          <img src={brands} alt="brands" className="absolute right-0 bottom-0 w-[85%] md:w-[70%] opacity-90" />
          <img src={mountain} alt="illustration" className="absolute right-6 bottom-0 w-[40%] md:w-[32%]" />
        </div>
      </div>
    </section>
  );
}


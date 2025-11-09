import React from "react";
import { Link } from "react-router-dom";
import noteImg from "../images/About_Team/yellow.png";
import indiaGate from "../images/About_Team/t.png";
import makers from "../images/About_Team/Film Makers.png";
import branding from "../images/About_Team/Branding Experts.png";
import curators from "../images/About_Team/Art Curators.png";
import groupSilhouette from "../images/About_Team/Group.png";
import arrow1 from "../images/About_Team/Vector.png";
import arrow2 from "../images/About_Team/Vector (1).png";
import arrow3 from "../images/About_Team/Vector (2).png";
import viewPortfolio from "../images/About_Team/view_portfolio.png";
import frameImg from "../images/Frame 33.png";

export default function AboutTeam(){
  return (
    <section className="relative min-h-screen pb-28 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="sr-only">About Team</h1>
        <div className="mt-10 grid grid-cols-12 gap-6 items-end">
          <div className="relative col-span-12 md:col-span-4">
            <img src={indiaGate} alt="India Gate" className="w-72 md:w-80" />
            <img src={noteImg} alt="about note" className="w-64 rotate-[-12deg] drop-shadow absolute -top-10 left-8" />
            <img src={branding} alt="Branding Experts" className="mt-6 ml-6 inline-block" />
          </div>
          <div className="col-span-12 md:col-span-8 relative">
            <div className="relative">
              <img src={groupSilhouette} alt="Team silhouettes" className="w-full max-w-2xl mx-auto md:ml-10" />
              <img src={arrow1} alt="arrow" className="hidden md:block absolute left-[38%] -top-8 w-24" />
              <img src={arrow2} alt="arrow" className="hidden md:block absolute left-[42%] top-6 w-20" />
              <img src={arrow3} alt="arrow" className="hidden md:block absolute right-0 top-1 w-24" />
              <img src={makers} alt="Film Makers" className="hidden md:block absolute left-[40%] -top-16" />
              <img src={curators} alt="Art Curators" className="hidden md:block absolute right-2 -top-10" />
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-2xl md:text-3xl font-serif text-slate-700">Take a closer look at the stories V bring to life.</p>
        <div className="mt-6 flex justify-center">
          <Link to="/portfolio" className="inline-flex items-center px-5 py-2 rounded-full bg-orange-500 hover:bg-orange-600">
            <img src={viewPortfolio} alt="view portfolio" className="h-5" />
          </Link>
        </div>
      </div>
      <img src={frameImg} alt="decorative frame" className="pointer-events-none select-none absolute left-0 right-0 bottom-0 w-full" />
    </section>
  );
}

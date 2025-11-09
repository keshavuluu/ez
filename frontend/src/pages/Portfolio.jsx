import React from "react";
import camGroup from "../images/portfolio/Cam Group.png";
import swirlDecor from "../images/portfolio/Group 11.png";
import footerDecor from "../images/portfolio/Footer Vector.png";


export default function Portfolio(){
  return (
    <section className="relative min-h-screen pb-28 py-16 md:py-20 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 z-10">
        <h1 className="text-center font-serif text-3xl md:text-4xl text-slate-800">The Highlight Reel</h1>
        <p className="mt-2 text-center text-slate-600">Watch the magic we’ve captured.</p>

      
        <div className="mt-10 flex items-center justify-center gap-6">
          <img src={camGroup} alt="Camera Group" className="h-44 md:h-56 object-contain" />
          <img src={swirlDecor} alt="Group 11" className="h-56 md:h-64 object-contain" />
          <img src={footerDecor} alt="Footer Vector" className="h-44 md:h-56 object-contain" />
        </div>
      </div>
    </section>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import heroMandala from "../images/Hero Mandala.png";
import vfilmsLogo from "../images/VFilms Logo.png";

export default function Hero(){
  return (
    <section className="relative py-20 md:py-28 bg-[radial-gradient(circle_at_center,_#fde7db_1px,_#fff6f0_1px)] [background-size:8px_8px]">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-square border-2 border-orange-200 rounded-full overflow-hidden flex items-center justify-center">
          <img src={heroMandala} alt="Hero graphic" className="w-full h-full object-contain" />
          <img src={vfilmsLogo} alt="VFilms" className="absolute w-1/2 md:w-2/3 object-contain" />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-serif text-slate-700 leading-snug">Varnan is where stories find their voice and form</h1>
          <p className="mt-4 text-orange-600 font-medium">Films . Brands . Art</p>
          <p className="mt-6 text-slate-600 max-w-xl">
            Since 2008, V've been telling stories – stories of people, their journeys, and the places that shape them.
            Some begin in polished boardrooms, others in humble village squares. But every story starts the same way – by listening with intention.
          </p>
          <div className="mt-8">
            <Link to="/services" className="inline-block px-5 py-2 rounded-full border border-orange-400 text-orange-600 hover:bg-orange-50">Explore Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

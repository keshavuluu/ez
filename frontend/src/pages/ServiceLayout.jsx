import React from "react";
import { Link } from "react-router-dom";

export default function ServiceLayout({quote, image, title, bullets}){
  return (
    <section className="py-16 md:py-20 bg-[radial-gradient(circle_at_center,_#fde7db_1px,_#fff6f0_1px)] [background-size:8px_8px]">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-slate-500 text-sm">Services / {title}</p>
        <h1 className="mt-6 text-2xl md:text-3xl font-serif text-slate-700">{quote}</h1>
        <div className="mt-10 grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-white p-3 shadow-md w-full max-w-md">
            <img src={image} alt={title} className="w-full h-80 object-cover" />
            <div className="text-center py-3 text-slate-700">{title}</div>
          </div>
          <div>
            <p className="text-slate-700 leading-7">
              Who says films are just an escape? We see them as a way to live many lives – to feel, to explore, and to tell stories that stay.
            </p>
            <ul className="mt-6 list-disc pl-5 text-slate-700 space-y-2">
              {bullets.map((b)=> <li key={b}>{b}</li>)}
            </ul>
            <div className="mt-10">
              <Link to="/contact" className="inline-flex items-center gap-2 text-orange-600 font-medium hover:underline">
                Explore Now <span>→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Link to="/services" className="px-4 py-2 border border-orange-400 text-orange-600 rounded-full">Back</Link>
        </div>
      </div>
    </section>
  );
}

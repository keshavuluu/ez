import React from "react";
import { Link } from "react-router-dom";
import filmImg from "../images/film.png";
import brandingImg from "../images/Branding.png";
import artImg from "../images/Art.png";
import frameImg from "../images/Frame 33.png";

const cards = [
  {
    title: "Film Production",
    to: "/services/film",
    img: filmImg
  },
  {
    title: "Branding",
    to: "/services/branding",
    img: brandingImg
  },
  {
    title: "Art Curation",
    to: "/services/art",
    img: artImg
  }
];

export default function ServicesGrid(){
  return (
    <section className="relative min-h-screen py-20 pb-36 bg-[radial-gradient(circle_at_center,_#fde7db_1px,_#fff6f0_1px)] [background-size:8px_8px]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-serif text-slate-700">The storyboard reveals the breadth of our craft.</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {cards.map((c)=> (
            <Link key={c.title} to={c.to} className="group block">
              <div className="bg-white shadow-md p-2 rotate-[-4deg] group-hover:rotate-0 transition rounded">
                <img src={c.img} alt={c.title} className="h-72 w-full object-cover" />
                <div className="text-center py-3 text-slate-700">{c.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <img src={frameImg} alt="decorative frame" className="pointer-events-none select-none absolute left-0 right-0 bottom-0 w-full" />
    </section>
  );
}

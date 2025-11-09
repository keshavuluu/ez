import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import brandImg from "../images/Navbar.png";
import menuImg from "../images/Navbar_1.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-orange-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={brandImg} alt="V Films" className="h-6 md:h-7" />
        </Link>
        <nav className="hidden md:flex gap-6 text-slate-700">
          <NavLink to="/services" className={({isActive})=>`hover:text-orange-600 ${isActive?"text-orange-600":""}`}>Services</NavLink>
          <NavLink to="/their-stories" className="hover:text-orange-600">Their Stories</NavLink>
          <NavLink to="/our-story" className="hover:text-orange-600">Our Story</NavLink>
          <NavLink to="/about-team" className="hover:text-orange-600">About Team</NavLink>
          <NavLink to="/varnan" className="hover:text-orange-600">Varnan</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden md:inline-block px-4 py-2 rounded-full bg-orange-500 text-white text-sm hover:bg-orange-600">Let's Talk</Link>
          <button aria-label="menu" className="md:hidden p-2" onClick={()=>setOpen(v=>!v)}>
            <img src={menuImg} alt="menu" className={`h-5 w-5 transition ${open?"rotate-90":""}`} />
          </button>
        </div>
      </div>
      <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open?"max-h-60":"max-h-0"}`}>
        <nav className="px-4 pb-4 flex flex-col gap-3 text-slate-700 bg-white/80">
          <NavLink onClick={()=>setOpen(false)} to="/services" className="py-2">Services</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/their-stories" className="py-2">Their Stories</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/our-story" className="py-2">Our Story</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/about-team" className="py-2">About Team</NavLink>
          <NavLink onClick={()=>setOpen(false)} to="/varnan" className="py-2">Varnan</NavLink>
          <Link onClick={()=>setOpen(false)} to="/contact" className="py-2 text-orange-600">Let's Talk</Link>
        </nav>
      </div>
    </header>
  );
}
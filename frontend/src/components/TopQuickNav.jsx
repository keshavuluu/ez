import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuImg from "../images/Navbar_1.png";

export default function TopQuickNav(){
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed right-4 top-4 z-[70]">
      {open && (
        <div className="absolute -top-4 right-0 left-0 translate-y-[-100%]" />
      )}
      {open && (
        <div className="fixed left-0 right-0 top-0 z-[60] bg-white/80 backdrop-blur border-b border-orange-300">
          <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-end gap-6 text-slate-700">
            <Link to="/services" className="hover:text-orange-600">Services</Link>
            <Link to="/their-stories" className="hover:text-orange-600">Their Stories</Link>
            <Link to="/our-story" className="hover:text-orange-600">Our Story</Link>
            <Link to="/varnan" className="hover:text-orange-600">Varnan</Link>
            <Link to="/contact" className="px-3 py-1 rounded-full bg-orange-500 text-white text-sm hover:bg-orange-600">Let's Talk</Link>
          </div>
        </div>
      )}
      <button aria-label="Toggle navigation" onClick={()=>setOpen(v=>!v)} className="relative z-[70] p-1 rounded-md bg-white/70 shadow">
        <img src={menuImg} alt="menu" className={`h-5 w-5 transition ${open?"rotate-90":""}`} />
      </button>
    </div>
  );
}

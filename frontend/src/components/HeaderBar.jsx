import React from "react";
import { Link } from "react-router-dom";

export default function HeaderBar(){
  return (
    <div className="w-full bg-white/80 backdrop-blur border-b border-orange-200">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="text-slate-800 font-semibold tracking-wide">
          V Films
        </Link>
        {/* Right side left empty because the menu button is provided by TopQuickNav */}
        <span className="inline-block w-5 h-5" />
      </div>
    </div>
  );
}

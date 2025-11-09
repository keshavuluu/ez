import React from "react";
import Navbar from "../components/Navbar";
export default function NavPreview(){
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_center,_#fde7db_1px,_#fff6f0_1px)] [background-size:8px_8px]">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10 text-slate-600">
        <p>This page is for reviewing the navbar only.</p>
      </div>
    </div>
  );
}
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import barImg from "../images/Scroll.png";

const routeOrder = [
  "/",
  "/services",
  "/about-team",
  "/their-stories",
  "/our-story",
  "/varnan",
  "/contact"
];

export default function BottomPager(){
  const location = useLocation();
  const navigate = useNavigate();
  const idx = routeOrder.indexOf(location.pathname);
  const nextPath = routeOrder[(idx >= 0 ? idx + 1 : 1) % routeOrder.length];
  const prevPath = routeOrder[(idx > 0 ? idx - 1 : routeOrder.length - 1)];

  const onClick = () => navigate(nextPath);

  // drag handling
  const startRef = React.useRef(null);
  const draggedRef = React.useRef(false);
  const handleDown = (e)=>{
    startRef.current = (e.touches? e.touches[0].clientX : e.clientX);
    draggedRef.current = false;
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove, {passive:false});
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);
  };
  const handleMove = (e)=>{
    const x = (e.touches? e.touches[0].clientX : e.clientX);
    const dx = x - startRef.current;
    if(Math.abs(dx) > 60){
      draggedRef.current = true;
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
      navigate(dx > 0 ? prevPath : nextPath);
    }
  };
  const handleUp = ()=>{
    window.removeEventListener('mousemove', handleMove);
    window.removeEventListener('touchmove', handleMove);
    window.removeEventListener('mouseup', handleUp);
    window.removeEventListener('touchend', handleUp);
  };

  return (
    <button
      aria-label="Next page"
      onClick={()=>{ if(!draggedRef.current) onClick(); draggedRef.current=false; }}
      onMouseDown={handleDown}
      onTouchStart={handleDown}
      className="fixed left-1/2 -translate-x-1/2 bottom-2 md:bottom-3 z-[55] focus:outline-none"
    >
      <img src={barImg} alt="page scroller" className="h-6 md:h-7 w-auto select-none" />
    </button>
  );
}

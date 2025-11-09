import React, { useEffect, useState } from "react";
import scrollImg from "../images/Scroll.png";
import backImg from "../images/Back.png";

export default function ScrollControl(){
  const [atBottom, setAtBottom] = useState(false);

  useEffect(()=>{
    const onScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      setAtBottom(nearBottom);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  },[]);

  const handleClick = () => {
    const target = atBottom ? 0 : document.body.scrollHeight;
    window.scrollTo({ top: target, behavior: 'smooth' });
  };

  return (
    <button
      aria-label={atBottom ? 'Scroll to top' : 'Scroll to bottom'}
      onClick={handleClick}
      className="fixed right-4 bottom-4 z-[60] rounded-full shadow hover:scale-105 transition"
    >
      <img src={atBottom ? backImg : scrollImg} alt="scroll" className="w-10 h-10" />
    </button>
  );
}

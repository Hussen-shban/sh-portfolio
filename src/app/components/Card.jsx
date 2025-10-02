"use client"

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const Card = ({img}) => {

  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 40,
        speed: 600,
        scale:1.2,
        glare: true,
        "max-glare": 0.5,
        gyroscope: true 
      });
    }
  }, []);

  return (
    <div ref={tiltRef} className='p-10 max-sm:p-5 bg-[#ffffff1e]  w-fit rounded-2xl'>
        <img className="max-sm:w-10" src={img} alt="" />
    </div>
  )
}

export default Card
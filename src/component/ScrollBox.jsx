import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ServiceSection from "./ServiceSection";

gsap.registerPlugin(ScrollTrigger);

const ScrollBox = () => {
  const containerRef = useRef(null);
  const boxRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(boxRef.current, {
        scale: 0,
      },
        {
        duration: 0.5,
        scale: -20,
        ease: "circ.inOut",
        scrollTrigger: {
          trigger: boxRef.current,
          toggleActions:"restart none none none",
          scrub: true,
        },
      },[{scope: '.containerOverflow'}]);
      gsap.fromTo(textRef.current, { 
        y: 0, 
      },   // Initial state
        { 
          y: -20, 
          duration: 0.5, 
          opacity: 1, 
          ease: "back.in" 
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div>
      <h1 ref={textRef} className="text-5xl font-bold text-center my-30">
        GSAP ScrollTrigger
      </h1>

      <div className="h-screen w-full bg-gray-100 flex justify-center items-center">
        <div className="w-40 h-40 bg-black rounded-lg"></div>
      </div>

      <div
        ref={containerRef}
        className="h-screen overflow-hidden containerOverflow w-full flex justify-center items-center"
      >
        <div
          ref={boxRef}
          className="w-40 overflow-hidden h-40 bg-blue-800 rounded-lg"
        ></div>
      </div>
      {/* Service Section */}
      <div>
        <ServiceSection></ServiceSection>
      </div>

      <div className="h-screen w-full bg-gray-500 flex justify-center items-center">
        <div className="w-40 h-40 bg-red-500 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ScrollBox;

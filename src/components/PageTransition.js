import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

function PageTransition({ children }) {
  const location = useLocation();
  const wrapperRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      if (barRef.current) {
        gsap.fromTo(
          barRef.current,
          { scaleX: 0, opacity: 1, transformOrigin: "left center" },
          {
            scaleX: 1,
            opacity: 0,
            duration: 0.65,
            ease: "power2.out",
          }
        );
      }

      if (wrapperRef.current) {
        gsap.fromTo(
          wrapperRef.current,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
            clearProps: "transform",
          }
        );
      }
    });

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <>
      <div
        ref={barRef}
        className="route-transition-hairline"
        aria-hidden="true"
      />
      <div ref={wrapperRef} className="route-transition-stage">
        {children}
      </div>
    </>
  );
}

export default PageTransition;


import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import "./full-navbar.css";
import { gsap } from "gsap";

const FullNavbar = () => {
  // store the timeline in a ref.
  const tl = useRef();
  const [reversed, setReversed] = useState(true);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      console.log("creating timeline");
      tl.current && tl.current.progress(0).kill();
      tl.current = gsap
        .timeline()
        .to(
          ".fullpage-menu",
          {
            duration: 0,
            display: "block",
            ease: "Expo.easeInOut",
          },
          "<"
        )
        .to(
          ".menu-bg",
          {
            duration: 1,
            opacity: 1,
            ease: "Expo.easeInOut",
          },
          "<"
        )
        .from(
          ".main-menu li a",
          {
            duration: 1.5,
            y: "100%",
            rotateY: 30,
            stagger: 0.2,
            ease: "Elastic.easeOut",
          },
          "-=0.5"
        );
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    console.log("toggling reverse to", reversed);
    tl.current.reversed(reversed);
  }, [reversed]);

  return (
    <div>
      <header>
        <div className="header-row">
          <button
            className="menu-toggle"
            id="menuToggle"
            onClick={() => {
              setReversed(!reversed);
            }}
          >
            <svg
              viewBox="0 0 12 10"
              className="hamburger"
              height="40px"
              width="40px"
            >
              <path d="M10,2 L2,2" className="bar-1"></path>
              <path d="M2,5 L10,5" className="bar-2"></path>
              <path d="M10,8 L2,8" className="bar-3"></path>
            </svg>
          </button>
        </div>
      </header>

      <section className="fullpage-menu">
        <div className="fullpage-menu-inner">
          <div className="menu-bg"></div>
          <nav>
            <ul className="main-menu">
              <li>
                <a href=" ">
                  <span data-clip="Home">Home</span>
                </a>
              </li>
              <li>
                <a href=" ">
                  <span data-clip="About">About</span>
                </a>
              </li>
              <li>
                <a href=" ">
                  <span data-clip="Work">Work</span>
                </a>
              </li>
              <li>
                <a href=" ">
                  <span data-clip="Contact">Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* <section className="cover-img"></section> */}
    </div>
  );
};

export default FullNavbar;

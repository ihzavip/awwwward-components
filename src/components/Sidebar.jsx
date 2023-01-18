import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import "./sidebar.css";
import { gsap } from "gsap";
const Sidebar = () => {
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
            duration: 1,
            x: 0,
            ease: "Expo.easeInOut",
          },
          "<"
        )
        .from(
          ".main-menu li a",
          {
            duration: 1.5,
            x: "-300%",
            // rotateY: 200,
            stagger: 0.2,
            ease: "Expo.easeOut",
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
    <>
      <header className="relative w-20 h-screen border-r-[1px]">
        <div className="flex items-center justify-center bg-black flex-col h-full w-full">
          <button
            onClick={() => {
              setReversed(!reversed);
            }}
            type="button"
            className="absolute flex items-center left-0 justify-center p-2 w-full top-0 border-b-[1px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
              className="w-12 h-12"
            >
              <path
                fillRule="evenodd"
                d="M2 6.75A.75.75 0 012.75 6h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 6.75zm0 6.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <h2 className="vertical-text text-white">
            kontol cemana ini cara buatnya
          </h2>
        </div>
      </header>

      <section className="fullpage-menu absolute block -translate-x-[400%] left-0 bg-red-900 top-0 w-screen h-screen ">
        <div className="flex items-center justify-center h-full px-24 py-14">
          <nav className="relative z-1 text-center">
            <ul className="main-menu w-screen">
              <li>
                <a href=" ">
                  <span className="link-letters" data-clip="Home">
                    Home
                  </span>
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
    </>
  );
};

export default Sidebar;

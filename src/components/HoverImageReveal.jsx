import React, { useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import "./styles/hover-image-reveal.css";

const HoverImageReveal = () => {
  const cursor = useRef(null);
  // const cursorMedias = useRef(null);
  // const navLinks = useRef(null);


  return (
    <>
      <div ref={cursor} className="cursor">
        <img
          src=" https://images.unsplash.com/photo-1646303746488-3927e8bf81a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="cursor__media"
        />
        <img
          src=" https://images.unsplash.com/photo-1646303746488-3927e8bf81a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="cursor__media"
        />
        <img
          src=" https://images.unsplash.com/photo-1646303746488-3927e8bf81a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="cursor__media"
        />
      </div>
      <nav className="nav">
        <a href="#" className="nav__link">
          Studio
        </a>
        <a href="#" className="nav__link">
          Showcase
        </a>
        <a href="#" className="nav__link">
          Contact
        </a>
      </nav>
    </>
  );
};

export default HoverImageReveal;

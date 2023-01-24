import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const MyComponent = () => {
  const ringRef = useRef(null);
  let xPos = 0;

  useEffect(() => {
    const images = ringRef.current.querySelectorAll(".img");

    gsap
      .timeline()
      .set(ringRef.current, { rotationY: 180, cursor: "grab" })
      .set(images, {
        rotateY: (i) => i * -36,
        transformOrigin: "50% 50% 500px",
        z: -500,
        backgroundImage: (i) =>
          "url(https://picsum.photos/id/" + (i + 32) + "/600/400/)",
        backgroundPosition: (i) => getBgPos(i),
        backfaceVisibility: "hidden",
      })
      .from(images, {
        duration: 1.5,
        y: 200,
        opacity: 0,
        stagger: 0.1,
        ease: "expo",
      })
      .add(() => {
        images.forEach((image) => {
          image.addEventListener("mouseenter", (e) => {
            let current = e.currentTarget;
            gsap.to(images, {
              opacity: (i, t) => (t == current ? 1 : 0.5),
              ease: "power3",
            });
          });
          image.addEventListener("mouseleave", (e) => {
            gsap.to(images, { opacity: 1, ease: "power2.inOut" });
          });
        });
      }, "-=0.5");

    window.addEventListener("mousedown", dragStart);
    window.addEventListener("touchstart", dragStart);
    window.addEventListener("mouseup", dragEnd);
    window.addEventListener("touchend", dragEnd);

    return () => {
      window.removeEventListener("mousedown", dragStart);
      window.removeEventListener("touchstart", dragStart);
      window.removeEventListener("mouseup", dragEnd);
      window.removeEventListener("touchend", dragEnd);
    };
  }, []);

  function dragStart(e) {
    if (e.touches) e.clientX = e.touches[0].clientX;
    xPos = Math.round(e.clientX);
    gsap.set(ringRef.current, { cursor: "grabbing" });
    window.addEventListener("mousemove", drag);
    window.addEventListener("touchmove", drag);
  }

  function drag(e) {
    if (e.touches) e.clientX = e.touches[0].clientX;

    gsap.to(ringRef.current, {
      rotationY: "-=" + ((Math.round(e.clientX) - xPos) % 360),
      onUpdate: () => {
        gsap.set(".img", { backgroundPosition: (i) => getBgPos(i) });
      },
    });
    return (
      <div class="stage">
        <div class="container">
          <div class="ring">
            <div class="img"></div>
            <div class="img"></div>
            <div class="img"></div>
            <div class="img"></div>
            <div class="img"></div>
            <div class="img"></div>
            <div class="img"></div>
            <div class="img"></div>
            <div class="img"></div>
            <div class="img"></div>
          </div>
        </div>
      </div>
    );
  }
};

export default MyComponent;

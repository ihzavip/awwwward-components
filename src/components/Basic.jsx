import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const Basic = () => {
  const app = useRef();
  const circle = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.to(".box", { rotation: 360, repeat: 1 });
      gsap.to(circle.current, { rotation: 180, repeat: 4 });
    }, app);

    return () => ctx.revert();
  }, []);
  return (
    <div
      className="flex items-center justify-center h-screen w-full gap-5"
      ref={app}
    >
      <div className="box w-12 h-12 bg-blue-900">selector</div>
      <div className="circle box w-12 h-12 bg-green-900" ref={circle}>
        Ref
      </div>
    </div>
  );
};

export default Basic;

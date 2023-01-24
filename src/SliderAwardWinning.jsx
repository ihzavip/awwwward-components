import { useEffect, useState, useRef } from "react";
import "./components/SliderAwardWinning.css";

export default function ImageTrack() {
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const track = useRef();

  const handleOnDown = (e) => setMouseDownAt(e.clientX);

  const handleOnUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  };

  const handleOnMove = (e) => {
    if (mouseDownAt === 0) return;

    const mouseDelta = mouseDownAt - e.clientX,
      maxDelta = window.innerWidth / 2;

    const nextPercentage = Math.max(
      Math.min(prevPercentage + (mouseDelta / maxDelta) * -100, 0),
      -100
    );

    setPercentage(nextPercentage);
    track.current.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );
    for (const image of track.current.getElementsByClassName("image")) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("touchstart", (e) => handleOnDown(e.touches[0]));
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("touchend", (e) => handleOnUp(e.touches[0]));
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));

    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("touchstart", (e) =>
        handleOnDown(e.touches[0])
      );
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("touchend", (e) => handleOnUp(e.touches[0]));
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchmove", (e) =>
        handleOnMove(e.touches[0])
      );
    };
  }, []);

  return (
    <div
      id="image-track"
      ref={track}
      data-mouse-down-at={mouseDownAt}
      data-prev-percentage={prevPercentage}
      data-percentage={percentage}
    >
      <img
        className="image"
        src="https://images.unsplash.com/photo-1548197253-652ffe79752c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLW"
        alt="ho"
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1548197253-652ffe79752c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLW"
        alt="ho"
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1548197253-652ffe79752c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLW"
        alt="ho"
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1548197253-652ffe79752c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLW"
        alt="ho"
      />
      <img
        className="image"
        src="https://images.unsplash.com/photo-1548197253-652ffe79752c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLW"
        alt="ho"
      />
    </div>
  );
}

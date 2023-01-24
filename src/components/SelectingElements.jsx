import React, { useRef } from "react";

const SelectingElements = () => {
  const myRef = useRef(null);

  const handleClick = () => {
    myRef.current.classList.add("kontol");
    console.log(myRef.current.classList);
  };
  return (
    <div id="hot">
      <div ref={myRef} className="my-class">
        This is my element
      </div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default SelectingElements;

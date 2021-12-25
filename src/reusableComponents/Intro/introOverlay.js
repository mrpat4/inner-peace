import React from "react";
import s from "./style";

const IntroOverlay = ({ introRef, bgColor }) => {
  console.log({ introRef });
  return (
    <>
      <s.Div_overlay ref={introRef} bgColor={bgColor}>
        <div className="top">
          <div className="overlay-top" style={{ background: "#fce130" }}></div>
          <div className="overlay-top" style={{ background: "#fce130" }}></div>
          <div className="overlay-top" style={{ background: "#fce130" }}></div>
          {/* <div className="overlay-top" style={{ background: bgColor ? bgColor : "#fce130" }}></div>
          <div className="overlay-top" style={{ background: bgColor ? bgColor : "#fce130" }}></div>
          <div className="overlay-top" style={{ background: bgColor ? bgColor : "#fce130" }}></div> */}
        </div>
        {/* <div className='bottom'>
          <div className='overlay-bottom'></div>
          <div className='overlay-bottom'></div>
          <div className='overlay-bottom'></div>
        </div> */}
      </s.Div_overlay>
    </>
  );
};

export default IntroOverlay;

import Main from "components/homeComponents/Main";
import IntroOverlay from "reusableComponents/Intro/introOverlay";
import { useEffect, useLayoutEffect, useRef } from "react";
import { animateExit } from "utils/animation";
import { mainAnimations } from "utils/gsapAnimations/mainAnimations";
import s from "./style";
import OutroOverlay from "reusableComponents/Outro/outroOverlay";

function MainContainer({ clickedNavState }) {
  // ----------------------- refs
  let tl = useRef();
  let introRef = useRef(null);
  let h1Ref = useRef(null);
  let leftLineRef = useRef(null);
  let rightLineRef = useRef(null);
  let outroRef = useRef(null);
  // ----------------------------------- animations
  useLayoutEffect(() => {
    mainAnimations({ ...{ tl, introRef, h1Ref, leftLineRef, rightLineRef, outroRef } });
  }, []);
  // -----------------------------------------------------------------------------------------------------------------------------------------
  // this useEffect fires when user want to exit the page,in that time this function is fired and remove dontShowAnimation from localStorage,
  // so that the next time user came to site he or she can see the animation from beginning.
  // useEffect(() => {
  //   const unloadCallback = (event) => {
  //     event.preventDefault();
  //     localStorage.removeItem("dontShowAnimation");
  //     event.returnValue = "";
  //     return "";
  //   };

  //   window.addEventListener("beforeunload", unloadCallback);
  //   return () => window.removeEventListener("beforeunload", unloadCallback);
  // }, []);

  // ------------------ return ------------------------------------------------------
  return (
    <>
      {/* {animationComplete === false ? <IntroOverlay ref={introRef} /> : ""} */}
      <IntroOverlay introRef={introRef} bgColor="#66c5e3" />
      <Main h1Ref={h1Ref} leftRef={leftLineRef} rightRef={rightLineRef} />
      {/* <s.Div_animation variants={animateExit} initial="hidden" exit="exit" className="animateIt"></s.Div_animation> */}
      <OutroOverlay outroRef={outroRef} />
    </>
  );
}

export default MainContainer;

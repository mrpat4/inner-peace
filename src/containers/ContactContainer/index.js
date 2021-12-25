import ContactComponent from "components/contactComponent";
import { useEffect, useLayoutEffect, useRef } from "react";
import IntroOverlay from "reusableComponents/Intro/introOverlay";
import OutroOverlay from "reusableComponents/Outro/outroOverlay";
import { ContactAnimations } from "utils/gsapAnimations/contactAnimations";

function ContactContainer({ clickedNavState }) {
  // ----------------------- refs
  let tl = useRef();
  let introRef = useRef(null);
  let outroRef = useRef(null);
  // ----------------------------------- animations
  useLayoutEffect(() => {
    ContactAnimations({ ...{ tl, introRef, outroRef } });
  }, []);
  // -----------------------------------------------------------------------------------------------------------------------------------------
  // this useEffect fires when user want to exit the page,in that time this function is fired and remove dontShowAnimation from localStorage,
  // so that the next time user came to site he or she can see the animation from beginning.
  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      localStorage.removeItem("dontShowAnimation");
      event.returnValue = "";
      return "";
    };
    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  // ------------------ return ------------------------------------------------------
  return (
    <>
      {/* <div style={{ position: "absolute", top: "0", width: "100%", height: "100%", background: "#000", zIndex: "99" }}></div> */}
      <IntroOverlay introRef={introRef} bgColor="#66c5e3" />
      <ContactComponent />
      <OutroOverlay outroRef={outroRef} />
    </>
  );
}

export default ContactContainer;

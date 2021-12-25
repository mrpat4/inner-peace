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

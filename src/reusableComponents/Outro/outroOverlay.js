import { motion } from "framer-motion";
import useWindowDimensions from "utils/GetWindowDimensions";
// import React from "react";
import s from "./style";

const OutroOverlay = ({ outroRef }) => {
  const { height, width } = useWindowDimensions();
  const container = {
    hidden: { zIndex: -2 },
    show: { zIndex: -2 },
    exit: {
      zIndex: 100,
      transition: {
        when: "beforeChildren",
        duration: 1,
        staggerChildren: 0.4,
        type: "spring",
        delay: width <= 768 ? 0.4 : "",

        // stiffness: 10,
      },
    },
  };

  const item = {
    hidden: { height: 0, zIndex: -2 },
    show: { height: 0, zIndex: -2 },
    exit: {
      height: "100%",
      zIndex: 100,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 50,
        // delay: width <= 768 ? 0.4 : "",
      },
    },
  };

  console.log({ width });
  return (
    <>
      <s.Div_overlay ref={outroRef}>
        <motion.div
          className="outro-top"
          variants={container}
          initial="hidden"
          exit="exit"
          show="show"
        >
          <motion.div className="overlay-top" variants={item}></motion.div>
          <motion.div className="overlay-top" variants={item}></motion.div>
          <motion.div className="overlay-top" variants={item}></motion.div>
        </motion.div>
        {/* <div className='bottom'>
          <div className='overlay-bottom'></div>
          <div className='overlay-bottom'></div>
          <div className='overlay-bottom'></div>
        </div> */}
      </s.Div_overlay>
    </>
  );
};

export default OutroOverlay;

import { motion } from "framer-motion";
// import React from "react";
import s from "./style";

const OutroOverlay = ({ outroRef }) => {
  const container = {
    hidden: { zIndex: -2 },
    show: { zIndex: -2 },
    exit: {
      zIndex: 100,
      transition: {
        duration: 1.6,
        staggerChildren: 0.4,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const item = {
    show: { height: 0, zIndex: -2 },
    hidden: { height: 0, zIndex: -2 },
    exit: {
      height: "100%",
      zIndex: 100,
      transition: {
        duration: 1.6,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // console.log({ outro });
  return (
    <>
      <s.Div_overlay ref={outroRef}>
        <motion.div className="outro-top" variants={container} initial="hidden" exit="exit" show="show">
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

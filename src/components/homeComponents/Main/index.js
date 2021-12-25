import { motion } from "framer-motion";
import { animateComponentExit } from "utils/animation";
import s from "./style";

function Main({ h1Ref, rightRef, leftRef }) {
  const container = {
    hidden: {},
    exit: {
      y: -50,
      transition: {
        duration: 1,
        delay: 0.4,
        type: "spring",
        stiffness: 100,
      },
    },
  };
  return (
    <>
      <s.Wrapper className="main-wrapper">
        <s.Text_wrapper>
          <motion.h1 className="hello" ref={h1Ref} variants={container} exit="exit">
            <span className="left" ref={leftRef}></span>
            HELLO
            <span className="right" ref={rightRef}></span>
          </motion.h1>
        </s.Text_wrapper>
      </s.Wrapper>
    </>
  );
}

export default Main;

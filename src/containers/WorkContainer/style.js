import { motion } from "framer-motion";
import styled from "styled-components";

const style = {
  Div_animation: styled(motion.div)`
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
  `,
};

export default style;

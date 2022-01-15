import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { devices } from "styles/queries";

const breatheAnimation = keyframes`
 0% { background-color:#55a6bf}
 10%{background-color:#fabe2c }
 20%{background-color:#55bf71 }
 30% {  background-color:#3c83c1 }
 40% { background-color:#31439f }
 50% { background-color:#b5ae58 }
 60% { background-color:#bd4bae }
 70% { background-color:#55a6bf }

`;

const styles = {
  Wrapper: styled.div`
    background-color: ${({ theme }) => theme.colors.blackPrimary};
    color: ${({ theme }) => theme.colors.white};
    padding: 2rem 4rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${devices.tablet} {
      padding: 2rem;
    }
  `,

  Text_wrapper: styled.div`
    width: 100%;
    /* height: 250px; */
    overflow: hidden;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: ${({ theme }) => theme.rems.pxToRem(100)};
      /* margin-bottom: ${({ theme }) => theme.rems.pxToRem(100)}; */
      text-align: center;
      position: relative;
      .left {
        width: 100px;
        height: 5px;
        background-color: ${({ theme }) => theme.colors.white};
        position: absolute;
        top: -20px;
        left: 0;
        /* transform: translateX(-40%); */
      }
      .right {
        width: 100px;
        height: 5px;
        background-color: ${({ theme }) => theme.colors.white};
        position: absolute;
        bottom: -20px;
        right: 0;
        /* transform: translateX(-33%); */
      }
    }
    @media ${devices.tablet} {
      height: 160px;
      h1 {
        font-size: ${({ theme }) => theme.rems.pxToRem(60)};
        .left,
        .right {
          height: 3px;
          width: 50px;
        }
      }
    }
  `,
  Div_animation: styled(motion.div)`
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: -2;
  `,
};

export default styles;

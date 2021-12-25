import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

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
  `,
  Div_left_side: styled.div`
    width: 80%;
    h1 {
      font-size: ${({ theme }) => theme.rems.pxToRem(60)};
      margin-bottom: ${({ theme }) => theme.rems.pxToRem(100)};
    }
    p {
      font-size: ${({ theme }) => theme.rems.pxToRem(20)};
      position: relative;
      max-width: 70%;
      &:before {
        content: "";
        width: 30px;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.black};
        position: absolute;
        top: -10px;
        left: 0;
      }
    }
  `,
  Div_right_side: styled.div`
    width: 20%;
    margin-right: auto;
    img {
      width: 100%;
      margin-right: auto;
      display: block;
      border-radius: 50%;
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

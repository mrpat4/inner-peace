import styled, { css, keyframes } from "styled-components";
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
 80% { background-color:#bf5555 }
 /* 90% { background-color:# }
 100% { background-color:# } */
`;
const styles = {
  Nav: styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: ${({ theme }) => theme.colors.black}; */
    color: ${({ theme }) => theme.colors.grayNav};
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 90;
    padding: 2rem 4rem;
    @media ${devices.tablet} {
      padding: 2rem;
    }
  `,
  Div_left: styled.div`
    color: ${({ theme }) => theme.colors.navigation};
    font-size: ${({ theme }) => theme.rems.pxToRem(13)};
    user-select: none;
    p {
      height: 19px;
      overflow: hidden;
    }
  `,
  Ul_right: styled.ul`
    display: flex;
    justify-content: space-between;
    width: 35%;
    font-size: ${({ theme }) => theme.rems.pxToRem(11)};
    @media ${devices.tablet} {
      display: none;
    }
  `,

  Li: styled.li`
    height: 19px;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.grayLight};

    svg {
      fill: ${({ theme }) => theme.colors.grayLight};
    }
  `,
  Div_hamburger: styled.div`
    display: none;
    @media ${devices.tablet} {
      display: block;
    }
    svg {
      fill: ${({ theme }) => theme.colors.grayLight};
      width: 20px;
      height: 20px;
    }
  `,
  Ul_right_mobile: styled.ul`
    position: fixed;
    height: 100vh;
    right: 0;
    top: 0;
    bottom: 0;
    width: 50%;
    background-color: ${({ theme }) => theme.colors.yellow};
    z-index: 111;
    /* padding: 5rem; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${({ menu }) =>
      menu
        ? css`
            transform: translateX(0);
            transition: 0.4s ease-out;
            li {
              opacity: 1;
              transition: opacity 0.3s ease-in-out 0.3s;
            }
          `
        : css`
            transform: translateX(100%);
            transition: 0.4s ease-in 0.2s;
            li {
              opacity: 0;
              transition: opacity 0.3s ease-in-out;
            }
          `}
    @media ${devices.mobileL} {
      width: 100%;
    }
    li {
      margin: 2.5rem 0;
      color: ${({ theme }) => theme.colors.blackPrimary};
      width: 100%;
      position: relative;
      &:after {
        content: "";
        height: 1px;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.yellow};
        filter: brightness(90%);
        position: absolute;
        top: -40px;
      }

      &:last-child {
        &:before {
          content: "";
          height: 1px;
          width: 100%;
          background-color: ${({ theme }) => theme.colors.yellow};
          filter: brightness(90%);
          position: absolute;
          bottom: -40px;
        }
      }

      a {
        width: 100%;
        text-align: center;
      }
      svg {
        fill: ${({ theme }) => theme.colors.blackPrimary};
      }
    }
    .close-menu-btn {
      position: absolute;
      top: 1rem;
      left: 1rem;
      margin: 0;
      svg {
        fill: ${({ theme }) => theme.colors.blackPrimary};
        width: 20px;
        height: 20px;
      }
    }
  `,
  Overlay: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 104;
    backdrop-filter: blur(2px);
    ${({ show }) =>
      show
        ? css`
      opacity:1,
      pointer-events: all;
      transition:0.3s ease-out;
      `
        : css`
            opacity: 0;
            pointer-events: none;
            transition: 0.3s ease-out 0.5s;
          `}
  `,
  About_wrapper: styled.div`
    position: fixed;
    /* top: 0; */
    right: 0;
    bottom: 0;
    width: 0;
    height: calc(100% - 85px);
    background-color: ${({ theme }) => theme.colors.backgroundYellow};
    color: ${({ theme }) => theme.colors.white};
    overflow: hidden;
    transition: all 0.4s ease-in;
    z-index: 110;
    &.show-about {
      width: 100%;
      transition: all 0.7s ease-out 0.2s;
    }
  `,
};

export default styles;

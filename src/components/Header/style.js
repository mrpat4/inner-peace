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
  `,
  Div_left: styled.div`
    padding: 2rem 4rem;
    color: ${({ theme }) => theme.colors.yellow};
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
    padding: 2rem 4rem;
    width: 35%;
    font-size: ${({ theme }) => theme.rems.pxToRem(11)};
  `,

  Li: styled.li`
    height: 19px;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.grayLight};
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

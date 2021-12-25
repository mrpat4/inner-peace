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
  `,
};

export default styles;

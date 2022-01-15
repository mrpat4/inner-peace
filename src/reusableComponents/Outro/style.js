import { devices } from "styles/queries";

const { default: styled } = require("styled-components");

// intro overlay
const style = {
  Div_overlay: styled.div`
    .outro-top {
      height: 100%;
      /* height: calc(var(--vh, 1vh) * 50); */
      padding: 2rem 4rem;
      position: absolute;
      width: 100%;
      top: 0;
      z-index: 100;
      .overlay-top {
        position: absolute;
        height: 0;
        width: 33.333vw;
        background: ${({ theme }) => theme.colors.yellow};
        bottom: 0;
        right: 0;
        left: 0;

        &:nth-child(2) {
          left: 33.333%;
        }
        &:nth-child(1) {
          left: 66.666%;
        }
        @media ${devices.mobileL} {
          &:nth-child(3) {
            display: none;
          }
          &:nth-child(2) {
            display: none;
          }
          &:nth-child(1) {
            left: 0;
            width: 100vw;
          }
        }
      }
    }
  `,
};

export default style;

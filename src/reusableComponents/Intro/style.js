import { devices } from "styles/queries";

const { default: styled } = require("styled-components");

// intro overlay
const style = {
  Div_overlay: styled.div`
    .top {
      height: 100%;
      /* height: calc(var(--vh, 1vh) * 50); */
      padding: 2rem 4rem;
      position: absolute;
      width: 100%;
      z-index: 100;
      .overlay-top {
        position: absolute;
        height: 100%;
        width: 33.333vw;
        /* background: #ededed; */
        bottom: 0;
        left: 0;
        right: 0;
        background: ${({ theme }) => theme.colors.yellow};

        &:nth-child(2) {
          left: 33.333%;
        }
        &:nth-child(3) {
          left: 66.666%;
        }
        @media ${devices.mobileL} {
          width: 100vw;
          &:nth-child(2) {
            display: none;
          }
          &:nth-child(3) {
            display: none;
          }
        }
      }
    }
  `,
};

export default style;

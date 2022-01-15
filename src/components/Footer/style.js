import styled from "styled-components";
import { devices } from "styles/queries";

const styles = {
  Footer: styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: absolute;
    bottom: 2rem;
    left: 0;
    z-index: 99;
  `,
  Div_left_side: styled.div`
    width: 50%;
    height: 100%;
  `,
  Div_right_side: styled.div`
    width: 50%;
    height: 100%;
    /* padding-bottom: 1rem; */
    display: flex;
    justify-content: flex-end;
    padding-right: 4rem;
    @media ${devices.tablet} {
      padding-right: 2rem;
    }
    ul {
      display: flex;
      align-items: flex-end;
      margin-left: auto;

      @media ${devices.mobileL} {
        &.hide-it {
          display: none;
        }
      }

      li {
        margin-left: 3rem;

        svg {
          width: 12px;
          fill: ${({ theme }) => theme.colors.grayLight};
        }
      }
    }
  `,
};

export default styles;

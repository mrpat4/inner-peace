import styled from "styled-components";
import { devices } from "styles/queries";

const styles = {
  Div_about: styled.div`
    padding: 2rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    position: relative;
    &.hide-content {
      opacity: 0;
    }
    @media ${devices.tablet} {
      flex-direction: column;
      justify-content: flex-start;
      padding: 2rem;
      overflow: auto;
    }
  `,
  Back_icon: styled.div`
    position: absolute;
    left: 2rem;
    top: 1rem;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      svg {
        transform: translateX(5px);
      }
    }
    svg {
      fill: ${({ theme }) => theme.colors.backgroundYellow};
      transition: ${({ theme }) => theme.transition.cubic};
    }
  `,
  Left_side: styled.div`
    width: 70%;
    transition: 0.1s ease-in-out;

    h3 {
      margin-top: 1.5rem;
      position: relative;
      &:before {
        content: "";
        width: 7px;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.yellow};
        position: absolute;
        left: -15px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    p {
      text-align: justify;
    }
    @media ${devices.tablet} {
      width: 95%;
      order: 2;
      margin-top: 1rem;
    }
  `,

  Title_wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 5rem;
    @media ${devices.tablet} {
      margin-bottom: 3rem;
    }

    @media ${devices.mobileM} {
      flex-direction: column;
      align-items: flex-start;
    }

    h1 {
      font-size: ${({ theme }) => theme.rems.pxToRem(30)};
    }

    .sk-btn {
      /* width: 100%; */
      // height: 38px;
      position: relative;
      display: inline-block;
      height: auto;
      background: none;
      margin: 0;
      outline: none;
      // padding      : 0.1rem 1.5rem;
      padding: 0;
      transition: opacity 0.2s;
      display: flex;
      justify-content: center;
      align-items: center;
      /* ${({ theme }) => `margin-${theme.withDIR.change("left")}:2rem`}; */
      margin-left: 2rem;
      font-size: ${({ theme }) => theme.rems.pxToRem(12)};
      background-color: ${({ theme }) => theme.colors.yellow};
      padding: 0.5rem 1rem;
      color: ${({ theme }) => theme.colors.blackPrimary};
      border-radius: 4px;

      @media ${devices.mobileM} {
        margin-left: 0;
        margin-top: 0.5rem;
      }

      &_wrapper {
        display: block;
        overflow: hidden;
        text-align: center;

        span {
          position: relative;
          display: block;
          padding: 2px 0;
          transition: transform 0.9s cubic-bezier(0.19, 1, 0.22, 1);
          transform-origin: left center;

          &:after {
            content: attr(data-text);
            display: block;
            position: absolute;
            top: 160%;
            transform: skewY(30deg);
            transform-origin: left center;
            transition: transform 0.9s cubic-bezier(0.19, 1, 0.22, 1);
          }
        }
      }

      &:hover {
        .sk-btn_wrapper {
          span {
            transform: translateY(-150%) skewY(7deg);

            &:after {
              transform: skewY(-7deg);
            }
          }
        }
      }
    }
  `,
  Right_side: styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin-bottom: 2rem;

      @media ${devices.tablet} {
        width: 170px;
        height: 170px;
      }
    }
  `,
};

export default styles;

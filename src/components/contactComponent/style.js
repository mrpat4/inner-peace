import styled, { keyframes } from "styled-components";
import { devices } from "styles/queries";

const styles = {
  Wrapper: styled.div`
    background-color: ${({ theme }) => theme.colors.blackPrimary};
    padding: 2rem 4rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    @media ${devices.tablet} {
      padding: 2rem;
      padding-top: 6rem;
      justify-content: flex-start;
    }
  `,
  Div_header_wrapper: styled.div`
    text-align: center;
    h1 {
      font-size: ${({ theme }) => theme.rems.pxToRem(50)};
      color: ${({ theme }) => theme.colors.white};
      @media ${devices.tablet} {
        font-size: ${({ theme }) => theme.rems.pxToRem(30)};
      }
    }
    p {
      font-size: ${({ theme }) => theme.rems.pxToRem(15)};
      max-width: 70%;
      margin: 0 auto;
      color: ${({ theme }) => theme.colors.grayLight};
      margin-top: 1rem;
      @media ${devices.tablet} {
        max-width: 90%;
        font-size: ${({ theme }) => theme.rems.pxToRem(12)};
      }
      @media ${devices.mobileS} {
        max-width: 98%;
      }
    }
  `,
  Div_social_wrapper: styled.div`
    margin-top: 8rem;
    width: 95%;
    @media ${devices.tablet} {
      margin-top: 4rem;
    }
    @media ${devices.mobileM} {
      margin-top: 2rem;
    }
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: ${({ theme }) => theme.colors.white};
      max-width: 80%;
      margin: 0 auto;

      @media ${devices.tablet} {
        flex-wrap: wrap;
        max-width: 90%;
      }

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .svg-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
            rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
          border-radius: 50%;
          background-color: ${({ theme }) => theme.colors.blackPrimary};
          width: 80px;
          height: 80px;
          transition: 350ms cubic-bezier(0.215, 0.61, 0.355, 1);

          svg {
            width: 35px;
            fill: ${({ theme }) => theme.colors.white};
            &.phone,
            &.mail {
              stroke: ${({ theme }) => theme.colors.white};
              fill: transparent;
            }
          }
        }
        &:not(:last-child) {
          ${({ theme }) => `margin-${theme.withDIR.change("right")}:5rem`}
          @media ${devices.tablet} {
            ${({ theme }) => `margin-${theme.withDIR.change("right")}:0rem`}
          }
        }

        &:nth-child(1) {
          &:hover {
            .svg-wrapper {
              background-color: #000;
              /* fill: #fff; */
              svg {
                fill: #fff;
              }
            }
          }
        }
        &:nth-child(2) {
          &:hover {
            .svg-wrapper {
              background-color: #0a66c2;
              /* fill: #fff; */
              svg {
                fill: #fff;
              }
            }
          }
        }
        &:nth-child(3) {
          &:hover {
            .svg-wrapper {
              background-color: #44c654;
              svg {
                fill: #fff;
              }
            }
          }
        }
        &:nth-child(4) {
          &:hover {
            .svg-wrapper {
              background-color: #b431b5;
              /* fill: #fff; */
              svg {
                fill: #fff;
              }
            }
          }
        }
        &:nth-child(5) {
          &:hover {
            .svg-wrapper {
              background-color: #e8443b;
              svg {
                stroke: #fff;
              }
            }
          }
        }
        .text-wrapper {
          text-align: center;
          text-transform: capitalize;
          margin-top: 1rem;
          p:nth-child(1) {
            font-weight: 500;
          }
          p:nth-child(2) {
            font-size: ${({ theme }) => theme.rems.pxToRem(12)};
            color: ${({ theme }) => theme.colors.grayLight};
          }
        }
        @media ${devices.tablet} {
          width: 30%;
          margin-top: 2rem;
          .svg-wrapper {
            width: 40px;
            height: 40px;
            transition: 350ms cubic-bezier(0.215, 0.61, 0.355, 1);

            svg {
              width: 20px;
            }
          }
          .text-wrapper {
            margin-top: 0.5rem;
            p:nth-child(1) {
              font-weight: 500;
              font-size: ${({ theme }) => theme.rems.pxToRem(12)};
            }
            p:nth-child(2) {
              font-size: ${({ theme }) => theme.rems.pxToRem(10)};
              color: ${({ theme }) => theme.colors.grayLight};
            }
          }
        }
        @media ${devices.mobileM} {
          width: 50%;
          .text-wrapper {
            p:nth-child(2) {
              display: none;
            }
          }
        }
      }
    }
  `,
};

export default styles;

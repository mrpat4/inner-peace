import styled, { keyframes } from "styled-components";

const styles = {
  Wrapper: styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 2rem 4rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
  Div_header_wrapper: styled.div`
    text-align: center;
    h1 {
      font-size: ${({ theme }) => theme.rems.pxToRem(50)};
    }
    p {
      font-size: ${({ theme }) => theme.rems.pxToRem(15)};
      max-width: 70%;
      margin: 0 auto;
      color: ${({ theme }) => theme.colors.grayMedium};
      margin-top: 1rem;
    }
  `,
  Div_social_wrapper: styled.div`
    margin-top: 8rem;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;

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
          box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
          border-radius: 50%;
          background-color: ${({ theme }) => theme.colors.white};
          width: 80px;
          height: 80px;
          transition: 350ms cubic-bezier(0.215, 0.61, 0.355, 1);

          svg {
            width: 35px;
            &.phone,
            &.mail {
              stroke: #000;
            }
          }
        }
        &:not(:last-child) {
          ${({ theme }) => `margin-${theme.withDIR.change("right")}:5rem`}
        }

        &:nth-child(1) {
          &:hover {
            .svg-wrapper {
              background-color: #000;
              fill: #fff;
            }
          }
        }
        &:nth-child(2) {
          &:hover {
            .svg-wrapper {
              background-color: #0a66c2;
              fill: #fff;
            }
          }
        }
        /* &:nth-child(3) {
          &:hover {
            .svg-wrapper {
              background-color: #94b9d3;
              svg {
                stroke: #fff !important;
              }
            }
          }
        } */
        &:nth-child(3) {
          &:hover {
            .svg-wrapper {
              background-color: #44c654;
              fill: #fff;
            }
          }
        }
        &:nth-child(4) {
          &:hover {
            .svg-wrapper {
              background-color: #b431b5;
              fill: #fff;
            }
          }
        }
        &:nth-child(5) {
          &:hover {
            .svg-wrapper {
              background-color: #e8443b;
              svg {
                stroke: #fff !important;
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
            color: ${({ theme }) => theme.colors.grayMedium};
          }
        }
      }
    }
  `,
};

export default styles;

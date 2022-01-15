import styled, { css } from "styled-components";
import { devices } from "styles/queries";

const styles = {
  Wrapper: styled.div`
    background-color: ${({ theme }) => theme.colors.blackPrimary};
    padding: 2rem 4rem;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${devices.tablet} {
      padding: 2rem;
    }
    @media ${devices.mobileL} {
      flex-wrap: wrap;
    }
    .slicker {
      width: 100%;

      .slick-list {
        height: 100%;
        border-radius: 7px;

        .slick-slide {
          opacity: 0;
          transition: 0.3s ease-in-out;
        }
        .slick-active {
          opacity: 1;
        }
      }

      .slick-dots {
        margin-top: 5rem;
        bottom: unset;
      }
      .inner-slider-wrapper {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        @media ${devices.tablet} {
          padding: 0;
        }
        .inner-slider-left-side {
          width: 100% !important;
          word-break: break-all;

          .bgAnimation {
            background: ${({ theme }) => theme.colors.backgroundYellow};
            /* width: 100% !important; */
            min-width: 100%;
            padding: 2rem;
            min-height: 300px;
            border-radius: 4px;
            @media ${devices.mobileL} {
              padding: 1rem;
            }
          }
          .title-wrapper {
            margin-bottom: ${({ theme }) => theme.rems.pxToRem(100)};
            display: flex;
            align-items: center;
            color: ${({ theme }) => theme.colors.white};
            h2 {
              font-size: ${({ theme }) => theme.rems.pxToRem(30)};
              color: ${({ theme }) => theme.colors.white};
              text-transform: capitalize;
            }
            a {
              /* padding: 0.5rem 1rem; */
              /* color: #fff; */

              &.disabled {
                background-color: ${({ theme }) => theme.colors.disable};
                pointer-events: none;
                color: #333;
              }
            }

            .sk-btn {
              /* width: 100%; */
              // height: 38px;
              position: relative;
              display: inline-block;
              background: none;
              margin: 0;
              outline: none;
              // padding      : 0.1rem 1.5rem;
              padding: 0;
              transition: opacity 0.2s;
              display: flex;
              justify-content: center;
              align-items: center;
              ${({ theme }) => `margin-${theme.withDIR.change("left")}:2rem`};
              font-size: ${({ theme }) => theme.rems.pxToRem(12)};
              background-color: ${({ theme }) => theme.colors.yellow};
              padding: 0.5rem 1rem;
              color: ${({ theme }) => theme.colors.blackPrimary};
              border-radius: 4px;

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
            @media ${devices.mobileL} {
              margin-bottom: 4.5rem;
              flex-direction: column;
              align-items: flex-start;

              h2 {
                font-size: ${({ theme }) => theme.rems.pxToRem(17)};
              }
              .sk-btn {
                margin-left: 0;
                margin-top: 0.5rem;
              }
            }
          }
          p {
            font-size: ${({ theme }) => theme.rems.pxToRem(15)};
            color: ${({ theme }) => theme.colors.grayDesc};
            position: relative;
            max-width: 60%;
            word-break: break-word;
            &:before {
              content: "";
              width: 30px;
              height: 2px;
              background-color: ${({ theme }) => theme.colors.yellow};
              position: absolute;
              top: -10px;
              left: 0;
            }
            @media ${devices.mobileL} {
              max-width: 95%;
            }
          }
        }
        .inner-slider-right-side {
          /* width: 100% !important; */
          position: relative;
          height: 400px;
          @media ${devices.tablet} {
            height: 250px;
          }

          &:hover {
            img {
              transform: scale(1.1);
            }
          }
          .work-image-wrapper {
            width: 400px;
            height: 400px;
            position: absolute;
            right: 60px;
            overflow: hidden;
            @media ${devices.tablet} {
              width: 250px;
              height: 250px;
              right: 10px;
            }
            @media ${devices.mobileL} {
              width: 105px;
              height: 105px;
              top: -15px;
            }
            @media ${devices.mobileS} {
              width: 90px;
              height: 90px;
              top: -18px;
            }
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: left top;
              transition: ${({ theme }) => theme.transition.cubic};
              cursor: pointer;
              border-radius: 4px;
            }
          }

          .slick-list {
            height: 100%;
            border-radius: 7px;

            .slick-slide {
              opacity: 1;
            }
            .slick-active {
              opacity: 1;
            }
          }
        }
      }
    }
  `,
  Modal: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.backgroundYellow};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
    transition: all 0.5s ease-out;
    z-index: 150;
    ${({ show }) =>
      show
        ? css`
            transform: translateY(0);
          `
        : css`
            pointer-events: none;
            transform: translateY(-100%);
          `};
  `,

  Modal_wrapper: styled.div`
    width: 70%;
    /* height: 75%; */
    background-color: ${({ theme }) => theme.colors.blackPrimary};
    border-radius: 7px;
    z-index: 150;
  `,

  Modal_header: styled.div`
    position: absolute;
    top: 1rem;
    left: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: 160;
    cursor: pointer;
    &:hover {
      svg {
        transform: rotate(180deg);
      }
    }

    .close-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 20px;
        height: 20px;
        stroke: ${({ theme }) => theme.colors.blackPrimary};
        transition: ${({ theme }) => theme.transition.cubic};
      }
    }
  `,

  Modal_texts: styled.div`
    position: absolute;
    left: 5.5rem;
    top: 1.7rem;
    font-size: ${({ theme }) => theme.rems.pxToRem(25)};
    color: ${({ theme }) => theme.colors.white};

    h3 {
      position: relative;
      &:after {
        content: "";
        width: 100%;
        height: 1px;
        position: absolute;
        left: 0;
        bottom: -5px;
        background-color: ${({ theme }) => theme.colors.white};
      }
    }
  `,

  Modal_content: styled.div`
    width: 100%;
    height: 100%;

    .slick-slider {
      height: 100%;
      border-radius: 7px;

      .slick-arrow.slick-prev {
        left: -100px !important;
      }
      .slick-arrow.slick-next {
        right: -100px !important;
      }
    }
    .slick-list {
      height: 100%;
      border-radius: 7px;
      .slick-slide {
        div {
          background-color: ${({ theme }) => theme.colors.backgroundYellow};
        }
      }
    }
    .slick-dots {
      bottom: 0;
    }
    img {
      width: 100%;
    }
  `,
  Footer: styled.footer`
    position: absolute;
    bottom: 2rem;
    left: 4rem;
    z-index: 100;
    @media ${devices.mobileL} {
      left: 2rem;
    }
    ul {
      /* display: flex;
      justify-content: center;
      align-items: center; */
      font-size: ${({ theme }) => theme.rems.pxToRem(13)};
      color: ${({ theme }) => theme.colors.white};
      max-width: 30vw;
      width: 100%;
      overflow: hidden;
      @media ${devices.tablet} {
        max-width: 50vw;
      }
      @media ${devices.mobileL} {
        max-width: 95vw;
      }

      li:not(:nth-child(1)) {
        /* margin-left: 1rem; */
        ${({ theme }) => `margin-${theme.withDIR.change("left")}:1rem`}
      }

      li {
        cursor: pointer;
        position: relative;
        transition: ${({ theme }) => theme.transition.cubic};
        text-transform: capitalize;
        &:hover {
          letter-spacing: 1px;
        }
        /* .left-border {
          position: absolute;
          left: -5px;
          top: -5px;
          width: 2px;
          height: 0;
          background-color: ${({ theme }) => theme.colors.yellow};
          transition: 350ms cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        .right-border {
          position: absolute;
          right: -5px;
          bottom: -5px;
          width: 2px;
          height: 0;
          background-color: ${({ theme }) => theme.colors.yellow};
          transition: 350ms cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        &:hover {
          .right-border {
            height: 100%;
          }
          .left-border {
            height: 100%;
          }
        }
        &:before {
          content: "";
          width: 0;
          height: 2px;
          background-color: ${({ theme }) => theme.colors.yellow};
          position: absolute;
          top: -5px;
          left: 0;
          transition: all 0.7s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        &:after {
          content: "";
          width: 0;
          height: 2px;
          background-color: ${({ theme }) => theme.colors.yellow};
          position: absolute;
          bottom: -5px;
          right: 0;
          transition: all 0.7s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        &.active {
          position: relative;
          &:before {
            width: 70%;
          }
          &:after {
            width: 70%;
          }
        } */
        &.active {
          color: ${({ theme }) => theme.colors.yellow};
        }
      }
    }
  `,
};

export default styles;

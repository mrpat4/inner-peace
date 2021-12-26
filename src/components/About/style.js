import styled from "styled-components";

const styles = {
  Div_about: styled.div`
    padding: 2rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    &.hide-content {
      opacity: 0;
    }
  `,
  Left_side: styled.div`
    width: 70%;
    transition: 0.1s ease-in-out;

    p {
      text-align: justify;
    }
  `,

  Title_wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 5rem;

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
  `,
  Right_side: styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 60%;
      height: 60%;
      border-radius: 50%;
      margin-bottom: 2rem;
    }
  `,
};

export default styles;

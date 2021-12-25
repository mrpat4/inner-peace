import styled from "styled-components";

const style = {
  Aside: styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    z-index: 105;

    .follow {
      transform: rotate(90deg);
      p {
        position: relative;
        &:after {
          content: "";
          width: 120px;
          height: 2px;
          position: absolute;
          left: 100%;
          top: 50%;
          background-color: ${({ theme }) => theme.colors.white};
          margin-left: 1.5rem;
        }
      }
    }

    ul {
      svg {
        fill: #fff;
        width: 15px;
        margin-top: 1rem;
      }
    }
  `,
  About_wrapper: styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    overflow: hidden;
    transition: all 0.4s ease-in;
    z-index: 110;
    &.show-about {
      width: 100%;
      transition: all 0.7s ease-out 0.8s;
    }
  `,
};
export default style;

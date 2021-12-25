import styled from "styled-components";

export default {
  Div_loading_container: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    color: ${({ theme }) => theme.colors.black02};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 200;
    z-index: 15;
    &:before {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      background-color: ${({ theme }) => theme.colors.black02};
      border-radius: 50%;
      margin-right: 1rem;
    }
  `,
};

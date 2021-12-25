import styled from "styled-components";

const styles = {
  Footer: styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 8vh;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 105;
  `,
  Div_left_side: styled.div`
    width: 50%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
  `,
  Div_right_side: styled.div`
    width: 50%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.black};
  `,
};

export default styles;

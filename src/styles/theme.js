import { changeWithDir } from "./helperFunctions";

const defaultTheme = {
  rems: {
    pxToRem: (px) => `${px / 16}rem`,
  },
  withDIR: {
    change: (direct) => changeWithDir(direct, "ltr"),
  },

  transition: {
    cubic: "350ms cubic-bezier(0.215, 0.61, 0.355, 1)",
  },

  direction: "ltr",
};

const dark = {
  colors: {
    // primary: "red",
    // secondary: "green",
    // texts: "#333",
    // hueOrange: "orange",
    primary: "#66c5e3",
    white: "#fff",
    black: "#151414",
    grayLight: "#c6c6c6",
    grayMedium: "#535353",
    grayNav: "#B0B0B0",
    blackPrimary: "#263238",
    darkGold: "#f9ba00",
    yellow: "#fce130",
    blue: "#5a9a93",
    backgroundYellow: "#3c4437",
  },
};
const light = {
  colors: {
    primary: "#66c5e3",
    white: "#333",
    black: "#151414",
    grayLight: "#838181",
    grayMedium: "#535353",
    grayNav: "#B0B0B0",
    blackPrimary: "#e8e2dc",
    darkGold: "#f9ba00",
    yellow: "#5a9a93",
    blue: "#5a9a93",
    backgroundYellow: "#abddd7",
  },
};
export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };

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
    primary: "#66c5e3",
    white: "#fff",
    black: "#151414",
    grayLight: "#c6c6c6",
    grayMedium: "#535353",
    grayNav: "#B0B0B0",
    grayDesc: "#c6c6c6",
    // blackPrimary: "#263238",
    blackPrimary: "#14181a",
    darkGold: "#f9ba00",
    // yellow: "#fce130",
    // yellow: "#247BA0",
    //yellow: "#f5dc80", //purple
    yellow: "#8980F5", //yellow
    blue: "#5a9a93",
    backgroundYellow: "#3e3a64",
    disable: "#a5a3bb",
    navigation: "#b0a9ff",
  },
};
const light = {
  colors: {
    primary: "#66c5e3",
    white: "#333",
    black: "#151414",
    grayLight: "#838181",
    grayDesc: "#262525",
    grayMedium: "#535353",
    grayNav: "#B0B0B0",
    blackPrimary: "#e8e2dc",
    darkGold: "#f9ba00",
    yellow: "#5a9a93",
    blue: "#5a9a93",
    backgroundYellow: "#abddd7",
    disable: "#c9c9c9",
    navigation: "#5a9a93",
  },
};
export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };

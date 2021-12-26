import { changeWithDir } from "./helperFunctions";

export default function Theme(direction) {
  let darkMode = true;
  return {
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
      backgroundYellow: "rgba(252,225,48,0.1)",
    },
    rems: {
      pxToRem: (px) => `${px / 16}rem`,
    },
    withDIR: {
      change: (direct) => changeWithDir(direct, direction),
    },

    transition: {
      cubic: "350ms cubic-bezier(0.215, 0.61, 0.355, 1)",
    },

    direction: direction || "ltr",
  };
}

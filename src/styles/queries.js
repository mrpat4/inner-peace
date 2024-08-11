const sizes = {
  mobileS: "325px",
  mobileM: "380px",
  mobileL: "430px",
  tablet: "774px",
  laptop: "1030px",
  laptopL: "1450px",
  desktop: "2570px",
};

export const devices = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`,
};

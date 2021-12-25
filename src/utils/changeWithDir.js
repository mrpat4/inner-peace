const changeWithDir = (defaultValue, direction) => {
  console.log({ direction });
  if (direction === "ltr") {
    return defaultValue;
  } else {
    return defaultValue === "left" ? "right" : "left";
  }
};

export default changeWithDir;

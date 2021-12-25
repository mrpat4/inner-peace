// change the given size in px into rem;
// ***** EXAMPLE: font-size: ${rem(40)};
export const rem = (pxSize) => {
  let remNumber = pxSize / 16;
  return remNumber + "rem";
};

// set an element into square size
// ***** EXAMPLE:  ${square(20)};
export const square = (size) => {
  return `height:${size}px;width:${size}px`;
};

// form input placeholder for different engines
// ***** EXAMPLE: ${placeholder()`color:red;};
export const placeholder = () => {
  return (style) =>
    `
      &::-webkit-input-placeholder {
          { ${style} }
      }
      &:-moz-placeholder {
          { ${style} }
      }
      &::-moz-placeholder {
          { ${style} }
      }
      &:-ms-input-placeholder {
          { ${style} }
      }`;
};

// change left and right based on direction

// import it into theme like this :
// change: (direct) => changeWithDir(direct, direction)

// ***** EXAMPLE USAGE: ${({ theme }) => `padding-${theme.withDIR.change("right")}:10rem`};
export const changeWithDir = (defaultValue, direction) => {
  console.log({ direction });
  if (direction === "ltr") {
    return defaultValue;
  } else {
    return defaultValue === "left" ? "right" : "left";
  }
};

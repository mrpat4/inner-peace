export const animatePage = {
  hidden: {
    opacity: 0,
    y: 300,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
    },
  },
};
export const animateComponentExit = {
  hidden: {
    opacity: 0,
    x: 50,
    padding: "2rem 0",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.1 },
    padding: "2rem 0",
  },
  exit: {
    x: -50,
    transition: { duration: 0.75, delay: 0.2 },
  },
};
export const animateExit = {
  hidden: {
    y: "100%",
    zIndex: "-2",
  },
  exit: {
    y: 0,
    zIndex: 5,
    transition: {
      duration: 0.3,
      delay: 0.4,
    },
  },
};
export const animateHeader = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.5,
      delay: 0.4,
    },
  },
};

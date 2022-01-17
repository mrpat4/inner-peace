import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
const hasWindow = typeof window !== "undefined";

function getWindowDimensions() {
  //   const { innerWidth: width, innerHeight: height } = window;
  const width = hasWindow ? window.innerWidth : 34;
  const height = hasWindow ? window.innerHeight : 57;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

import React, { useEffect, useState } from "react";

type Props = {};

const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const setDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // this adds an event listener on the window object on mount
    window.addEventListener("resize", setDimensions);

    // this removes the previously attached event listener
    return () => {
      window.removeEventListener("resize", setDimensions);
    };
  }, []);

  return {
    width,
    height,
  };
};

export default useWindowSize;

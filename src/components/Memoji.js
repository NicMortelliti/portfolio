import React from "react";

import memojiWaveDark from "../assets/images/memoji-wave.png";
import memojiWaveLight from "../assets/images/memoji-wave-glasses.png";

const Memoji = ({ darkThemeIsSet }) => {
  // Conditionally display the type of emoji depending on theme dark or light
  const RenderMemoji = () => {
    switch (darkThemeIsSet) {
      case true:
        return <img src={memojiWaveDark} alt="memoji" />;

      default:
        return <img src={memojiWaveLight} alt="memoji" />;
    }
  };

  return <RenderMemoji />;
};

export default Memoji;

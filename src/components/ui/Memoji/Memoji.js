import React from "react";

import memojiWaveDark from "../../../assets/images/memoji-wave.png";
import memojiWaveLight from "../../../assets/images/memoji-wave-glasses.png";
import memojiIdkDark from "../../../assets/images/memoji-idk.png";
import memojiIdkLight from "../../../assets/images/memoji-idk-glasses.png";

const Memoji = ({ darkThemeIsSet, notFound = false }) => {
  // Conditionally display the type of emoji depending on theme dark or light
  const RenderMemoji = () => {
    switch (darkThemeIsSet) {
      case true:
        return (
          <img src={notFound ? memojiIdkDark : memojiWaveDark} alt="memoji" />
        );

      default:
        return (
          <img src={notFound ? memojiIdkLight : memojiWaveLight} alt="memoji" />
        );
    }
  };

  return <RenderMemoji />;
};

export default Memoji;

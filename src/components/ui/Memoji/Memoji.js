import React from "react";

// Images
import memojiWaveDark from "../../../assets/images/memoji-wave.png";
import memojiWaveLight from "../../../assets/images/memoji-wave-glasses.png";

// Redux
import { useSelector } from "react-redux";

const Memoji = () => {
  const { darkThemeActive } = useSelector((state) => state.ui);

  // Conditionally display the type of emoji depending on theme dark or light
  const RenderMemoji = () => {
    switch (darkThemeActive) {
      case true:
        return <img src={memojiWaveDark} alt="memoji" />;

      default:
        return <img src={memojiWaveLight} alt="memoji" />;
    }
  };

  return <RenderMemoji />;
};

export default Memoji;

import React from 'react';

// Images
import { useSelector } from 'react-redux';
import memojiWaveDark from '../../../assets/images/memoji-wave.png';
import memojiWaveLight from '../../../assets/images/memoji-wave-glasses.png';

// Redux

function Memoji() {
  const { darkThemeActive } = useSelector((state) => state.ui);

  // Conditionally display the type of emoji depending on theme dark or light
  function RenderMemoji() {
    switch (darkThemeActive) {
      case true:
        return <img src={memojiWaveDark} alt="memoji" />;

      default:
        return <img src={memojiWaveLight} alt="memoji" />;
    }
  }

  return <RenderMemoji />;
}

export default Memoji;

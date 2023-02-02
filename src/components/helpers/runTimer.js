const runTimer = (setTempStringIsDisplayed, lengthOfTimerMS = 1000) => {
  // When this function is called, e.g. after
  // a button click, we start the timer, then
  // we [setTempStringToDisplayed] to false.
  const timer = setTimeout(() => {
    setTempStringIsDisplayed(false);
  }, lengthOfTimerMS);

  return () => clearTimeout(timer);
};

export default runTimer;

// When clicked, we will attempt to copy [string]
// to the clipboard. This only works on secure
// connections such as https or localhost. This site
// will be hosted via https, so it should work fine for
// most browsers. I tested this behavior on a non-secure
// connection (192.xxx...) and I did not see the "Copied!"
// feedback, which was expected. So it seems to work as intended.
const Email = (e, string, setFeedbackIsDisplayed) => {
  e.preventDefault();

  // Copy [string] into system clipboard
  navigator.clipboard.writeText(string);

  // This will show feedback to the user, such as "Copied!"
  setFeedbackIsDisplayed(true);

  return null;
};

export default Email;

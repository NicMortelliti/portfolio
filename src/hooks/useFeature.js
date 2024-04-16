import { useSelector } from 'react-redux';

// This hook returns true if the specified feature is enabled, otherwise false.
// Pass the feature name as a string to this hook. For example, useFeature('linksToProjects').
const useFeature = (feature) => {
  const selector = (state) => state.ui;
  const { featureFlags } = useSelector(selector);

  try {
    return Object.hasOwn(featureFlags, feature) ? featureFlags[feature].enabled : false;
  } catch (error) {
    console.error(`Feature flag "${feature}" not found in state.`, error);
    return false;
  }
};

export default useFeature;

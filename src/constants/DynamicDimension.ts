import {useWindowDimensions} from 'react-native';

export const DynamicDimension = () => {
  const {width, height} = useWindowDimensions();
  const isMobileView = width < 770;

  return {
    isMobileView,
    width,
    height,
  };
};

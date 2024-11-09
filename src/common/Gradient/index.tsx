import {Platform} from 'react-native';

const Gradient =
  Platform.OS === 'web'
    ? require('./Gradient.web').default
    : require('./Gradient.native').default;

export default Gradient;

import { Platform } from 'react-native';
const Upload = Platform.OS === 'web'
    ? require('./Upload.web').default
    : require('./Upload.native').default;
export default Upload;

import {isWeb} from '../../../src/constants/constant';

const FileViewer = isWeb
  ? require('./FileViewer.web').default
  : require('./FileViewer.native').default;

export default FileViewer;

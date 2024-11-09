import { isWeb } from '../../../src/constants/constant';
const ToolTip = isWeb
    ? require('./ToolTip.web').default
    : require('./ToolTip.native').default;
export default ToolTip;

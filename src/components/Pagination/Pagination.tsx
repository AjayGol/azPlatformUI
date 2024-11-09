import {isWeb} from '../../../src/constants/constant';

const Pagination = isWeb
  ? require('./Pagination.web').default
  : require('./Pagination.native').default;

export default Pagination;

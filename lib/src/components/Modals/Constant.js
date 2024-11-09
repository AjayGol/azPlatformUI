import { isWeb, screenHeight, screenWidth } from '../../constants/constant';
export const RIGHT = 'right';
export const LEFT = 'left';
export const TOP = 'top';
export const BOTTOM = 'bottom';
export const SLIDE_IN_DOWN = 'slideInDown';
export const SLIDE_OUT_DOWN = 'slideOutDown';
export const SLIDE_IN_UP = 'slideInUp';
export const SLIDE_OUT_UP = 'slideOutUp';
export const SLIDE_IN_RIGHT = 'slideInRight';
export const SLIDE_OUT_RIGHT = 'slideOutRight';
export const SLIDE_IN_LEFT = 'slideInLeft';
export const SLIDE_OUT_LEFT = 'slideOutLeft';
export const ZOOM_IN = 'zoomIn';
export const ZOOM_OUT = 'zoomOut';
export const SIDE_MODAL_MIN_WIDTH = isWeb
    ? screenWidth / 2.5
    : screenWidth / 1.5;
export const SIDE_MODAL_MAX_HEIGHT = isWeb ? screenHeight : screenHeight / 1.15;
export const DIALOG_MAX_HEIGHT = screenHeight / 1.2;
export const DIALOG_MIN_HEIGHT = screenHeight / 6;
export const DIALOG_MIN_WIDTH = isWeb ? screenWidth / 3 : screenWidth / 1.5;

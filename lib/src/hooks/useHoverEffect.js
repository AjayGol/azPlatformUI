import { useCallback } from 'react';
import { isWeb } from '../constants/constant';
const useHoverEffect = (defaultStyle, hoverStyle) => {
    const handleMouseEnter = useCallback((event) => {
        if (isWeb) {
            const target = event.currentTarget;
            Object.assign(target.style, hoverStyle);
        }
    }, [hoverStyle]);
    const handleMouseLeave = useCallback((event) => {
        if (isWeb) {
            const target = event.currentTarget;
            Object.assign(target.style, defaultStyle);
        }
    }, [defaultStyle]);
    return Object.assign({ style: defaultStyle }, (isWeb && {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
    }));
};
export default useHoverEffect;

/// <reference types="react" />
import { TooltipProps as TtpinProps } from 'react-native-walkthrough-tooltip';
export interface TooltipProps extends TtpinProps {
    position?: 'left' | 'right' | 'top' | 'bottom';
    tooltip: React.ReactElement;
    hover?: boolean;
    id?: string;
}

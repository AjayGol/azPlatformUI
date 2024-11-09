import React from 'react';
import { TooltipProps } from '../../components/ToolTip/ToolTip.types';
import { NativeSyntheticEvent, NativeMouseEvent } from 'react-native';
interface OpticTooltipProps extends TooltipProps {
    onHoverIn?: null | ((event: NativeSyntheticEvent<NativeMouseEvent>) => void) | undefined;
    onHoverOut?: null | ((event: NativeSyntheticEvent<NativeMouseEvent>) => void) | undefined;
    onPress: () => void;
}
declare const OpticTooltip: React.FC<OpticTooltipProps>;
export default OpticTooltip;

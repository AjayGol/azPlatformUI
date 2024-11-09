import React from 'react';
import {Pressable} from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import {TooltipProps} from '../../components/ToolTip/ToolTip.types';
import {NativeSyntheticEvent, NativeMouseEvent} from 'react-native';

interface OpticTooltipProps extends TooltipProps {
  onHoverIn?:
    | null
    | ((event: NativeSyntheticEvent<NativeMouseEvent>) => void)
    | undefined;
  onHoverOut?:
    | null
    | ((event: NativeSyntheticEvent<NativeMouseEvent>) => void)
    | undefined;
  onPress: () => void;
}

const OpticTooltip: React.FC<OpticTooltipProps> = ({
  children,
  onHoverIn,
  onHoverOut,
  onPress,
  ...props
}) => (
  <Tooltip {...props}>
    <Pressable onHoverIn={onHoverIn} onHoverOut={onHoverOut} onPress={onPress}>
      {children}
    </Pressable>
  </Tooltip>
);

export default OpticTooltip;

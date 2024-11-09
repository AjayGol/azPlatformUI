import React from 'react';
import {TooltipProps} from './ToolTip.types';
import {Tooltip} from 'react-tooltip';
import {Portal} from 'react-native-paper';
import {View} from 'react-native';

const ToolTip: React.FC<TooltipProps> = ({
  children,
  tooltip,
  position = 'bottom',
  id,
}) => {
  return (
    <View id={id} style={{alignSelf: 'flex-start'}}>
      {children}
      <Portal>
        <Tooltip
          key={id}
          id={id}
          place={position}
          anchorSelect={`#${id}`}
          offset={10}>
          {tooltip}
        </Tooltip>
      </Portal>
    </View>
  );
};

export default ToolTip;

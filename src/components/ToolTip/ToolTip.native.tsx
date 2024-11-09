import React from 'react';
// import {View} from 'react-native';
import {TooltipProps} from './ToolTip.types';
// import {styles} from './ToolTip.styles';
// import OpticTooltip from '../../common/OpticTooltip';

const ToolTip: React.FC<TooltipProps> = ({
  // position = 'bottom',
  // contentStyle = styles.contentStyle,
  // backgroundColor = 'transparent',
  // disableShadow = true,
  // tooltip,
  children,
  // ...props
}) => {
  // const [localHover, setLocalHover] = useState(false);

  // const isVisible = localHover && !!tooltip;

  return (
    // <View style={styles.toolTipContainer}>
    //   <OpticTooltip
    //     {...props}
    //     tooltip={tooltip}
    //     isVisible={isVisible}
    //     disableShadow={disableShadow}
    //     backgroundColor={backgroundColor}
    //     contentStyle={contentStyle}
    //     content={tooltip}
    //     placement={position}
    //     onPress={() => setLocalHover(!localHover)}
    //     onHoverIn={() => setLocalHover(true)}
    //     onHoverOut={() => setLocalHover(false)}
    //     onClose={() => setLocalHover(false)}>
    //     {children}
    //   </OpticTooltip>
    // </View>
    <>{children}</>
  );
};

export default ToolTip;

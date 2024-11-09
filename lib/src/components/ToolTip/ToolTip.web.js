import React from 'react';
import { Tooltip } from 'react-tooltip';
import { Portal } from 'react-native-paper';
import { View } from 'react-native';
const ToolTip = ({ children, tooltip, position = 'bottom', id, }) => {
    return (React.createElement(View, { id: id, style: { alignSelf: 'flex-start' } },
        children,
        React.createElement(Portal, null,
            React.createElement(Tooltip, { key: id, id: id, place: position, anchorSelect: `#${id}`, offset: 10 }, tooltip))));
};
export default ToolTip;

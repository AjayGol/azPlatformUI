import {DefaultTheme as PaperDefaultTheme} from 'react-native-paper';
import {colors} from './colors';

const theme = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: colors.primaryColor,
    accent: colors.secondaryColor,
    background: colors.backgroundColor,
    surface: colors.lightBgPrimaryColor,
    text: colors.textColor,
    placeholder: colors.textColor,
    backdrop: colors.boxShadowColor,
    notification: colors.notificationBadge,
    border: colors.borderColor,
    surfaceDisabled: colors.disabledColor,
  },
  roundness: 10,
};

export default theme;

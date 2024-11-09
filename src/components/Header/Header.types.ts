import {ImageSourcePropType} from 'react-native';
import {
  ExtraProfileSettings,
  UserProfile,
} from './Components/UserProfile/UserProfile.types';

interface Icons {
  icon: React.ReactElement;
  id: number;
  onClick: () => void;
}

export interface HeaderTypes {
  logo?: ImageSourcePropType;
  title: string;
  icons?: Icons[] | React.ReactNode;
  children?: React.ReactNode;
  disableProfile?: boolean;
  userProfile?: UserProfile;
  handleLogout?: () => void;
  extraProfileSettings?: ExtraProfileSettings[];
  userProfileArray?: UserProfile[];
  rightIcon?: React.ReactNode;
}

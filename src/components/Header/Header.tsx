import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './Header.styles';
import {HeaderTypes} from './Header.types';
import UserProfile from './Components/UserProfile';
import Gradient from '../../common/Gradient';
import DeviceInfo from 'react-native-device-info';

const Header: React.FC<HeaderTypes> = ({
  logo,
  title,
  icons,
  children,
  disableProfile = false,
  userProfile,
  handleLogout,
  extraProfileSettings,
  userProfileArray,
  rightIcon,
}) => {
  const appLogo = logo ? logo : {uri: './Images/fxhub_logo.png'};

  return (
    <Gradient
      colors={['#BF286E', '#78154F']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.header}>
      <View style={styles.headerSection}>
        <View style={styles.headerImgCon}>
          <View style={styles.slantBox} />
          <Image source={appLogo} style={styles.logoImage} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {title}
          </Text>
        </View>

        {(children && (
          <View
            style={[
              styles.childWrapper,
              {
                marginRight: disableProfile ? 16 : 0,
                alignItems: DeviceInfo.isTablet() ? 'center' : 'flex-end',
              },
            ]}>
            {children}
          </View>
        )) ||
          null}

        {rightIcon && DeviceInfo.isTablet() ? (
          <View style={styles.rightIconStyle}>{rightIcon}</View>
        ) : null}

        {!(rightIcon && DeviceInfo.isTablet()) ? (
          !disableProfile ? (
            <View style={styles.profileDivier} />
          ) : null
        ) : null}

        {!(rightIcon && DeviceInfo.isTablet()) && icons && !disableProfile ? (
          <View style={styles.iconView}>
            {icons && !Array.isArray(icons) && (
              <View style={{marginLeft: 16}}>{icons}</View>
            )}

            {(icons &&
              Array.isArray(icons) &&
              icons.map((icon, index) => {
                const isLast = index === icons.length - 1;
                return (
                  <TouchableOpacity
                    style={[styles.icon, {marginRight: isLast ? 0 : 16}]}
                    key={icon.id}
                    onPress={icon.onClick}>
                    {React.cloneElement(icon.icon, {color: '#FFF'})}
                  </TouchableOpacity>
                );
              })) ||
              null}
          </View>
        ) : null}

        {!(rightIcon && DeviceInfo.isTablet()) && !disableProfile ? (
          <UserProfile
            userProfile={userProfile}
            extraProfileSettings={extraProfileSettings}
            handleLogout={handleLogout}
            userProfileArray={userProfileArray}
          />
        ) : null}
      </View>
    </Gradient>
  );
};

export default Header;

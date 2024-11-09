import React, {LegacyRef, useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styles from './UserProfile.styles';
import {UserProfileTypes} from './UserProfile.types';
import Popover, {
  PopoverMode,
  PopoverPlacement,
} from 'react-native-popover-view';
import useHoverEffect from '../../../../hooks/useHoverEffect';

const inits = (firstName: string, lastName: string) => {
  if (!firstName || !lastName) {
    return '';
  }
  if (firstName?.length > 0 && lastName?.length > 0) {
    return firstName[0] + lastName[0];
  }

  return '';
};

const UserProfile: React.FC<UserProfileTypes> = ({
  userProfile,
  extraProfileSettings,
  handleLogout,
  userProfileArray,
}) => {
  const userProfileRef: LegacyRef<TouchableOpacity> = useRef(null);
  const [showPopover, setShowPopover] = useState<boolean>(false);

  const firstName = String(userProfile?.firstName);
  const lastName = String(userProfile?.lastName);

  const buttonHover = useHoverEffect(
    styles.settingButton,
    styles.settingButtonHover,
  );

  const displayPopOver = () => {
    setShowPopover(true);
  };

  const hidePopOver = () => {
    setShowPopover(false);
  };

  return (
    <>
      <TouchableOpacity
        onPress={displayPopOver}
        style={styles.userProfile}
        ref={userProfileRef}
        testID="user-profile-button">
        <View style={styles.profileIconView}>
          {userProfile ? (
            <Text style={styles.profileIcon}>{inits(firstName, lastName)}</Text>
          ) : null}
        </View>
      </TouchableOpacity>

      <Popover
        mode={PopoverMode.RN_MODAL}
        placement={PopoverPlacement.BOTTOM}
        isVisible={showPopover}
        onRequestClose={hidePopOver}
        from={userProfileRef}
        popoverStyle={styles.popOverView}
        backgroundStyle={styles.popOverOverlay}
        verticalOffset={-5}>
        <>
          <View style={styles.profileBody}>
            <View style={styles.profileImage}>
              <Text style={styles.profileIconText}>
                {inits(firstName, lastName)}
              </Text>
            </View>

            <View style={styles.profileInfo}>
              <Text style={styles.userName}>{`${firstName}, ${lastName}`}</Text>
              <Text style={styles.userEmail}>{userProfile?.email}</Text>

              {userProfile?.prid ? (
                <Text style={styles.userId}>ID: {userProfile?.prid}</Text>
              ) : null}

              {userProfile?.lastVisited ? (
                <Text style={styles.lastVisit}>
                  Last Visited: {userProfile?.lastVisited}
                </Text>
              ) : null}
            </View>
          </View>

          <View style={styles.divider} />

          {userProfileArray && Array.isArray(userProfileArray) && (
            <>
              <View style={{marginVertical: 4}}>
                {userProfileArray.map(profile => {
                  return (
                    <>
                      <View
                        style={[styles.profileBody, styles.proxyProfileBody]}>
                        <View
                          style={[
                            styles.profileImage,
                            styles.proxyProfileImage,
                            profile.proxy ? styles.profileImageBorder : {},
                          ]}>
                          <Text
                            style={[
                              styles.profileIconText,
                              styles.proxyProfileText,
                            ]}>
                            {inits(profile.firstName, profile.lastName)}
                          </Text>
                        </View>

                        <View style={styles.profileInfo}>
                          <Text style={styles.userName}>
                            {`${profile.firstName}, ${profile.lastName}`}
                          </Text>

                          <Text style={styles.territory}>
                            {`(${profile.territoryName || ''})`}
                          </Text>
                        </View>
                      </View>
                    </>
                  );
                })}
              </View>

              <View style={styles.divider} />
            </>
          )}

          {extraProfileSettings && Array.isArray(extraProfileSettings) && (
            <>
              <View style={styles.profileButtons}>
                {extraProfileSettings.map((profile, index) => {
                  return (
                    <TouchableOpacity
                      testID={`profile-setting-${index + 1}`}
                      onPress={profile.onClick}
                      key={index}
                      {...buttonHover}>
                      {profile.icon}
                      <Text style={styles.settingsText}>{profile.label}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              <View style={styles.divider} />
            </>
          )}

          <TouchableOpacity {...buttonHover} onPress={handleLogout}>
            <Icon name="logout" size={18} />
            <Text style={styles.settingsText}>Sign Out</Text>
          </TouchableOpacity>
        </>
      </Popover>
    </>
  );
};

export default UserProfile;

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import useHoverEffect from '../../../../hooks/useHoverEffect';
import {UserProfileTypes} from './UserProfile.types';
import styles from './UserProfile.styles';

const ProfileComponent: React.FC<UserProfileTypes> = ({
  userProfile,
  extraProfileSettings,
  handleLogout,
  userProfileArray = [],
}) => {
  const firstName = String(userProfile?.firstName);
  const lastName = String(userProfile?.lastName);

  const buttonHover = useHoverEffect(
    styles.settingButton,
    styles.settingButtonHover,
  );

  const inits = (firstName: string, lastName: string) => {
    if (!firstName || !lastName) {
      return '';
    }
    if (firstName?.length > 0 && lastName?.length > 0) {
      return firstName[0] + lastName[0];
    }

    return '';
  };

  return (
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

      {Array.isArray(userProfileArray) && userProfileArray.length > 0 && (
        <>
          <View style={{marginVertical: 4}}>
            {userProfileArray.map(profile => {
              return (
                <>
                  <View style={[styles.profileBody, styles.proxyProfileBody]}>
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
  );
};

export default ProfileComponent;

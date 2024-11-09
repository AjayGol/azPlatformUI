import React from 'react';
import {Meta, Story} from '@storybook/react';
import MediaPlayer from '../../components/MediaPlayer';
import Button from '../../components/Button';
import {View, StyleSheet, ScrollView, useWindowDimensions} from 'react-native';
import {colors} from '../../constants/colors';
import results from '../../../jest-test-results.json';
import {deviceHeight, isMobile} from '../../constants/constant';
import {withTests} from '@storybook/addon-jest';
import {MediaPlayerProps} from '../../components/MediaPlayer/MediaPlayer.types';

const meta: Meta<typeof MediaPlayer> = {
  title: 'components/MediaPlayer',
  component: MediaPlayer,
  argTypes: {
    url: {
      control: 'text',
      description: 'The URL of the media to play.',
    },
    resizeModeMob: {
      control: {type: 'select'},
      options: ['cover', 'contain', 'stretch'],
      description: 'The resize mode of the media for mobile.',
    },
    onLoadMob: {
      action: 'onLoadMob',
      description: 'Callback triggered when the media is loaded (mobile).',
    },
    onProgressMob: {
      action: 'onProgressMob',
      description:
        'Callback triggered during media playback progress (mobile).',
    },
    onEndMob: {
      action: 'onEndMob',
      description: 'Callback triggered when the media playback ends (mobile).',
    },
    onErrorMob: {
      action: 'onErrorMob',
      description:
        'Callback triggered when an error occurs during media playback (mobile).',
    },
    onStart: {
      action: 'onStart',
      description: 'Callback triggered when media playback starts (web).',
    },
    onProgress: {
      action: 'onProgress',
      description: 'Callback triggered during media playback progress (web).',
    },
    onPlay: {
      action: 'onPlay',
      description: 'Callback triggered when media playback is started (web).',
    },
    onPause: {
      action: 'onPause',
      description: 'Callback triggered when media playback is paused (web).',
    },
    onEnded: {
      action: 'onEnded',
      description: 'Callback triggered when media playback ends (web).',
    },
    onError: {
      action: 'onError',
      description:
        'Callback triggered when an error occurs during media playback (web).',
    },
    onDuration: {
      action: 'onDuration',
      description:
        'Callback triggered when the media duration is available (web).',
    },
    playing: {
      control: 'boolean',
      description: 'Whether the media is currently playing.',
    },
    loop: {
      control: 'boolean',
      description: 'Whether the media should loop continuously.',
    },
    controls: {
      control: 'boolean',
      description: 'Whether to show media controls.',
    },
    volume: {
      control: 'number',
      description: 'The volume level of the media player.',
    },
    muted: {
      control: 'boolean',
      description: 'Whether the media is muted.',
    },
    playsinline: {
      control: 'boolean',
      description:
        'Whether the media should play inline (i.e., not in fullscreen).',
    },
    style: {
      control: 'object',
      description: 'Inline style for the media player component.',
    },
    testID: {
      table: {
        disable: true,
      },
      description: 'The testId of the Media Player.',
    },
  },
  decorators: [withTests({results})],
} satisfies Meta<typeof MediaPlayer>;

export default meta;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  topSection: {
    padding: 20,
  },
  closeButtonContainer: {
    marginTop: 40,
    alignSelf: 'center',
  },
  playerContent: {
    borderRadius: 10,
    alignSelf: 'center',
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  mediaPlayer: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
});

const MediaPlayerStory: Story<MediaPlayerProps> = args => {
  const {width} = useWindowDimensions();
  const [showPlayer, setShowPlayer] = React.useState(true);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!showPlayer ? (
        <View style={styles.topSection}>
          <Button
            label="Open Media Player"
            variant="filled"
            type="primary"
            onPress={() => setShowPlayer(true)}
          />
        </View>
      ) : (
        <>
          <View
            style={{
              ...styles.playerContent,
              width: isMobile ? width : width - 100,
              height: deviceHeight - 250,
            }}>
            <MediaPlayer {...args} />
          </View>
          <View style={styles.closeButtonContainer}>
            <Button
              label="Close Media Player"
              variant="filled"
              type="primary"
              onPress={() => setShowPlayer(false)}
            />
          </View>
        </>
      )}
    </ScrollView>
  );
};

export const Media_Player_Component = MediaPlayerStory.bind({});
Media_Player_Component.args = {
  url: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  resizeModeMob: 'contain',
  playing: false,
  loop: false,
  controls: true,
  volume: 1,
  muted: false,
  playsinline: false,
  style: styles.mediaPlayer,
};

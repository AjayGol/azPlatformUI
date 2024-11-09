import React from 'react';
import {MediaPlayerProps} from './MediaPlayer.types';
import {isWeb} from '../../../src/constants/constant';
import {styles} from './MediaPlayer.styles';

const MediaPlayer: React.FC<MediaPlayerProps> = ({
  url,
  controls = true,
  loop = false,
  style,
  playing = false,
  volume = null,
  muted = false,
  playsinline = false,
  resizeModeMob = 'cover',
  onLoadMob,
  onProgressMob,
  onEndMob,
  onErrorMob,
  onProgress,
  onStart,
  onPlay,
  onPause,
  onEnded,
  onError,
  onDuration,
  testID,
}) => {
  const effectiveVolume = muted ? 0 : volume !== null ? volume : 1;
  if (isWeb) {
    const ReactPlayer = require('react-player').default;
    return (
      <ReactPlayer
        url={url}
        playing={playing}
        loop={loop}
        controls={controls}
        volume={effectiveVolume}
        muted={muted}
        playsinline={playsinline}
        width="100%"
        height="100%"
        onProgress={onProgress}
        onStart={onStart}
        onPlay={onPlay}
        onDuration={onDuration}
        onPause={onPause}
        onEnded={onEnded}
        onError={onError}
        style={{...style, overflow: 'hidden'}}
        testID={testID}
      />
    );
  } else {
    const Video = require('react-native-video').default;
    return (
      <Video
        source={{uri: url}}
        controls={controls}
        paused={!playing}
        repeat={loop}
        volume={effectiveVolume}
        muted={muted}
        resizeMode={resizeModeMob}
        onLoad={onLoadMob}
        onProgress={onProgressMob}
        onEnd={onEndMob}
        onError={onErrorMob}
        style={[styles.mainVideo, style]}
        testID={testID}
      />
    );
  }
};

export default MediaPlayer;

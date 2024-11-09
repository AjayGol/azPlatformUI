import {ViewStyle} from 'react-native';

interface ProgressDataMob {
  atValue: number;
  currentPlaybackTime: number;
  seekableDuration: number;
  target: number;
  playableDuration: number;
  currentTime: number;
}

interface ProgressData {
  playedSeconds: number;
  played: number;
  loadedSeconds: number;
  loaded: number;
}
interface TextTrack {
  id: string;
  kind: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';
  label: string;
  language: string;
}

interface AudioTrack {
  id: string;
  kind: 'audio';
  label: string;
  language: string;
}

interface OnLoadMobData {
  canStepForward: boolean;
  naturalSize: {
    height: number;
    width: number;
    orientation: 'portrait' | 'landscape';
  };
  canPlaySlowReverse: boolean;
  textTracks: TextTrack[];
  audioTracks: AudioTrack[];
  currentTime: number;
  duration: number;
  canPlayReverse: boolean;
  canStepBackward: boolean;
  canPlaySlowForward: boolean;
  target: number;
  canPlayFastForward: boolean;
}

export interface MediaPlayerProps {
  url: string;
  controls?: boolean;
  loop?: boolean;
  style?: ViewStyle;
  playing?: boolean;
  volume?: number | null;
  muted?: boolean;
  playsinline?: boolean;
  resizeModeMob?: 'cover' | 'contain' | 'stretch' | 'none';
  onLoadMob?: (data: OnLoadMobData) => void;
  onProgressMob?: (data: ProgressDataMob) => void;
  onEndMob?: () => void;
  onErrorMob?: (error: Error) => void;
  onStart?: () => void;
  onProgress?: (data: ProgressData) => void;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  onError?: (error: Error) => void;
  onDuration?: (data: {duration: number}) => void;
  testID?: string;
}

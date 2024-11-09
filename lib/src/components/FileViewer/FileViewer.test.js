import React from 'react';
import { render } from '@testing-library/react-native';
import MediaPlayer from '../MediaPlayer';
import { Platform } from 'react-native';
jest.mock('react-native-video', () => {
    return {
        __esModule: true,
        default: props => React.createElement("div", Object.assign({}, props)),
    };
});
jest.mock('react-player', () => {
    return {
        __esModule: true,
        default: props => React.createElement("div", Object.assign({}, props)),
    };
});
const originalPlatformOS = Platform.OS;
describe('MediaPlayer Component', () => {
    const commonProps = {
        url: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        controls: true,
        loop: false,
        style: {},
        playing: false,
        volume: 1,
        muted: false,
        playsinline: false,
        resizeModeMob: 'contain',
        onLoadMob: jest.fn(),
        onProgressMob: jest.fn(),
        onEndMob: jest.fn(),
        onErrorMob: jest.fn(),
        onStart: jest.fn(),
        onProgress: jest.fn(),
        onPlay: jest.fn(),
        onPause: jest.fn(),
        onEnded: jest.fn(),
        onError: jest.fn(),
        onDuration: jest.fn(),
        testID: 'react-native-video',
    };
    afterEach(() => {
        Object.defineProperty(Platform, 'OS', {
            value: originalPlatformOS,
            configurable: true,
        });
    });
    it('renders ReactPlayer for web', () => {
        Object.defineProperty(Platform, 'OS', {
            value: 'web',
            configurable: true,
        });
        const { getByTestId } = render(React.createElement(MediaPlayer, Object.assign({}, commonProps, { testID: "react-player" })));
        expect(getByTestId('react-player')).toBeTruthy();
    });
    it('renders Video for mobile', () => {
        Object.defineProperty(Platform, 'OS', {
            value: 'ios',
            configurable: true,
        });
        const { getByTestId } = render(React.createElement(MediaPlayer, Object.assign({}, commonProps, { testID: "react-native-video" })));
        expect(getByTestId('react-native-video')).toBeTruthy();
    });
});

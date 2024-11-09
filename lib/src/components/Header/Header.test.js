var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Header from './Header';
import VectorIcon from 'react-native-vector-icons/FontAwesome';
import { Text } from 'react-native';
const mockUserProfile = {
    firstName: 'Clark',
    lastName: 'Kent',
    email: 'clark.kent@astrazeneca.com',
    prid: 'kgrs984',
    lastVisited: '2024-08-06',
};
describe('Header Component', () => {
    it('renders Header with profile menu and interacts with it', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockLogout = jest.fn();
        const mockExtraProfileSettings = [
            {
                icon: React.createElement(VectorIcon, { name: "user", size: 18 }),
                label: 'Personal Settings',
                onClick: jest.fn(),
            },
            {
                icon: React.createElement(VectorIcon, { name: "cogs", size: 18 }),
                label: 'Account Settings',
                onClick: jest.fn(),
            },
            {
                icon: React.createElement(VectorIcon, { name: "share", size: 18 }),
                label: 'Share',
                onClick: jest.fn(),
            },
        ];
        const { getByTestId, findByText, queryByTestId } = render(React.createElement(Header, { title: "Optic", userProfile: mockUserProfile, disableProfile: false, extraProfileSettings: mockExtraProfileSettings, handleLogout: mockLogout }));
        expect(queryByTestId('profile-setting-1')).toBeNull();
        fireEvent.press(getByTestId('user-profile-button'));
        yield waitFor(() => {
            expect(getByTestId('profile-setting-1')).toBeTruthy();
        });
        expect(yield findByText('Clark, Kent')).toBeTruthy();
        expect(yield findByText('clark.kent@astrazeneca.com')).toBeTruthy();
        expect(yield findByText('ID: kgrs984')).toBeTruthy();
        expect(yield findByText('Last Visited: 2024-08-06')).toBeTruthy();
        const settingButtons = yield waitFor(() => [
            getByTestId('profile-setting-1'),
            getByTestId('profile-setting-2'),
            getByTestId('profile-setting-3'),
        ]);
        fireEvent.press(settingButtons[0]);
        expect(mockExtraProfileSettings[0].onClick).toHaveBeenCalled();
        fireEvent.press(settingButtons[1]);
    }));
    it('renders Header with icons array and checks icons', () => {
        const { queryAllByTestId } = render(React.createElement(Header, { title: "Optic", userProfile: mockUserProfile, icons: [
                {
                    icon: (React.createElement(VectorIcon, { name: "question-circle-o", size: 18, testID: "icon-1" })),
                    id: 1,
                    onClick: jest.fn(),
                },
                {
                    icon: React.createElement(VectorIcon, { name: "gear", size: 18, testID: "icon-2" }),
                    id: 2,
                    onClick: jest.fn(),
                },
                {
                    icon: React.createElement(VectorIcon, { name: "bell", size: 18, testID: "icon-3" }),
                    id: 3,
                    onClick: jest.fn(),
                },
            ] }));
        const icons = queryAllByTestId(/icon-/);
        expect(icons).toHaveLength(3);
    });
    it('renders Header with single icon node', () => {
        const { getByTestId } = render(React.createElement(Header, { title: "Optic", userProfile: mockUserProfile, icons: React.createElement(VectorIcon, { name: "bell", size: 18, testID: "single-icon" }) }));
        const icon = getByTestId('single-icon');
        expect(icon).toBeTruthy();
    });
    it('renders Header with icons and children', () => {
        const { getByTestId, queryAllByTestId } = render(React.createElement(Header, { title: "Optic", userProfile: mockUserProfile, icons: [
                {
                    icon: (React.createElement(VectorIcon, { name: "question-circle-o", size: 18, testID: "icon-1" })),
                    id: 1,
                    onClick: jest.fn(),
                },
            ] },
            React.createElement(Text, { testID: "header-text" }, "ASDF JKL;")));
        expect(getByTestId('header-text')).toBeTruthy();
        const icons = queryAllByTestId(/icon-/);
        expect(icons).toHaveLength(1);
    });
    it('clicking an icon triggers onClick', () => {
        const onClickMock = jest.fn();
        const iconsArray = [
            {
                icon: React.createElement(VectorIcon, { name: "bell", size: 18, testID: "clickable-icon" }),
                id: 1,
                onClick: onClickMock,
            },
        ];
        const { getByTestId } = render(React.createElement(Header, { title: "Optic", icons: iconsArray }));
        fireEvent.press(getByTestId('clickable-icon'));
        expect(onClickMock).toHaveBeenCalled();
    });
});

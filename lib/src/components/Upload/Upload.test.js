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
import { render, screen, fireEvent, waitFor, } from '@testing-library/react-native';
import Upload from '../../components/Upload';
import { colors } from '../../constants/colors';
jest.mock('react-native-document-picker', () => ({
    pick: jest.fn(),
    isCancel: jest.fn().mockReturnValue(false),
}));
global.alert = jest.fn();
describe('Upload Component', () => {
    const mockSendUploadFiles = jest.fn();
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test('renders correctly with provided props', () => {
        render(React.createElement(Upload, { uploadText: "Drag 'N' DROP A FILE HERE, OR CLICK", color: colors.primaryColor, showClearButton: true, multiple: false, accept: "application/pdf", maxFilesCount: 5, maxFilesSize: 50, sendUploadFiles: mockSendUploadFiles }));
        expect(screen.getByText("Drag 'N' DROP A FILE HERE, OR CLICK")).toBeTruthy();
        expect(screen.getByText('Upload')).toBeTruthy();
        expect(screen.getByText('Clear')).toBeTruthy();
    });
    test('shows and updates progress correctly', () => __awaiter(void 0, void 0, void 0, function* () {
        render(React.createElement(Upload, { uploadText: "Drag 'N' DROP A FILE HERE, OR CLICK", color: colors.primaryColor, showClearButton: true, multiple: false, accept: "application/pdf", maxFilesCount: 5, maxFilesSize: 50, showProgress: true, progressValue: 50, sendUploadFiles: mockSendUploadFiles }));
        const progressBar = screen.getByTestId('progressBar');
        expect(progressBar.props.style).toEqual(expect.objectContaining({
            backgroundColor: '#1C375F',
            height: '100%',
            width: '50%',
        }));
    }));
    test('clears files when clear button is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        const file = {
            uri: 'file://path/to/example.pdf',
            name: 'example.pdf',
            size: 1024,
            type: 'application/pdf',
        };
        render(React.createElement(Upload, { uploadText: "Drag 'N' DROP A FILE HERE, OR CLICK", color: colors.primaryColor, showClearButton: true, multiple: false, accept: "application/pdf", maxFilesCount: 5, maxFilesSize: 50, sendUploadFiles: mockSendUploadFiles }));
        const { pick } = require('react-native-document-picker');
        pick.mockResolvedValue([file]);
        const uploadButton = screen.getByText("Drag 'N' DROP A FILE HERE, OR CLICK");
        fireEvent.press(uploadButton);
        yield waitFor(() => {
            expect(screen.findByText('example.pdf - 1.00 KB')).toBeTruthy();
        });
        const clearButton = screen.getByText('Clear');
        fireEvent.press(clearButton);
        yield waitFor(() => {
            expect(screen.queryByText('example.pdf - 1.00 KB')).toBeNull();
        });
    }));
    test('handles file size and count limits', () => __awaiter(void 0, void 0, void 0, function* () {
        const largeFile = {
            uri: 'file://path/to/largefile.pdf',
            name: 'largefile.pdf',
            size: 1024 * 1024 * 60,
            type: 'application/pdf',
        };
        render(React.createElement(Upload, { uploadText: "Drag 'N' DROP A FILE HERE, OR CLICK", color: colors.primaryColor, showClearButton: true, multiple: false, accept: "application/pdf", maxFilesCount: 5, maxFilesSize: 5, sendUploadFiles: mockSendUploadFiles }));
        const { pick } = require('react-native-document-picker');
        pick.mockResolvedValue([largeFile]);
        const uploadButton = screen.getByText("Drag 'N' DROP A FILE HERE, OR CLICK");
        fireEvent.press(uploadButton);
        yield waitFor(() => {
            expect(screen.queryByText('largefile.pdf - 60 MB')).toBeNull();
        });
    }));
});

/* eslint-disable quotes */
import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import Upload from '../../components/Upload';
import {colors} from '../../constants/colors';

// Mock the document picker for non-web platforms
jest.mock('react-native-document-picker', () => ({
  pick: jest.fn(),
  isCancel: jest.fn().mockReturnValue(false),
}));
global.alert = jest.fn();

describe('Upload Component', () => {
  const mockSendUploadFiles = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    // Mock alert
  });

  test('renders correctly with provided props', () => {
    render(
      <Upload
        uploadText="Drag 'N' DROP A FILE HERE, OR CLICK"
        color={colors.primaryColor}
        showClearButton={true}
        multiple={false}
        accept="application/pdf"
        maxFilesCount={5}
        maxFilesSize={50}
        sendUploadFiles={mockSendUploadFiles}
      />,
    );

    expect(
      screen.getByText("Drag 'N' DROP A FILE HERE, OR CLICK"),
    ).toBeTruthy();
    expect(screen.getByText('Upload')).toBeTruthy();
    expect(screen.getByText('Clear')).toBeTruthy();
  });

  test('shows and updates progress correctly', async () => {
    render(
      <Upload
        uploadText="Drag 'N' DROP A FILE HERE, OR CLICK"
        color={colors.primaryColor}
        showClearButton={true}
        multiple={false}
        accept="application/pdf"
        maxFilesCount={5}
        maxFilesSize={50}
        showProgress={true}
        progressValue={50}
        sendUploadFiles={mockSendUploadFiles}
      />,
    );

    const progressBar = screen.getByTestId('progressBar');
    // Validate the styles applied
    expect(progressBar.props.style).toEqual(
      expect.objectContaining({
        backgroundColor: '#1C375F',
        height: '100%',
        width: '50%',
      }),
    );
  });

  test('clears files when clear button is clicked', async () => {
    const file = {
      uri: 'file://path/to/example.pdf',
      name: 'example.pdf',
      size: 1024, // 1 KB
      type: 'application/pdf',
    };

    render(
      <Upload
        uploadText="Drag 'N' DROP A FILE HERE, OR CLICK"
        color={colors.primaryColor}
        showClearButton={true}
        multiple={false}
        accept="application/pdf"
        maxFilesCount={5}
        maxFilesSize={50}
        sendUploadFiles={mockSendUploadFiles}
      />,
    );

    // Mock DocumentPicker to return the mock file
    const {pick} = require('react-native-document-picker');
    pick.mockResolvedValue([file]);

    // Simulate file picker interaction
    const uploadButton = screen.getByText(
      "Drag 'N' DROP A FILE HERE, OR CLICK",
    );
    fireEvent.press(uploadButton);

    await waitFor(() => {
      expect(screen.findByText('example.pdf - 1.00 KB')).toBeTruthy();
    });

    const clearButton = screen.getByText('Clear');
    fireEvent.press(clearButton);

    await waitFor(() => {
      expect(screen.queryByText('example.pdf - 1.00 KB')).toBeNull();
    });
  });

  test('handles file size and count limits', async () => {
    const largeFile = {
      uri: 'file://path/to/largefile.pdf',
      name: 'largefile.pdf',
      size: 1024 * 1024 * 60, // 60MB
      type: 'application/pdf',
    };

    render(
      <Upload
        uploadText="Drag 'N' DROP A FILE HERE, OR CLICK"
        color={colors.primaryColor}
        showClearButton={true}
        multiple={false}
        accept="application/pdf"
        maxFilesCount={5}
        maxFilesSize={5} // MB
        sendUploadFiles={mockSendUploadFiles}
      />,
    );

    // Mock DocumentPicker to return the mock large file
    const {pick} = require('react-native-document-picker');
    pick.mockResolvedValue([largeFile]);

    // Simulate file picker interaction
    const uploadButton = screen.getByText(
      "Drag 'N' DROP A FILE HERE, OR CLICK",
    );
    fireEvent.press(uploadButton);
    await waitFor(() => {
      expect(screen.queryByText('largefile.pdf - 60 MB')).toBeNull();
    });
  });
});

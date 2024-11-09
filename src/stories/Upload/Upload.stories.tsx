import React, {useState, useCallback} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {withTests} from '@storybook/addon-jest';
import results from '../../../jest-test-results.json';
import Upload from '../../components/Upload';
import {colors} from '../../constants/colors';
import {UploadFileProps} from '../../components/Upload/Upload.types';

const meta: Meta<typeof Upload> = {
  title: 'components/Upload',
  component: Upload,
  decorators: [withTests({results})],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BasicUpload: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [progressValue, setProgressValue] = useState(0);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const simulateProgress = useCallback(() => {
      let progress = 1; // Start progress from 1%
      const interval = setInterval(() => {
        setProgressValue(progress);
        progress += 20;
        if (progress > 100) {
          clearInterval(interval);
          setTimeout(() => {
            setProgressValue(0); // Reset progress to 0 after 1 second
          }, 1000);
        }
      }, 1000); // Update progress every second
    }, []);

    const handleUploadClick = (uploadedFiles: UploadFileProps[]) => {
      // eslint-disable-next-line no-console
      console.log('UPLOADED_FILES', uploadedFiles);
      simulateProgress();
    };

    return (
      <Upload
        {...args}
        progressValue={progressValue}
        showProgress={progressValue > 0}
        sendUploadFiles={handleUploadClick}
      />
    );
  },
  args: {
    uploadText: 'Drag "N" DROP A FILE HERE, OR CLICK',
    color: colors.primaryColor,
    showClearButton: true,
    multiple: false,
    accept: 'application/pdf',
    maxFilesCount: 5,
    maxFilesSize: 50, // in MB
  },
};

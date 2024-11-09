import React from 'react';
import {Meta, Story} from '@storybook/react';
import FileViewer from '../../components/FileViewer';
import Button from '../../components/Button';
import {
  View,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Linking,
} from 'react-native';
import {colors} from '../../constants/colors';
import results from '../../../jest-test-results.json';
import {deviceHeight, isMobile} from '../../constants/constant';
import {withTests} from '@storybook/addon-jest';
import {FileViewerProps} from '../../components/FileViewer/FileViewer.types';
import {TableContent} from 'react-native-pdf';

const meta: Meta<typeof FileViewer> = {
  title: 'components/FileViewer',
  component: FileViewer,
  decorators: [withTests({results})],
} satisfies Meta<typeof FileViewer>;

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
  documentContent: {
    borderRadius: 10,
    alignSelf: 'center',
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

const FileViewerStory: Story<FileViewerProps> = args => {
  const {width} = useWindowDimensions();
  const [showViewer, setshowViewer] = React.useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!showViewer ? (
        <View style={styles.topSection}>
          <Button
            label="Open File Viewer"
            variant="filled"
            type="primary"
            onPress={() => setshowViewer(true)}
          />
        </View>
      ) : (
        <>
          <View
            style={{
              ...styles.documentContent,
              width: isMobile ? width : width - 100,
              height: deviceHeight - 300,
            }}>
            <FileViewer {...args} />
          </View>
          <View style={styles.closeButtonContainer}>
            <Button
              label="Close File Viewer"
              variant="filled"
              type="primary"
              onPress={() => setshowViewer(false)}
            />
          </View>
        </>
      )}
    </ScrollView>
  );
};

export const File_Viewer = FileViewerStory.bind({});
File_Viewer.args = {
  // url: 'https://optic.fxhub.astrazeneca.com/renditions/6829.pdf',
  // url: 'https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf',
  url: 'https://optic.fxhub.astrazeneca.com/renditions/31405.pdf',
  // url: 'https://dkiatyam0i33z.cloudfront.net/dbdfd981-4b91-4465-a646-07d70c1bb9f9/78996b6e-f0df-4fd7-9e07-119ac2a28645/78996b6e-f0df-4fd7-9e07-119ac2a28645_source__v.pdf',
  presentationClick: () => alert('present here'),
  containerStyle: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  onClickOpenClose: (value: boolean) => {
    console.log(value);
  },
  onLoadProgress: (data: number) => console.log('onLoadProgress', data),
  loadComplete: (
    numberOfPages: number,
    path: string,
    size: {height: number; width: number},
    tableContents?: TableContent[],
  ) => console.log('loadComplete', numberOfPages, path, size, tableContents),
  onPageChanged: (page: number, numberOfPages: number) =>
    console.log('onPageChanged Web-', page, numberOfPages),
  onError: (error: object) => console.log('onError', error),
  onErrorList: (error: object) => console.log('onError List', error),
  onPageSingleTap: (page: number, x: number, y: number) =>
    console.log('onPageSingleTap', page, x, y),
  onScaleChanged: (scale: number) => console.log('onScaleChanged', scale),
  onPressLink: async (url: string) => {
    console.log('url is', url);
    if (url && url !== '') {
      try {
        await Linking.openURL(url);
      } catch (error) {
        console.error('Failed to open URL', error);
      }
    }
  },
  onLoadErrorWeb: (error: object) => console.log('onError web', error),
  onLoadErrorListWeb: (error: object) => console.log('onError web list', error),
  onInternalLinkClicked: (pageNumber: object) =>
    alert(`internal: ${JSON.stringify(pageNumber)}`),
  onExternalLinkClicked: (url: string) => {
    alert('EXTERNAL');
    Linking.openURL(url);
  },
  onLoadSuccess: (pdf: object) => alert(`on LoadSuccess: ${pdf}`),
  docClassName: 'custom',
  onErrorText:
    'Encountered an unexpected error while trying to load the pdf file.',
  loading: 'Loading PDF...',
  noData: 'No PDF file specified.',
  onPassword: (password: object) => alert(`onPassword: ${password}`),
  rotate: 0,
  onErrorTextList: 'Error List',
  loadingList: 'Loading List',
  noDataList: 'No PDF in List',
  onLoadSuccessList: () => {},
};

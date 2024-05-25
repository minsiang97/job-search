import { PDFViewerProps } from 'navigation/Stack/ProfileStack/types';
import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Pdf from 'react-native-pdf';
import Color from 'themes/Color';

const PDFViewer: React.FC<PDFViewerProps> = ({ route }) => {
  const source =
    Platform.OS === 'ios'
      ? { uri: `bundle-assets://${route.params.fileName}`, cache: true }
      : { uri: `bundle-assets://pdf/${route.params.fileName}`, cache: true };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Color.primaryRed}
        barStyle={'light-content'}
      />
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </SafeAreaView>
  );
};

export default PDFViewer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Fragment } from 'react';
import Main from './src/navigation/Main';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

function App(): React.JSX.Element {
  return (
    <Fragment>
      <SafeAreaView style={styles.safeAreaView}>
        <Main />
      </SafeAreaView>
    </Fragment>
  );
}

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

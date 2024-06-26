/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Fragment } from 'react';
import Main from './src/navigation/Main';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Color from 'themes/Color';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <Fragment>
            <SafeAreaView style={styles.safeAreaView}>
              <StatusBar
                barStyle={
                  Platform.OS === 'android' ? 'light-content' : 'default'
                }
                backgroundColor={Color.primaryRed}
              />
              <Main />
            </SafeAreaView>
          </Fragment>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

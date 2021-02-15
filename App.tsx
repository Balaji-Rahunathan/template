/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
          <View style = {styles.scrollView}></View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;

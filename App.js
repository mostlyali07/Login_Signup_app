/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  number,
  onChangeNumber,
} from 'react-native/Libraries/NewAppScreen';


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: 'blue',
          }}>
          <Text style={[styles.highlight]}>WELCOME</Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
          }}>
          <Text style={[styles.highlightTwo]}>Login</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontSize: 30,
    marginTop: 200,
    margin: 50,
    fontWeight: '600',
    color: 'white',
  },
  highlightTwo: {
    fontSize: 30,
    margin: 50,
    fontWeight: '600',
    color: 'black',
  },
});

export default App;

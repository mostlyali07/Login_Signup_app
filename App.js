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
  text,
  password,
  Button,
  onChangeNumber,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const LogINNode = () => {
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
            backgroundColor: 'white', marginTop: '10',
          }}>
          <Text style={[styles.highlightTwo]}>Login</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={text}
            placeholder="Enter Email"
            keyboardType="text"
          />
          <TextInput
            style={styles.inputTwo}
            value={password}
            placeholder="Enter Password"
            keyboardType="password"
            secureTextEntry={true}
          />
          <View style={styles.ButtonOne}>
            <Button title="login" color="blue" borderRadius="50" />
          </View>
          <Text  style={styles.TextBottom}>Create an account? Sign Up</Text>
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
    marginBottom: 10,
    fontWeight: '600',
    color: 'black',
  },
  input: {
    marginBottom: 10,
    marginTop: 10,
    height: 40,
    margin: 50,
    borderWidth: 1,
    padding: 10,
  },
  inputTwo: {
    marginTop: 10,
    marginBottom: 10,
    height: 40,
    margin: 50,
    borderWidth: 1,
    padding: 10,
  },
  ButtonOne: {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 120,
    marginRight: 120,
  },
  TextBottom:{
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
  },
});

export default LogINNode;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, Text , Button} from 'react-native';
import{Provider} from 'react-redux';
import{store} from './src/redux/store';
import{useAppDispatch, useAppSelector} from './src/redux/hooks';
import { decrement, increment, reset } from './src/redux/slices/counterSlice';

const HomeScreen =() =>{
  const dispatch = useAppDispatch();
  const value =useAppSelector((state)=>state.counter.value);
  const isDarkMode =useColorScheme() =='dark';
  return(
    <View style={[styles.container, {backgroundColor: isDarkMode ? '#00' : '#fff'}]}>
      <StatusBar barStyle={isDarkMode ? 'light-content': 'dark-content'}/>
      <Text style={[styles.text, {color: isDarkMode ? '#fff': '#000'}]}>
        Counter value: {value}
      </Text>
      <View style={styles.buttonGroup}>
        <Button title="Increment" onPress={() => dispatch(increment())} />
        <Button title="Decrement" onPress={() => dispatch(decrement())} />
        <Button title="Reset" onPress={() => dispatch(reset())} />
      </View>
    </View>

  );
};
const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // center vertically
    alignItems: 'center',      // center horizontally
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    color: '#000',
  },
  buttonGroup: {
    gap: 12, // works in React Native 0.73+; otherwise use margin
  },
});

export default App;

import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainStack from './navigation/MainStack';

export default function App() {

  return (
    < SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center'
  },


});
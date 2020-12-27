import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  ImageBackground,
} from 'react-native';

//! pick one of thise backgrounds
import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.jpg';
import bg3 from './assets/bg3.jpg';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <ImageBackground source={bg3} style={styles.imagebackground}>
        <SafeAreaView style={styles.container}>
          <Text>Wind Converter</Text>
          <Text style={styles.copyright}>© 2020 Jakub Olejnik</Text>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  imagebackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    paddingTop: StatusBar.currentHeight,
    height: '100%',
    backgroundColor: 'rgba(1, 1, 1, 0.8)',
  },
  copyright: {
    position: 'absolute',
    bottom: 2,
    left: 2,
    color: 'gray',
    fontStyle: 'italic',
    fontSize: 11,
  },
});

export default App;

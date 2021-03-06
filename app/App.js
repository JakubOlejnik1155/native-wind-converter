/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import RNBootSplash from 'react-native-bootsplash';

import SpeedScreen from './Screens/SpeedScreen';
import LengthScreen from './Screens/LengthScreen';
import info from './assets/info.png';
//! pick one of thise backgrounds
import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.jpg';
import bg3 from './assets/bg3.jpg';

const initialLayout = {width: Dimensions.get('window').width};
const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'white'}}
    pressColor="rgba(1, 1, 1, 0.2)"
    style={{
      backgroundColor: 'transparent',
    }}
  />
);

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'speed', title: 'Speed'},
    {key: 'length', title: 'Length'},
  ]);

  const renderScene = SceneMap({
    speed: SpeedScreen,
    length: LengthScreen,
  });
  React.useEffect(() => {
    const SplashHandler = async () => {
      await RNBootSplash.hide({fade: true});
    };
    SplashHandler();
  });

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <ImageBackground source={bg2} style={styles.imagebackground}>
        <SafeAreaView style={styles.container}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
          />
          <Text style={styles.copyright}>© 2020 Jakub Olejnik</Text>
          {/* <TouchableOpacity style={styles.infobtn}>
            <Image source={info} style={styles.infoimg} />
          </TouchableOpacity> */}
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  infobtn: {
    position: 'absolute',
    bottom: 2,
    right: 2,
  },
  infoimg: {
    width: 20,
    height: 20,
  },
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

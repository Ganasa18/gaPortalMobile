import LottieView from 'lottie-react-native';
import React, {useEffect, useRef} from 'react';
import {NativeModules, Platform, StyleSheet, Text, View} from 'react-native';
const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const SplashScreen = ({navigation}) => {
  const animation = useRef(null);
  useEffect(() => {
    animation.current.play();
    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <LottieView
          ref={animation}
          source={require('./animation-mkd.json')}
          autoPlay
          style={{
            height: 120,
            width: 120,
            position: 'absolute',
            right: 60,
          }}
        />
        <View style={styles.containerTextLogo}>
          <Text style={styles.title}>General Affair Portal</Text>
          <Text style={styles.subtitle}>Department</Text>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    // position: 'relative',
    flex: 1,
    backgroundColor: '#2A4878',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: STATUSBAR_HEIGHT - 10,
  },
  containerLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTextLogo: {
    marginTop: 15,
    marginLeft: 50,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: '#FFF',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#FFF',
  },
});

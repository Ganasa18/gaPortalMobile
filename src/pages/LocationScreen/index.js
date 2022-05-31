import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  NativeModules,
  TouchableOpacity,
} from 'react-native';
const {StatusBarManager} = NativeModules;

// const SCREEN_WIDTH = Dimensions.get('window').width;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
import React from 'react';
import {Gap, TextInput} from '../../components';
import {IcBack, IcPt, IcSearch, IcSpbu} from '../../assets';

const LocationScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.containerSearch}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <View style={styles.containerBack}>
            <IcBack />
          </View>
        </TouchableOpacity>
        <TextInput
          placeholder={'PT/SPBU/...'}
          placeholderTextColor="#C2C2C2"
          icon={
            <IcSearch
              style={{padding: 10, position: 'absolute', right: 10, top: 30}}
            />
          }
        />
      </View>
      <Gap height={16} />
      <View style={styles.divider} />
      <Gap height={24} />
      <View style={styles.paddingRecent}>
        <Text style={styles.recentTitle}>Recent</Text>
        <Gap height={14} />
        <View style={styles.recentContainer}>
          <IcPt />
          <Gap width={22} />
          <View style={styles.recentContainerText}>
            <Text style={styles.title}>PT Jaya Jaya</Text>
            <Gap height={8} />
            <Text style={styles.subtitle}>
              Jl Merdeka 2 no 30, Duren sawit, Jakarta Timur
            </Text>
            <Gap height={16} />
          </View>
        </View>
        <View style={styles.recentContainer}>
          <IcSpbu />
          <Gap width={22} />
          <View style={styles.recentContainerText}>
            <Text style={styles.title}>SPBU Duren Sawit</Text>
            <Gap height={8} />
            <Text style={styles.subtitle}>
              Jl Merdeka 2 no 30, Duren sawit, Jakarta Timur
            </Text>
            <Gap height={16} />
          </View>
        </View>
        <View style={styles.recentContainer}>
          <IcPt />
          <Gap width={22} />
          <View style={styles.recentContainerText}>
            <Text style={styles.title}>MasterCard</Text>
            <Gap height={8} />
            <Text style={styles.subtitle}>
              8502 Preston Rd. Inglewood, Maine 98380
            </Text>
            <Gap height={16} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingBottom: 30,
    paddingTop: STATUSBAR_HEIGHT - 10,
  },

  containerSearch: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 34,
  },
  containerBack: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 5,
  },
  divider: {
    borderBottomColor: '#C2C2C2',
    borderBottomWidth: 0.5,
  },
  paddingRecent: {
    marginHorizontal: 24,
  },
  recentTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#444444',
  },
  recentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#C2C2C2',
    borderBottomWidth: 0.5,
    marginBottom: 16,
    marginTop: 16,
  },
  recentContainerText: {},
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#444444',
  },
  subtitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#444444',
    maxWidth: 250,
    lineHeight: 20,
  },
});

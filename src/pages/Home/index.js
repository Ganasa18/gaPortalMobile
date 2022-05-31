import {
  Text,
  View,
  ScrollView,
  TextInput as TextInputRN,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {IcCamera, IcSearch, Logo} from '../../assets';
import {Button, Gap, TextInput} from '../../components';
import {launchCamera} from 'react-native-image-picker';
import RNFS from 'react-native-fs';

const Home = ({navigation}) => {
  const [imageCamera, setImageCamera] = useState(null);

  const deleteFile = async () => {
    setImageCamera(null);
    const filepath = RNFS.ExternalDirectoryPath + '/MyTest.jpg';
    let exists = await RNFS.exists(filepath);
    if (exists) {
      await RNFS.unlink(filepath);
      console.log('File Deleted');
    } else {
      console.log('File Not Available');
    }
  };

  const locationSearch = () => {
    navigation.navigate('LocationScreen');
  };

  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };
    launchCamera(options, res => {
      if (res.didCancel) {
        console.log('User Cancelled Image Picker');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets[0];
        const newFilePath = RNFS.ExternalDirectoryPath + '/MyTest.jpg';
        // console.log(data);
        const filePath = res.assets[0].uri;
        setImageCamera(data);
        RNFS.moveFile(filePath, newFilePath)
          .then(() => {
            console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
          })
          .catch(err => {
            console.log('Error', err);
          });
      }
    });
  };

  return (
    <ScrollView style={styles.page}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Logo />
          <Text style={styles.logoName}>GA Odometer</Text>
        </View>
        <View style={styles.userProfile}>
          <Text style={styles.userProfileName}>B</Text>
        </View>
      </View>
      <Gap height={32} />
      <View style={styles.headerTitle}>
        <Text style={styles.welcomeTitle}>Welcome, Bima Ramdhan</Text>
        <Text style={styles.welcomeSubtitle}>Please fill this form</Text>
      </View>
      <Gap height={32} />
      <Text style={styles.titleMargin}>Upload camera *</Text>
      <View style={styles.headerPadding}>
        {imageCamera !== null ? (
          <>
            <View>
              <ImageBackground
                style={styles.imageShow}
                source={{uri: imageCamera.uri}}
                resizeMode="cover">
                <TouchableOpacity activeOpacity={0.7} onPress={openCamera}>
                  <View style={styles.containerCancel}>
                    <Text style={styles.textCancelButton}>Re Capture</Text>
                  </View>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          </>
        ) : (
          <>
            <TouchableOpacity activeOpacity={0.7} onPress={openCamera}>
              <View style={styles.containerCamera}>
                <IcCamera />
                <Text style={styles.labelCameraName}>Tap to open camera</Text>
              </View>
            </TouchableOpacity>
          </>
        )}
      </View>
      <Gap height={16} />
      <View style={styles.paddingOnly}>
        <TextInput
          label={'Odometer *'}
          placeholder={'Km...'}
          placeholderTextColor="#C2C2C2"
        />
      </View>
      <Gap height={16} />
      <View style={styles.paddingOnly}>
        <View>
          <TextInput
            label={'Location Name *'}
            placeholder={'PT/SPBU/...'}
            placeholderTextColor="#C2C2C2"
            icon={
              <TouchableOpacity activeOpacity={0.7} onPress={locationSearch}>
                <IcSearch
                  style={{
                    padding: 10,
                    position: 'absolute',
                    right: 10,
                    top: 0,
                  }}
                />
              </TouchableOpacity>
            }
          />
        </View>
      </View>
      <Gap height={16} />
      <View style={styles.paddingOnly}>
        <TextInput
          label={'Car *'}
          placeholder={'Car'}
          placeholderTextColor="#C2C2C2"
          icon={
            <IcSearch
              style={{padding: 10, position: 'absolute', right: 10, top: 30}}
            />
          }
        />
      </View>
      <Gap height={16} />
      <View style={styles.paddingOnly}>
        <Text style={styles.platTitle}>Plat No</Text>
        <View style={styles.containerPlatNo}>
          <TextInputRN
            style={styles.platOne}
            placeholder={'B'}
            maxLength={2}
            placeholderTextColor="#C2C2C2"
          />
          <TextInputRN
            style={styles.platTwo}
            placeholder={'1234'}
            placeholderTextColor="#C2C2C2"
            maxLength={6}
          />
          <TextInputRN
            style={styles.platThree}
            placeholder={'NYC'}
            placeholderTextColor="#C2C2C2"
            maxLength={3}
          />
        </View>
      </View>
      <Gap height={24} />
      <View style={styles.paddingOnly}>
        <Button text={'SUBMIT'} />
      </View>
      <Gap height={52} />
    </ScrollView>
  );
};

export default Home;

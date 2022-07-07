import {
  Text,
  View,
  ScrollView,
  TextInput as TextInputRN,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {
  IcBack,
  IcCamera,
  IcClose,
  IcSearch,
  IcSuccess,
  Logo,
} from '../../assets';
import {Button, Gap, ProgressComponent, TextInput} from '../../components';
import {launchCamera} from 'react-native-image-picker';
const SCREEN_WIDTH = Dimensions.get('window').width;
import RNFS from 'react-native-fs';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../redux/action';

const Home = ({navigation}) => {
  const [imageCamera, setImageCamera] = useState(null);
  const [modal, setModal] = useState(false);
  const [toast, setToast] = useState(false);

  const dispatch = useDispatch();

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

  const carsSearch = () => {
    navigation.navigate('CarsPage');
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

  const onSubmit = () => {
    setModal(true);
  };
  const submitForm = () => {
    setModal(false);
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 3000);
    }, 5000);
  };

  return (
    <ScrollView style={styles.page}>
      {/* Toast Success */}
      <Modal transparent visible={toast} animationType="slide">
        <View style={styles.toastModal}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => {
              setToast(false);
            }}>
            <View style={styles.toastModalClose}>
              <IcClose />
            </View>
          </TouchableOpacity>
          <View style={styles.toastModalBody}>
            <IcSuccess />
            <View style={styles.toastModalContent}>
              <Text style={styles.toastContentTitle}>Success</Text>
              <Text style={styles.toastContentSubtitle}>
                This form success to submit and the form will be sent to the
                admin dashboard
              </Text>
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal Confirm */}
      <Modal
        transparent
        visible={modal}
        animationType={'fade'}
        onRequestClose={() => setModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalPop}>
            <Text style={styles.modalText}>
              Have you correctly filled out this form?
            </Text>
            <View style={styles.footerModal}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setModal(false);
                }}>
                <View
                  style={{
                    ...styles.buttonModal,
                    borderEndWidth: 0.5,
                    borderEndColor: '#C2C2C2',
                  }}>
                  <Text style={styles.buttonModalText}>Cancel</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7} onPress={submitForm}>
                <View style={styles.buttonModal}>
                  <Text style={styles.buttonModalText}>Submit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <View style={styles.containerBack}>
            <IcBack />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerName}>Kilometer</Text>
      </View>
      <Gap height={32} />
      <ProgressComponent
        step={1}
        title={'Tempat Awal Berangkat'}
        subtitle={'Next Tempat Akhir Perjalanan'}
        border={0}
      />
      <Gap height={32} />
      {/* Input Camera */}
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
      {/* <Text>You must take a picture from camera</Text> */}
      <Gap height={16} />
      {/* Input Odometer */}
      <View style={styles.paddingOnly}>
        <TextInput
          label={'Odometer *'}
          placeholder={'Km...'}
          placeholderTextColor="#C2C2C2"
          keyboardType="phone-pad"
        />
      </View>
      <Gap height={16} />
      {/* Input Location */}
      <View style={styles.paddingOnly}>
        <View>
          <TextInput
            label={'Location Name *'}
            placeholder={'PT/SPBU/...'}
            placeholderTextColor="#C2C2C2"
            onPressIn={locationSearch}
            blurOnSubmit={false}
            icon={
              <TouchableOpacity activeOpacity={0.7} onPress={locationSearch}>
                <IcSearch
                  style={{
                    position: 'absolute',
                    right: 10,
                    top: 0,
                    padding: 10,
                  }}
                />
              </TouchableOpacity>
            }
          />
        </View>
      </View>
      <Gap height={16} />
      {/* Input Car */}
      <View style={styles.paddingOnly}>
        <TextInput
          label={'Car *'}
          placeholder={'Car'}
          placeholderTextColor="#C2C2C2"
          onPressIn={carsSearch}
          icon={
            <TouchableOpacity activeOpacity={0.7} onPress={carsSearch}>
              <IcSearch
                style={{
                  position: 'absolute',
                  right: 10,
                  top: 0,
                  padding: 10,
                }}
              />
            </TouchableOpacity>
          }
        />
      </View>
      <Gap height={16} />
      {/* Input Plat */}
      <View style={styles.paddingOnly}>
        <Text style={styles.platTitle}>Plat No</Text>
        <View style={styles.containerPlatNo}>
          <TextInputRN
            style={styles.platOne}
            placeholder={'B'}
            maxLength={2}
            placeholderTextColor="#C2C2C2"
            editable={false}
            value={''}
          />
          <TextInputRN
            style={styles.platTwo}
            placeholder={'1234'}
            placeholderTextColor="#C2C2C2"
            maxLength={6}
            editable={false}
            value={''}
          />
          <TextInputRN
            style={styles.platThree}
            placeholderTextColor="#C2C2C2"
            placeholder={'NYC'}
            maxLength={3}
            editable={false}
            value={''}
          />
        </View>
      </View>
      <Gap height={24} />
      <View style={styles.paddingOnly}>
        <Button text={'SUBMIT'} onPress={onSubmit} />
      </View>
      <Gap height={52} />
    </ScrollView>
  );
};

export default Home;

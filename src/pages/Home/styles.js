import {StyleSheet, Dimensions, Platform, NativeModules} from 'react-native';
const {StatusBarManager} = NativeModules;

const SCREEN_WIDTH = Dimensions.get('window').width;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingBottom: 30,
    paddingTop: STATUSBAR_HEIGHT,
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  logoContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoName: {
    marginLeft: -10,
    fontSize: 18,
    color: '#2A4878',
    fontFamily: 'Roboto-Medium',
  },
  userProfile: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: '#2A4878',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userProfileName: {
    fontWeight: 'bold',
    fontFamily: 'Roboto-Medium',
    fontSize: 22,
    color: '#FFFFFF',
  },
  headerTitle: {
    paddingHorizontal: 24,
    flexDirection: 'column',
  },
  welcomeTitle: {
    fontSize: 16,
    color: '#444444',
    marginBottom: 16,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#444444',
    fontWeight: 'bold',
    marginLeft: 2,
  },
  headerPadding: {
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleMargin: {
    paddingHorizontal: 24,
    marginLeft: 2,
    color: '#444444',
    marginBottom: 16,
  },

  containerCamera: {
    width: 312,
    height: 120,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#8D8D8D',
    backgroundColor: '#F3F8FF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  labelCameraName: {
    color: '#C2C2C2',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },

  containerImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageShow: {
    width: 312,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerCancel: {
    width: 133,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E45959',
  },

  textCancelButton: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
    alignItems: 'center',
    textAlign: 'center',
  },

  paddingOnly: {
    paddingHorizontal: 24,
  },

  containerPlatNo: {
    flex: 1,
    flexDirection: 'row',
  },

  platTitle: {
    marginBottom: 16,
    color: '#444444',
    fontFamily: 'Roboto-Regular',
  },
  platOne: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#C2C2C2',
    backgroundColor: '#F3F3F3',
    paddingVertical: 8,
    paddingHorizontal: 13,
    marginRight: 47,
    textAlign: 'center',
  },
  platTwo: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#C2C2C2',
    backgroundColor: '#F3F3F3',
    paddingVertical: 8,
    paddingHorizontal: 43,
    marginRight: 47,
    textAlign: 'center',
  },
  platThree: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#C2C2C2',
    backgroundColor: '#F3F3F3',
    paddingVertical: 8,
    paddingHorizontal: 13,
    textAlign: 'center',
  },
});
export default styles;

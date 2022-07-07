import styles from './styles';
import React, {useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, ScrollView, TouchableOpacity, Modal} from 'react-native';
import {
  BellMenu,
  IcClose,
  IcCloseModal,
  IcDrop,
  IcKm,
  IcVisit,
  Logo,
  OdoMenu,
} from '../../assets';
import {
  BottomModal,
  Button,
  Gap,
  ModalConfirm,
  ProgressComponent,
} from '../../components';
import Switch from 'react-native-switch-toggles-2';
import {RadioButton} from 'react-native-radio-buttons-group';
import MonthPicker from 'react-native-month-year-picker-inf';
import moment from 'moment';

const MenuScreen = ({navigation}) => {
  const dispatch = useDispatch();
  // const [isEnabled, setIsEnabled] = useState(true);
  // const [modalRemark, setModalRemark] = useState(false);
  // const [radioSelect, setRadioSelect] = useState(null);
  const {globalReducer} = useSelector(state => state);
  const radioSelect = globalReducer.isRemarkSelected;
  const isEnabled = globalReducer.isEnabled;
  const modalRemark = globalReducer.isModalRemark;
  const modalMonth = globalReducer.isModalMonth;
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const showPicker = useCallback(value => setShow(value), []);

  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || date;
      showPicker(false);
      setDate(selectedDate);
    },
    [date, showPicker],
  );

  // const modalConfirm = globalReducer.modalRemark

  const toggleSwitch = value => {
    if (value == false) {
      // dispatch({type: 'SET_MODAL_CONFIRM', value: true});
      dispatch({type: 'SET_MODAL_REMARK', value: true});
      dispatch({type: 'SET_IS_ENABLED', value: false});
      return;
    }
    // dispatch({type: 'SET_IS_ENABLED', value: true});
  };

  const bodyRemark = (
    <>
      <RadioButton
        label="Izin"
        value={'izin'}
        selected={radioSelect === 'izin' ? true : false}
        onPress={() => dispatch({type: 'SET_REMARK_SELECT', value: 'izin'})}
      />
      <Gap height={10} />
      <RadioButton
        label="Sakit"
        value={'sakit'}
        selected={radioSelect === 'sakit' ? true : false}
        onPress={() => dispatch({type: 'SET_REMARK_SELECT', value: 'sakit'})}
      />
      <Gap height={10} />
      <RadioButton
        label="Tidak ada visit"
        value={'no visit'}
        selected={radioSelect === 'no visit' ? true : false}
        onPress={() => dispatch({type: 'SET_REMARK_SELECT', value: 'no visit'})}
      />
      <Gap height={30} />
      <Button
        text={'SUBMIT'}
        onPress={() => {
          dispatch({type: 'SET_MODAL_CONFIRM', value: true});
        }}
      />
    </>
  );

  const bodyMonthSelect = (
    <>
      <View>
        <MonthPicker onChange={onValueChange} value={date} />
      </View>
    </>
  );

  return (
    <ScrollView style={styles.pages}>
      {/* Modal Remark */}
      <BottomModal
        body={bodyRemark}
        title="Remark"
        onRequestClose={() => {
          dispatch({type: 'SET_IS_ENABLED', value: true});
          dispatch({type: 'SET_MODAL_REMARK', value: false});
        }}
        onPress={() => {
          dispatch({type: 'SET_IS_ENABLED', value: true});
          dispatch({type: 'SET_MODAL_REMARK', value: false});
        }}
        visible={modalRemark}
      />
      {/* Confirm Remark */}
      <ModalConfirm
        title="Apakah anda yakin untuk menonaktifkan aplikasi ini?"
        subtitle="Jika sudah tidak aktif maka semua fitur tidak dapat digunakan"
        onCancel={() => dispatch({type: 'SET_MODAL_CONFIRM', value: false})}
      />
      {/* Modal Date */}
      {/* <BottomModal
        body={bodyMonthSelect}
        title="Choose month"
        visible={modalMonth}
        onRequestClose={() => {
          dispatch({type: 'SET_MONTH_SELECT', value: false});
        }}
        onPress={() => {
          dispatch({type: 'SET_MONTH_SELECT', value: false});
        }}
      /> */}

      {show && <MonthPicker onChange={onValueChange} value={date} />}

      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Logo />
          <Text style={styles.logoName}>GA Portal</Text>
        </View>
      </View>
      <Gap height={32} />
      {/* Switch On/Off */}
      <View style={styles.headerContainer}>
        <Text style={styles.welcomeTitle}>Welcome Eren Yeiger</Text>
        <Switch
          size={35}
          value={isEnabled}
          onChange={value => toggleSwitch(value)}
          activeTrackColor={'#45D058'}
          activeThumbColor={'#C8D8E2'}
          renderOffIndicator={() => (
            <Text style={{fontSize: 14, color: 'white', paddingRight: 4}}>
              OFF
            </Text>
          )}
          renderOnIndicator={() => (
            <Text style={{fontSize: 14, color: 'white', paddingRight: 4}}>
              ON
            </Text>
          )}
        />
      </View>
      <Gap height={32} />
      {/* Dashboard */}
      <View style={styles.containerDashboard}>
        <View style={styles.dasboard}>
          <View style={styles.dashboardTitleContainer}>
            <Text style={styles.titleDashboard}>Dashboard Saya</Text>
            <Gap height={20} />
            <Text style={styles.subTitleDashboard}>Total KM</Text>
            <Gap height={20} />
            <View style={styles.containerDetail}>
              <Text style={styles.subTitleDetail}>14000</Text>
              <Gap width={7} />
              <IcKm />
            </View>
          </View>
          <View
            style={{
              width: 2,
              backgroundColor: '#FFF',
              height: 100,
              marginTop: 5,
            }}></View>
          <View style={styles.dashboardTitleContainer2}>
            <View style={styles.dateSelect}>
              <TouchableOpacity
                style={styles.dateBorder}
                activeOpacity={0.4}
                onPress={() => {
                  showPicker(true);
                  // dispatch({type: 'SET_MONTH_SELECT', value: true});
                }}>
                <Text style={styles.titleDashboard}>
                  {moment(date).format('MMM-YYYY')}
                  {/* {moment(date, 'MM-YYYY')} */}
                </Text>
                <Gap width={7} />
                <IcDrop />
              </TouchableOpacity>
            </View>

            <Gap height={40} />
            <Text style={styles.subTitleDashboard}>Total Visit</Text>
            <Gap height={20} />
            <View style={styles.containerDetail}>
              <Text style={styles.subTitleDetail}>20</Text>
              <Gap width={7} />
              <IcVisit />
            </View>
          </View>
        </View>
      </View>
      <Gap height={32} />
      {/* Work Step */}
      <ProgressComponent
        step={1}
        title={'Tempat Awal Berangkat'}
        subtitle={'Next Tempat Akhir Perjalanan'}
      />
      <Gap height={28} />
      {/* Menu User */}
      <View style={styles.containerMenu}>
        <TouchableOpacity
          style={styles.cardMenu}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Kilometer')}>
          <OdoMenu />
          <Gap height={8} />
          <Text style={styles.menuTitle}>Kilometer</Text>
        </TouchableOpacity>
        <Gap width={74} />
        <View style={styles.cardMenu}>
          <BellMenu />
          <Gap height={8} />
          <Text style={styles.menuTitle}>Emergency</Text>
        </View>
      </View>
      {/* <View>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={onPressRadioButton}
          containerStyle={{flexDirection: 'row'}}
        />
      </View> */}
      <Gap height={80} />
    </ScrollView>
  );
};

export default MenuScreen;

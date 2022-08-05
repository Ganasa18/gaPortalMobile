import axios from 'axios';
import {API_HOST} from '../../config';
import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';
import {Platform} from 'react-native';

export const reportSubmit = (data, navigation) => async dispatch => {
  const imageFormData = new FormData();
  const dataImage = {
    name: data.img.fileName,
    type: data.img.type,
    uri:
      Platform.OS === 'ios'
        ? data.img.uri.replace('file://', '')
        : data.img.uri,
  };

  imageFormData.append('picture_odometer', dataImage);
  imageFormData.append('username', data?.user?.username);
  imageFormData.append('plate_car', data?.car?.value);
  imageFormData.append('car_name', data?.car?.model_vehicle);
  imageFormData.append('departement', data?.user?.departement_name);
  imageFormData.append('area', data?.user?.area_name);
  imageFormData.append('odometer', data?.odometer);

  const url = `${API_HOST.url}/report/`;
  await axios
    .post(url, imageFormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      dispatch({type: 'SET_COUNT_TODAY', value: 2});
      dispatch(setLoading(false));
      navigation.replace('SucessSubmit');
    })
    .catch(error => {
      console.log(error);
      showMessage(`Something went wrong`, 'danger');
    });
};

export const reportUpdateKm = (data, navigation) => async dispatch => {
  const imageFormData = new FormData();

  const dataImage = {
    name: data.img.fileName,
    type: data.img.type,
    uri:
      Platform.OS === 'ios'
        ? data.img.uri.replace('file://', '')
        : data.img.uri,
  };

  const url = `${API_HOST.url}/report/update-kilometer`;

  imageFormData.append('picture_odometer', dataImage);
  imageFormData.append('username', data?.data?.user_name);
  imageFormData.append('odometer', data?.odometer);

  await axios
    .patch(url, imageFormData, {
      headers: {'Content-Type': 'multipart/form-data'},
    })
    .then(response => {
      // console.log(response.data);
      dispatch({type: 'SET_COUNT_TODAY', value: 2});
      dispatch(setLoading(false));
      navigation.replace('SucessSubmit');
    })
    .catch(error => {
      console.log(error);
      showMessage(`Something went wrong`, 'danger');
    });
};

export const checkTodayKm = user => async dispatch => {
  const url = `${API_HOST.url}/report/today/${user}`;
  await axios
    .get(url)
    .then(response => {
      dispatch({type: 'SET_COUNT_TODAY', value: response?.data?.count});
    })
    .catch(error => {
      console.log(error);
      showMessage(`Something went wrong`, 'danger');
    });
};

export const checkTodayReport = user => async dispatch => {
  const url = `${API_HOST.url}/report/today/${user}`;
  await axios
    .get(url)
    .then(response => {
      if (response?.data?.count != 1) {
        dispatch({type: 'SET_REPORT', value: response?.data?.data?.check});
      }
    })
    .catch(error => {
      console.log(error);
      showMessage(`Something went wrong`, 'danger');
    });
};

import axios from 'axios';
import {API_HOST} from '../../config';
import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';

export const signInAction = (numberPhone, navigation) => async dispatch => {
  //   dispatch(setLoading(true));

  await axios
    .post(`${API_HOST.url}/user/login-mobile`, {
      phoneNumber: numberPhone,
    })
    .then(response => {
      storeData('token', {value: 'token'});
      //   console.log(response.data?.data?.user);
      storeData('userData', {value: response.data?.data?.data_user[0]});
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(error => {
      // console.log(error.response);
      showMessage(`Failure To Login`, 'danger');
    });
};
export const resignInAction = numberPhone => async dispatch => {
  await axios
    .post(`${API_HOST.url}/user/login-mobile`, {
      phoneNumber: numberPhone,
    })
    .then(response => {
      storeData('token', {value: 'token'});
      storeData('userData', {value: response.data?.data?.user});
    })
    .catch(error => {
      // console.log(error.response);
      showMessage(`Failure To Login`, 'danger');
    });
};

export const checkStatusUser = id_user => async dispatch => {
  await axios
    .get(`${API_HOST.url}/user/check-user-is-active/${id_user}`)
    .then(response => {
      const statusUser = response.data?.data?.status_user[0]?.is_active;
      dispatch({type: 'SET_IS_ENABLED', value: statusUser});
      dispatch({type: 'SET_USER_OFFLINE', value: statusUser});
      dispatch(setLoading(false));
    })
    .catch(error => {
      showMessage(`Failure To Check Status`, 'danger');
    });
};

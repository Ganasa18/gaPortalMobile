import React, {useState} from 'react';
import {
  Text,
  TextInput as TextInputRN,
  View,
  TouchableOpacity,
} from 'react-native';
import {Login} from '../../assets';
import {Button, Gap, TextInput} from '../../components';
import styles from './styles';

const LoginScreen = ({navigation}) => {
  const [option, setOption] = useState('driver');
  const [backgroundColor, setBackgroundColor] = useState('#C8D8E2');

  const loginOption = () => {
    if (option === 'driver') {
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    } else {
      navigation.replace('HomeAdmin');
    }
  };

  return (
    <View style={styles.container}>
      <Login style={styles.logo} />
      <Gap height={80} />
      <View style={styles.cardContainer}>
        <Text style={styles.titleCard}>
          Login For {option === 'driver' ? 'Driver' : 'Admin'}
        </Text>
        <Gap height={38} />

        {option === 'driver' ? (
          <>
            {/* For Driver */}
            <Text style={styles.label}>Phone Number</Text>
            {/* Input Number Driver */}
            <View style={styles.containerForm}>
              <View style={styles.codeCountry}>
                <Text style={styles.labelCountry}>+62</Text>
              </View>
              <TextInputRN
                style={{...styles.input, backgroundColor}}
                keyboardType="phone-pad"
                onBlur={() => setBackgroundColor('#C8D8E2')}
                onFocus={() => setBackgroundColor('#FFF')}
              />
            </View>
          </>
        ) : (
          <>
            {/* For Admin */}
            <TextInput label="Username" />
            <Gap height={16} />
            <TextInput label="Password" secureTextEntry />
          </>
        )}

        <Gap height={47} />
        <Button text={'Login'} onPress={loginOption} />
        <Gap height={40} />
        {/* Option Login */}
        <View style={styles.optionLoginContainer}>
          {option === 'driver' ? (
            <>
              <Text style={styles.labelOption}>Login For Admin ? </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  setOption('admin');
                }}>
                <View>
                  <Text style={styles.valueOption}>Login</Text>
                </View>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setOption('driver');
              }}>
              <View>
                <Text style={styles.valueOption}>Back</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
        <Gap height={46} />
      </View>
    </View>
  );
};

export default LoginScreen;

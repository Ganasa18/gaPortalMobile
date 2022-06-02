import {TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {IcBack, IcSearch} from '../../assets';
import {Gap, TextInput} from '../../components';

const CarsPage = ({navigation}) => {
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
          placeholder={'Car...'}
          placeholderTextColor="#C2C2C2"
          autoFocus={true}
          // onChangeText={text => setInput(text)}
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
        <Text style={styles.recentTitle}>All</Text>
        <Gap height={14} />
        <View style={styles.carContainer}>
          <Text style={styles.title}>Avanza</Text>
          <Text style={styles.subtitle}>B4324TKS</Text>
          <Gap height={16} />
        </View>
        <View style={styles.carContainer}>
          <Text style={styles.title}>Granmax</Text>
          <Text style={styles.subtitle}>B4324DHS</Text>
          <Gap height={16} />
        </View>
      </View>
    </View>
  );
};

export default CarsPage;

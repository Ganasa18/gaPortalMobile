import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {dummyPhoto, IcBack} from '../../assets';
import {Button, Gap, ItemValue} from '../../components';

const ProfileScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.page}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <View style={styles.containerBack}>
            <IcBack />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerName}>Profile</Text>
      </View>
      <View style={styles.photo}>
        <View style={styles.borderPhoto}>
          <Image source={dummyPhoto} style={styles.photoContainer} />
        </View>
      </View>
      <Gap height={16} />
      <ItemValue label={'First Name'} value={'Eren'} />
      <ItemValue label={'Last Name'} value={'Yeiger'} />
      <ItemValue label={'Department'} value={'Technician'} />
      <ItemValue label={'Area'} value={'Jakarta'} />
      <ItemValue label={'Car'} value={'Gran Max'} />
      <ItemValue label={'Plat NO'} value={'B4324BRT'} />
      <Gap height={32} />
      <View style={styles.paddingOnly}>
        <Button text={'Log Out'} onPress={() => {}} />
      </View>
      <Gap height={32} />
    </ScrollView>
  );
};

export default ProfileScreen;

import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
// import DateTimePicker from '@react-native-community/datetimepicker';
import {database} from '../configDB';
export default function Income({navigation}) {
  const [id, setId] = useState('2');
  const [note, setNote] = useState('');
  const [money, setMoney] = useState('');
  const [category, setCategory] = useState([
    {
      id: '1',
      name: 'Ăn uống',
      icon: 'fast-food-outline',
    },
    {
      id: '1',
      name: 'Ăn uống',
      icon: 'fast-food-outline',
    },
    {
      id: '1',
      name: 'Ăn uống',
      icon: 'fast-food-outline',
    },
    {
      id: '1',
      name: 'Ăn uống',
      icon: 'fast-food-outline',
    },
  ]);
  function input(id, note, money) {
    database()
  .ref('/user/1')
  .set({
    money: 'Ada Lovelace',
    note: 31,
  })
  .then(() => console.log('Data set.'));
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FormInput
        labelValue={note}
        onChangeText={(userNote) => setNote(userNote)}
        placeholderText="Ghi chú"
        iconType="newspaper-outline"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={money}
        onChangeText={(userPassword) => setMoney(userPassword)}
        placeholderText="Số tiền"
        iconType="cash-outline"
      />

      <FormButton buttonTitle="Nhập khoản thu" onPress={() => input()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});

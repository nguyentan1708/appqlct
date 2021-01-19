import React, {useContext, useState} from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import {database} from '../configDB';
import AddCategory from './AddCategory';
// import DateTimePicker from '@react-native-community/datetimepicker';

export default function Spending({navigation}) {
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

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

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
            <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={()=>console.log(date)} title="Show" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
      )}
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

      <FormButton buttonTitle="Nhập khoản chi" onPress={() => input()} />
      <FormButton buttonTitle="Nhập khoản chi" onPress={() => navigation.navigate(AddCategory)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  categoryCon: {
    margin: 20,
  },
  categoryWrap: {
    marginTop: 20,
  },
  category: {
    margin: 10,
    padding: 20,
    width: (windowWidth * 3) / 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },
  listItem: {
    width: windowWidth,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

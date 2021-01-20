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
import {windowHeight, windowWidth} from '../utils/Dimentions';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {Picker} from '@react-native-picker/picker';

function AddFixed({navigation}) {
  const [title, setTitle] = useState();
  const [money, setMoney] = useState('');
  const [category, setCategory] = useState('');
  const [selectedValue, setSelectedValue] = useState('java');
  return (
    <View style={styles.container}>
      <FormInput
        labelValue={title}
        onChangeText={(title) => setTitle(title)}
        placeholderText="Nhập tiêu đề"
        iconType="person-outline"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={money}
        onChangeText={(money) => setMoney(money)}
        placeholderText="Nhập số tiền"
        iconType="cash-outline"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.containerRepeat}>
        <Text style={styles.text}>Lặp lại</Text>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Hàng ngày" value="Hàng ngày" />
          <Picker.Item label="Hàng tuần" value="Hàng tuần" />
          <Picker.Item label="Hàng tháng" value="Hàng tháng" />
          <Picker.Item label="Hàng năm" value="Hàng năm" />
        </Picker>
      </View>

      <View style={styles.containerRepeat}>
        <Text style={styles.text}>Bắt đầu</Text>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Hàng ngày" value="Hàng ngày" />
          <Picker.Item label="Hàng tuần" value="Hàng tuần" />
          <Picker.Item label="Hàng tháng" value="Hàng tháng" />
          <Picker.Item label="Hàng năm" value="Hàng năm" />
        </Picker>
      </View>
      <View style={styles.containerRepeat}>
        <Text style={styles.text}>Kết thúc</Text>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Hàng ngày" value="Hàng ngày" />
          <Picker.Item label="Hàng tuần" value="Hàng tuần" />
          <Picker.Item label="Hàng tháng" value="Hàng tháng" />
          <Picker.Item label="Hàng năm" value="Hàng năm" />
        </Picker>
      </View>
    </View>
  );
}

export default AddFixed;
const styles = StyleSheet.create({
  container: {},
  containerRepeat: {
    flexDirection: 'row',
    height: windowHeight / 15,
    borderColor: 'black',
    alignItems:"center",
    borderTopWidth:3,
    borderBottomWidth:3,
    borderColor:'#DADADA',
  },
  text:{
    flex:1,
    fontSize:16,
  },
  picker: {
      flex:3,
  },
});

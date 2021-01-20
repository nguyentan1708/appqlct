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
import SocialButton from '../components/SocialButton';

function AddFixed({navigation}) {
  const [title, setTitle] = useState();
  const [money, setMoney] = useState('');
  const [category, setCategory] = useState('');
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
      

    </View>
  );
}

export default AddFixed;
const styles=StyleSheet.create({
    container:{},
})


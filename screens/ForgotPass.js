import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import auth from '@react-native-firebase/auth';

function ForgotPass({navigation}) {
  const [email, setEmail] = useState();
  const forgotPassword = (email) => {
    auth().sendPasswordResetEmail(email)
      .then(function (user) {
        Alert.alert(
            'Quên mật khẩu',
            'Hãy kiểm tra lại email của bạn',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
              {text: 'Đăng nhập', onPress: () => navigation.navigate("Login")},
            ],
            {cancelable: false},
          );
      }).catch(function (e) {
        console.log(e)
      })
  };
  return (
    <View style={styles.container}>
      <Image source={require('../assets/piggy-bank.png')} style={styles.logo} />
      <Text style={styles.text}>Quên mật khẩu?</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Nhập email"
        iconType="person-outline"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormButton
        buttonTitle="Tiếp tục"
        onPress={() => forgotPassword(email)}
      />
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>Đăng nhập?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>Đăng ký?</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ForgotPass;

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
});

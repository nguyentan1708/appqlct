import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet,Image,ScrollView,Alert} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
// import {AuthContext} from '../navigation/AuthProvider';
import auth from '@react-native-firebase/auth';
function SignupScreen({navigation}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  function confirmPass(){
    if(password!=confirmPassword){
      Alert.alert(
        'Đăng ký',
        'Mật khẩu xác nhận không trùng với mật khẩu đã nhập!',
        [
          {
            text: 'Cancel',
            onPress:()=>navigation.navigate('Signup'),
            style: 'cancel',
          },
          {text: 'OK', onPress:()=>navigation.navigate('Signup')},
        ],
        {cancelable: false},
      );
    } else signup();
  }
  
  // Hàm đăng ký
  function signup() {
    if (password != confirmPassword) {
      Alert.alert(
        'Đăng ký',
        'Mật khẩu xác nhận không trùng với mật khẩu đã nhập!',
        [
          {
            text: 'Cancel',
            onPress: () => navigation.navigate('Signup'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => navigation.navigate('Signup')},
        ],
        {cancelable: false},
      );
    } else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() =>
          Alert.alert(
            'Đăng ký',
            'Đăng ký tài khoản thành công! Vui lòng quay lại đăng nhập!',
            [
              {
                text: 'Cancel',
                onPress: () => navigation.navigate('Signup'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => navigation.navigate('Login')},
            ],
            {cancelable: false},
          ),
        )
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/piggy-bank.png')} style={styles.logo} />
      
      <Text style={styles.text}>Tạo tài khoản mới</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Nhập email"
        iconType="person-outline"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Nhập mật khẩu"
        iconType="lock-closed-outline"
        secureTextEntry={true}
      />

      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText="Xác nhận mật khẩu"
        iconType="lock-closed-outline"
        secureTextEntry={true}
      />

      <FormButton buttonTitle="Đăng ký" onPress={() => signup()} />

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Đăng ký với Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}
          />

          <SocialButton
            buttonTitle="Đăng ký với Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>Đã có tài khoản? Đăng nhập</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default SignupScreen;

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: '#f9fafd',
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   padding: 20,
  // },
  // logo: {
  //   height: 150,
  //   width: 150,
  //   resizeMode: 'cover',
  // },

  // text: {
  //   fontFamily: 'Kufam-SemiBoldItalic',
  //   fontSize: 28,
  //   marginBottom: 10,
  //   color: '#051d5f',
  // },
  // navButton: {
  //   marginTop: 15,
  // },
  // navButtonText: {
  //   fontSize: 18,
  //   fontWeight: '500',
  //   color: '#2e64e5',
  //   fontFamily: 'Lato-Regular',
  // },
  // textPrivate: {
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   marginVertical: 35,
  //   justifyContent: 'center',
  // },
  // color_textPrivate: {
  //   fontSize: 13,
  //   fontWeight: '400',
  //   fontFamily: 'Lato-Regular',
  //   color: 'grey',
  // },

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

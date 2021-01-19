import * as React from 'react';
import {Button, Text, View,StyleSheet} from 'react-native';
import FormButton from '../components/FormButton';
// import {AuthContext} from '../navigation/AuthProvider';
import auth from '@react-native-firebase/auth';
export default function SettingScreen({navigation}) {
  function logout() {
  auth()
  .signOut()
  .then(() => console.log('User signed out!'));
  }
  return (
    <View style={styles.container}>
      <FormButton buttonTitle="Đăng xuất" onPress={logout} />
    </View>
  );
}

const styles=StyleSheet.create({
  container:{

  },
})
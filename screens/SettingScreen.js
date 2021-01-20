import * as React from 'react';
import {Button, Text, View,StyleSheet} from 'react-native';
import FormButton from '../components/FormButton';
// import {AuthContext} from '../navigation/AuthProvider';
import auth from '@react-native-firebase/auth';
import AddCategory from './AddCategory';
import {createStackNavigator} from '@react-navigation/stack';
import FormSetting from '../components/FormSetting'

function Main({navigation}){
  function logout() {
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));
    }
  return (
    <View style={styles.container}>
      <FormButton buttonTitle="Thêm danh mục" onPress={() => navigation.navigate('AddCategory')}/>
      <FormSetting title="form button"/>
      <FormButton buttonTitle="Đăng xuất" onPress={logout} />
    </View>
  )
}

const stackSetting = createStackNavigator();

export default function SettingScreen({navigation}) {
    return (
      <stackSetting.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: true,
        }}
        >
        <stackSetting.Screen name="Main" component={Main} />
        <stackSetting.Screen 
        name="AddCategory" 
        component={AddCategory}/>
      </stackSetting.Navigator>
    )
}

const styles=StyleSheet.create({
  container:{

  },
})
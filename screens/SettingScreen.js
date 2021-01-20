import * as React from 'react';
import {Button, Text, View, StyleSheet, Alert} from 'react-native';
import FormButton from '../components/FormButton';
// import {AuthContext} from '../navigation/AuthProvider';
import auth from '@react-native-firebase/auth';
import AddCategory from './AddCategory';
import {createStackNavigator} from '@react-navigation/stack';
import FormSetting from '../components/FormSetting';
import MoneyFixed from './MoneyFixed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddFixed from './AddFixed';
import {Messaging,requestUserPermission} from './Messaging';
// import {NavigationContainer} from '@react-navigation/native';
function Main({navigation}) {
  function logout() {
    Alert.alert(
      'Đăng xuất',
      'Bạn có muốn đăng xuất?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => auth().signOut()},
      ],
      {cancelable: false},
    );
  }
  return (
    <View style={styles.container}>
      <FormSetting
        title="Thêm danh mục"
        onPress={() => navigation.navigate('AddCategory')}
      />
      <FormSetting title="Chi phí cố định"
      onPress={()=> navigation.navigate('Chi phí cố định')} />
      <FormSetting 
      title="Đăng xuất" 
      onPress={logout} />
      <FormSetting 
      title="Thông báo nhắc nhở" 
      onPress={() => requestUserPermission()} />
    </View>
  );
}

const stackSetting = createStackNavigator();

export default function SettingScreen({navigation}) {
  return (
    <stackSetting.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: true,
      }}>
      <stackSetting.Screen 
      name="Cài đặt" 
      component={Main}
      options={{
        headerTitleStyle:{
          textAlign:"center",
          flex:1,
        }}} 
        />
      <stackSetting.Screen name="AddCategory" component={AddCategory} />
      <stackSetting.Screen
      name="Chi phí cố định" 
      component={MoneyFixed}
      options={{
        headerTitleStyle:{
          textAlign:"center",
          flex:1,
        },
        headerLeft:()=>(
          <TouchableOpacity
          style={styles.buttonAdd}
          onPress={()=>navigation.navigate("Cài đặt")}>
            <Ionicons name="arrow-back-outline" color="blue" style={styles.icon}/>
          </TouchableOpacity>
        ),
        headerRight:()=>(
          <TouchableOpacity
          style={styles.buttonAdd}
          onPress={()=>navigation.navigate("Thêm chi phí cố định")}>
            <Ionicons name="add-outline" color="blue" style={styles.icon}/>
          </TouchableOpacity>
        ),
      }}
      />
       <stackSetting.Screen
      name="Thêm chi phí cố định" 
      component={AddFixed}
      options={{
      headerTitleStyle:{
          textAlign:"center",
          flex:1,
        },
        headerLeft:()=>(
          <TouchableOpacity
          style={styles.buttonAdd}
          onPress={()=>navigation.navigate('Chi phí cố định')}>
            <Ionicons name="arrow-back-outline" color="blue" style={styles.icon}/>
          </TouchableOpacity>
        ),
        headerRight:()=>(
          <TouchableOpacity
          style={styles.buttonAdd}
          onPress={()=>console.log("alo")}>
            <Ionicons name="add-outline" color="blue" style={styles.icon}/>
          </TouchableOpacity>
        ),
      }}
      />
    </stackSetting.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
  buttonAdd:{
    flex:1,
    width:60,
    alignItems:"center",
    justifyContent:'center',
  },
  icon:{
    fontSize:30,
  },
});

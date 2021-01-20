import * as React from 'react';
import {Button, Text, View, StyleSheet, Alert} from 'react-native';
import FormButton from '../components/FormButton';
// import {AuthContext} from '../navigation/AuthProvider';
import auth from '@react-native-firebase/auth';
import AddCategory from './AddCategory';
import {createStackNavigator} from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddFixed from './AddFixed';


function Main({navigation}) {
    return (
      <View style={styles.container}>

      </View>
    );
  }
  const stackFixed = createStackNavigator();

export default function MoneyFixed({navigation}) {
  return (
    // <stackFixed.Navigator >
    //   <stackFixed.Screen
    //   name="Thêm chi phí cố định" 
    //   component={AddFixed}
    //   options={{
    //   headerTitleStyle:{
    //       textAlign:"center",
    //       flex:1,
    //     },
    //     headerLeft:()=>(
    //       <TouchableOpacity
    //       style={styles.buttonAdd}
    //       onPress={()=>navigation.navigate('Chi phí cố định')}>
    //         <Ionicons name="arrow-back-outline" color="blue" style={styles.icon}/>
    //       </TouchableOpacity>
    //     ),
    //     headerRight:()=>(
    //       <TouchableOpacity
    //       style={styles.buttonAdd}
    //       onPress={()=>console.log("alo")}>
    //         <Ionicons name="add-outline" color="blue" style={styles.icon}/>
    //       </TouchableOpacity>
    //     ),
    //   }}
    //   />
    // </stackFixed.Navigator>
  <View></View>
    )
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

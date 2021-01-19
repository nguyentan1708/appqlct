import * as React from 'react';
import {Button, FlatList, Text, View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useState} from 'react';
import {set} from 'react-native-reanimated';
import FormButton from '../components/FormButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {windowHeight, windowWidth} from '../utils/Dimentions';
import firestore from '@react-native-firebase/firestore';
import FormInput from '../components/FormInput';
import {useEffect} from 'react';
import '@react-native-firebase/firestore';

export default function CategoryScreen({navigation}) {
  const [category, setCategory] = React.useState([
    {
      id: '1',
      name: 'Công việc',
      icon: 'home-outline',
    },
    {
      id: '2',
      name: 'Ăn uống',
      icon: 'fast-food-outline',
    },
    {
      id: '3',
      name: 'Ăn chơi',
      icon: 'calendar-outline',
    },
  ]);
  function Edit() {
      
  }
  return (
    <View style={styles.categoryWrapper}>
      <Text style={styles.textCategory}>Danh mục</Text>
      <FlatList
        style={styles.listItem}
        data={category}
        numColumns="3"
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style={styles.categoryItem}>
            <View style={styles.category}>
              <Ionicons name={item.icon} style={styles.icon} />
              <Text style={styles.text}>{item.name}</Text>
            </View>
            {/* <View>
                <Ionicons name='add' style={styles.icon}/>
                <Text style={styles.text}>Chỉnh sửa</Text>
            </View> */}
          </View>
        )}
        style={styles.categoryWrap}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  categoryWrapper: {
    margin: 20,
  },
  textCategory: {

  },
  categoryItem: {
    flex:1,
    flexDirection:'row',
    backgroundColor: '#f8f8ff',
  },
  category: {
    flex:1,
    flexDirection:'column',
    margin: 20,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#dcdcdc',
    backgroundColor: '#fffaf0',
  },
  listItem: {
    width: windowWidth,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  icon: {
    fontSize: 24,
    color: 'pink',
  },
  text: {},
});

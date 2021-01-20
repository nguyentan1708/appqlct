import React, {useState, useEffect} from 'react';
import {
  Button,
  FlatList,
  Text,
  View,
  StyleSheet,
  VirtualizedList,
  SafeAreaView,
} from 'react-native';
import FormButton from '../components/FormButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {windowHeight, windowWidth} from '../utils/Dimentions';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import {firebase, auth} from '@react-native-firebase/auth';

export default function AddCategory({navigation}) {
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [color, setColor] = useState('floralwhite');
  const ICON = [
    {
      id: '1',
      icon: 'home-outline',
    },
    {
      id: '2',
      icon: 'alarm-outline',
    },
    {
      id: '3',
      icon: 'airplane-outline',
    },
    {
      id: '4',
      icon: 'home-outline',
    },
    {
      id: '5',
      icon: 'alarm-outline',
    },
    {
      id: '6',
      icon: 'airplane-outline',
    },
    {
      id: '7',
      icon: 'home-outline',
    },
    {
      id: '8',
      icon: 'alarm-outline',
    },
    {
      id: '9',
      icon: 'airplane-outline',
    },
    {
      id: '10',
      icon: 'home-outline',
    },
    {
      id: '11',
      icon: 'alarm-outline',
    },
    {
      id: '12',
      icon: 'airplane-outline',
    },
    {
      id: '13',
      icon: 'home-outline',
    },
    {
      id: '14',
      icon: 'alarm-outline',
    },
    {
      id: '15',
      icon: 'airplane-outline',
    },
    {
      id: '16',
      icon: 'home-outline',
    },
    {
      id: '17',
      icon: 'alarm-outline',
    },
    {
      id: '18',
      icon: 'airplane-outline',
    },
    {
      id: '19',
      icon: 'home-outline',
    },
    {
      id: '20',
      icon: 'alarm-outline',
    },
    {
      id: '21',
      icon: 'airplane-outline',
    },
    {
      id: '22',
      icon: 'home-outline',
    },
    {
      id: '23',
      icon: 'alarm-outline',
    },
    {
      id: '24',
      icon: 'airplane-outline',
    },
    {
      id: '25',
      icon: 'home-outline',
    },
    {
      id: '26',
      icon: 'alarm-outline',
    },
    {
      id: '27',
      icon: 'airplane-outline',
    },
    {
      id: '28',
      icon: 'airplane-outline',
    },
    {
      id: '29',
      icon: 'airplane-outline',
    },
    {
      id: '30',
      icon: 'airplane-outline',
    },
    {
      id: '31',
      icon: 'airplane-outline',
    },
    {
      id: '32',
      icon: 'airplane-outline',
    },
    {
      id: '33',
      icon: 'airplane-outline',
    },
  ];
  const COLOR = [
    {
      id: '1',
      color: 'floralwhite',
    },
    {
      id: '2',
      color: 'gainsboro',
    },
    {
      id: '3',
      color: 'gray',
    },
    {
      id: '4',
      color: 'honeydew',
    },
    {
      id: '5',
      color: 'khaki',
    },
    {
      id: '6',
      color: 'lightcyan',
    },
    {
      id: '7',
      color: 'lightgreen',
    },
    {
      id: '8',
      color: 'lightskyblue',
    },
    {
      id: '9',
      color: 'mintcream',
    },
    {
      id: '10',
      color: 'floralwhite',
    },
    {
      id: '11',
      color: 'gainsboro',
    },
    {
      id: '12',
      color: 'gray',
    },
    {
      id: '13',
      color: 'honeydew',
    },
    {
      id: '14',
      color: 'khaki',
    },
    {
      id: '15',
      color: 'lightcyan',
    },
    {
      id: '16',
      color: 'lightgreen',
    },
    {
      id: '17',
      color: 'lightskyblue',
    },
    {
      id: '18',
      color: 'mintcream',
    },
    {
      id: '19',
      color: 'floralwhite',
    },
    {
      id: '20',
      color: 'gainsboro',
    },
    {
      id: '21',
      color: 'gray',
    },
    {
      id: '22',
      color: 'honeydew',
    },
    {
      id: '23',
      color: 'khaki',
    },
    {
      id: '24',
      color: 'lightcyan',
    },
    {
      id: '25',
      color: 'lightgreen',
    },
    {
      id: '26',
      color: 'lightskyblue',
    },
    {
      id: '27',
      color: 'mintcream',
    },
    {
      id: '28',
      color: 'floralwhite',
    },
    {
      id: '29',
      color: 'gainsboro',
    },
    {
      id: '30',
      color: 'gray',
    },
    {
      id: '31',
      color: 'honeydew',
    },
    {
      id: '32',
      color: 'khaki',
    },
    {
      id: '33',
      color: 'lightcyan',
    },
  ];
  // const Item = ({item, onPress, color}) => (
  //   <View style={styles.categoryItem}>
  //     <ScrollView style={styles.category}>
  //       <TouchableOpacity onPress={onPress} style={styles.icon}>
  //         <Ionicons name={item.icon} color={color} style={styles.itemIcon} />
  //       </TouchableOpacity>
  //     </ScrollView>
  //   </View>
  // );

  // const renderItem = ({item}) => {
  //   const backgroundColor = item.id === icon ? '#6e3b6e' : '#f9c2ff';

  //   return (
  //     <Item
  //       item={item}
  //       onPress={() => setIcon(item.id)}
  //       color={{backgroundColor}}
  //     />
  //   );
  // };
<<<<<<< HEAD
  // function pushData({name,icon,color}) {
  //   database().ref('/category').push().set({
  //     name:name,
  //     icon:icon,
  //     color:color
  //   }).then((result)=>alert(
  //     'Alert Title',
  //     'My Alert Msg',
  //     [
  //       {
  //         text: 'Ask me later',
  //         onPress: () => console.log('Ask me later pressed')
  //       },
  //       {
  //         text: 'Cancel',
  //         onPress: () => console.log('Cancel Pressed'),
  //         style: 'cancel'
  //       },
  //       { text: 'OK', onPress: () => console.log('OK Pressed') }
  //     ],
  //     { cancelable: false }
  //   ))
  // }
  // useEffect(() => {
  //   const onValueChange = database()
  //     .ref(`/user/${userId}`)
  //     .on('value', snapshot => {
  //       console.log('User data: ', snapshot.val());
  //     });

  //   // Stop listening for updates when no longer required
  //   return () =>
  //     database()
  //       .ref(`/users/${userId}`)
  //       .off('value', onValueChange);
  // }, [userId]);
=======

  function pushData() {
    const user = firebase.auth().currentUser;
    database()
      .ref(`/user/${user.uid}/category`)
      .push()
      .set({
        name,
        color,
        icon,
      })
      .then((result) => {
        console.log(result,"Thành công")
        alert(
          'Alert Title',
          'My Alert Msg',
          [
            {
              text: 'Ask me later',
              onPress: () => console.log('Ask me later pressed'),
            },
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );
      });
  }

>>>>>>> origin/main
  return (
    <View style={styles.container}>
      <View styte={styles.containerInput}>
        <Text style={styles.textInput}>Tên</Text>
        <TextInput
          value={name}
          style={styles.inputField}
          placeholder="Tên danh mục"
          onChangeText={(name) => setName(name)}
          placeholderTextColor="black"
        />
      </View>
      <View style={styles.containerIcon}>
        <Text style={styles.textIcon}>Biểu tượng</Text>
        <FlatList
          data={ICON}
          numColumns="4"
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <View style={styles.iconItemWrap}>
              <ScrollView style={styles.category}>
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => {setIcon(item.icon)}}>
                  <Ionicons
                    name={item.icon}
                    color={color}
                    style={styles.itemIcon}
                  />
                </TouchableOpacity>
              </ScrollView>
            </View>
          )}
          extraData={icon}
        />
      </View>
      <View style={styles.containerColor}>
        <Text style={styles.text}>Màu sắc</Text>
        <FlatList
          data={COLOR}
          numColumns="4"
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <View style={styles.categoryItem}>
              <ScrollView style={styles.color}>
                <TouchableOpacity onPress={() => setColor(item.color)}>
                  <View
                    backgroundColor={item.color}
                    style={styles.itemColor}></View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          )}
          style={styles.categoryWrap}
        />
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.textButtonWrap}
          onPress={() => pushData()}>
          <Text style={styles.textButton}>Lưu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  containerInput: {
    flex: 2,
    borderWidth: 2,
    borderColor: 'black',
  },
  textInput: {},
  inputField: {},
  text: {},
  containerIcon: {
    flex: 4,
    borderWidth: 2,
    borderColor: 'black',
  },
  containerColor: {
    flex: 4,
    borderWidth: 2,
    borderColor: 'black',
  },
  categoryWrapper: {
    margin: 20,
  },
  textCategory: {},
  categoryItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f8f8ff',
  },
  category: {
    flex: 1,
    flexDirection: 'column',
    margin: 20,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#dcdcdc',
    backgroundColor: '#fffaf0',
  },
  itemIcon: {
    fontSize: 24,
    color: 'pink',
  },
  itemColor: {
    margin: 20,
    borderRadius: 50,
    height: 40,
    width: 40,
  },
  text: {
    fontSize: 20,
  },
  iconItemWrap: {
    flex: 1,
  },
  containerButton: {
    flex: 1,
    backgroundColor: 'lightskyblue',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 10,
  },
  textButtonWrap: {
    flex: 1,
  },
  textButton: {
    fontSize: 24,
  },
});

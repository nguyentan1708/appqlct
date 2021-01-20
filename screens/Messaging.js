import React,{useEffect} from 'react';
import {

} from 'react-native';
import messaging from '@react-native-firebase/messaging';

   function Messaging(){
    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
          Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });
    
        return unsubscribe;
      }, []);
}

export default Messaging;

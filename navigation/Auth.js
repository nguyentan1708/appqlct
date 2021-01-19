import React,{useState,useEffect,useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthNavigation} from './AuthNavigation';
import {MainNavigation} from './MainNavigation';
// import {AuthContext} from './AuthProvider';
// import { GoogleSignin } from '@react-native-community/google-signin';


export default function Auth() {
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);
  // GoogleSignin.configure({
  //   webClientId: '831035125150-5m07aevhjikps5j5kta4pnbngphqovse.apps.googleusercontent.com',
  // });
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}



// const Auth = {
//   light: {
//     foreground: "pink",
//     background: "green"
//   },
//   dark: {
//     foreground: "gray",
//     background: "red"
//   }
// };

// const ThemeContext = React.createContext(themes.light);

// function App() {
//   return (
//     <ThemeContext.Provider value={themes.dark}>
//       <Toolbar />
//     </ThemeContext.Provider>
//   );
// }

// function Toolbar(props) {
//   return (
//     <View>
//       <ThemedButton />
//     </View>

//   );
// }

// function ThemedButton() {
//   const theme = useContext(ThemeContext);
//   return (
//      <View style={{height:200,width:200, backgroundColor: theme.background, color: theme.foreground }} >
//       <Text>Hello world</Text>
//     </View>
//   );
// }



import React,{useState,useEffect} from 'react';
import {View, Button, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';



function App() {
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  async function onGoogleButtonPress() {
  
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    GoogleSignin.configure({
      webClientId: '831035125150-5m07aevhjikps5j5kta4pnbngphqovse.apps.googleusercontent.com',
    });
    return subscriber;
  }, []);
  
  if (initializing) return null;
  
  return (
    <View>
              <Button
    title="Google Sign-In"
    onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    />
    </View>
  );
}

export default App;

/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
// import test from './test';
import Auth from './navigation/Auth';
// import App from './test';

// import CategoryScreen from './screens/CategoryScreen';
AppRegistry.registerComponent(appName, () => Auth);

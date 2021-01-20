import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AddCategory from './AddCategory';
import SpendingScreen from './SpendingScreen';
import IncomeScreen from './IncomeScreen';
import SettingScreen from './SettingScreen';
const Stack = createStackNavigator();

export default function InOutScreen({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Spending"
      screenOptions={{
        headerShown: true,
      }}
      >
      <Stack.Screen name="AddCategory" component={AddCategory} />
      <Stack.Screen 
      name="Spending" 
      component={SpendingScreen} 
      options={{
        headerRight:()=>(
          <Button
          onPress={() => navigation.navigate('Income')}
          title="Thu"
          color="#00cc00"
          />
        ),
      }}
      />
      <Stack.Screen 
      name="Income" 
      component={IncomeScreen} />
      <Stack.Screen
      name="Setting"
      component={SettingScreen}/>
    </Stack.Navigator>
  );
}

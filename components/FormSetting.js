import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';

function FormSetting({title, ...rest}){
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FormSetting;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#ffffff',
    padding: 10,
    justifyContent: 'center',
    borderTopWidth:3,
    borderBottomWidth:3,
    borderColor:'#DADADA',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3B3B3B',
    fontFamily: 'Lato-Regular',
  },
});
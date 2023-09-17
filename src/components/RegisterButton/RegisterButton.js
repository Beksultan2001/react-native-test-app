import React from 'react';
import { TouchableOpacity,Text } from 'react-native';
import styles from './styles';

function RegisterButton({onPress,title}) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
  )
}

export default RegisterButton;
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Favorite from '../../../assets/icons/Favorite';
import styles from './styles';

function FavoriteButton({opacity}) {
  return (
    <TouchableOpacity style={[styles.heart,opacity && styles.shadow]}>
    <Favorite />
  </TouchableOpacity>
  )
}

export default FavoriteButton;
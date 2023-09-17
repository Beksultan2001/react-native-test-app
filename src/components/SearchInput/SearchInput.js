import React,{Fragment} from 'react';
import {View, TextInput, TouchableOpacity} from "react-native";
import SearchIcon from '../../../assets/icons/Search';
import Settings from '../../../assets/icons/Settings';
import styles from './styles';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

function SearchInput({label,filter}) {
  return (
      <View style={styles.container}>
        <View style={styles.search}>
          <SearchIcon />
            <TextInput style={styles.textInput} placeholder={label}  />
            <TouchableOpacity style={styles.settings}>
              {filter && (
                <Fragment>
                  <View style={styles.line} ></View>
                  <Settings />
                </Fragment>
              )}
            </TouchableOpacity>
          </View>
          <FavoriteButton />
      </View>
  )
}

export default SearchInput;
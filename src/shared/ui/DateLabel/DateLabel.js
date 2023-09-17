import React, {useState,useRef,useEffect} from "react";
import {View,Image,TouchableOpacity,Text,Dimensions, ScrollView} from "react-native";
import styles from "./styles";


export default function DateLabel({label,description,border}) {

  return (
    <View style={[styles.container,border && styles.border]}>
        <Text style={styles.label}>Дата проведения</Text>
        <View style={styles.description}>
          <Text>2 августа, 10:00 - 21:00</Text>
        </View>
    </View>
  );
}

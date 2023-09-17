import React, {useState,useRef,useEffect} from "react";
import {View,Image,TouchableOpacity,Text,Dimensions, ScrollView} from "react-native";
import styles from "./styles";


export default ({title,description,border}) => (
    <View style={[styles.container,border && styles.border]}>
        <Image style={styles.img} source={require('../../../../assets/avatar1.png')}/>
        <Text style={styles.title}>Ария Белова</Text>
        <Text style={styles.subtitle}>Автор</Text>
    </View>
)

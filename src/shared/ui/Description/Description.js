import React from "react";
import {View,Image,Text} from "react-native";
import styles from "./styles";


export default function Description({title,description,border,img}) {
  return (
    <View onLayout={() => {}} style={[styles.container,border && styles.border]}>
        <Text style={styles.label}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        {img && <Image style={styles.img} source={img} />}
    </View>
  );
}

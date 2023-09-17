import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import RegisterButton from "../../components/RegisterButton/RegisterButton";

export default function SingleItemScreen(props) {

  const {navigation}=props;

  const handleNavigation=(item)=>{
    navigation.goBack();

  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../../../assets/Lunch.png')} />
        <Text style={styles.title}>Резервация успешна</Text>
        <Text style={styles.subtitle}>
          Вы забронировали бизнес-завтрак.
          Ожидайте подробную информацию
          в разделе “Резерв”
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <RegisterButton onPress={handleNavigation} title={"На главную"} />
      </View>
    </View>
  );
}

import React from "react";
import {View,Image,TouchableOpacity,Text, ScrollView} from "react-native";
import styles from './styles';
import Entype from 'react-native-vector-icons/Entypo';
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import Description from "../../shared/ui/Description/Description";
import Avatar from "../../shared/ui/Avatar/Avatar";
import DateLabel from "../../shared/ui/DateLabel/DateLabel";
import RegisterButton from "../../components/RegisterButton/RegisterButton";

export default function SingleItemScreen(props) {

    const { navigation } = props;

    const handleNavigation=()=> {
      navigation.goBack();
    }

    const bookItem=(item)=>{
      navigation.navigate("StatusBook", { item });
    }

  return (
    <View style={styles.container} onLayout={() => {}}>
        <View style={styles.box}>
          <Image style={styles.image} source={require('../../../assets/nature.jpeg')} />
          <View style={styles.header}>
            <TouchableOpacity style={styles.back} onPress={handleNavigation}>
              <Entype name="chevron-left" size={30} color={'white'} />
            </TouchableOpacity>
            <FavoriteButton opacity={true} />
          </View>
        </View>
        <View style={styles.modal}>
          <View style={styles.modal_header}>
            <Text style={styles.modal_header_text}>Крутой ивент авто-пати</Text>
          </View>
          <ScrollView persistentScrollbar={true} scrollEnabled={true} >
            <Description border={true} title={"Описание"} description={"Порядок и беспорядок – это число; храбрость и трусость – это мощь; сила и слабость – это форма. Если нет выгоды, не двигайся; если не можешь приобрести, не пускай в ход войска; если нет опасности, не воюй. Государь не должен..."}   />
            <Avatar />
            <DateLabel border={true} />
            <Description border={true} img={require('../../../assets/map.png')} title={"Адрес"} description={"ТЦ ESENTAI MALL, проспект Аль-Фараби 77/8"} />
            <View style={styles.registerBtn}>
              <RegisterButton title={"Зарезервировать"} onPress={bookItem} />
            </View>
          </ScrollView>
        </View>
    </View>
  );
}

import React, {useState} from "react";
import {Text, View, Image, FlatList} from "react-native";
import styles from "./styles";
import BackButton from "../../components/BackButton/BackButton";
import SearchInput from '../../components/SearchInput/SearchInput';
import MyCarousel from '../../components/Carousel/Carousel';
import { FilterList } from "../../shared/data/dataArrays";
import CardTemplate from  '../../components/CardTemplate/CardTemplate';
import { useSelector} from 'react-redux';


export default function HomeScreen(props) {

  const [currentIdx,setCurrentIdx]=useState(1);
  const clubList=useSelector(state=>state.club);

  const { navigation } = props;

  const handleNavigation = (item) => {
    item.persist(); 
    navigation.navigate("SingleItem", { item });
  };

  return (
    <View style={styles.container}>
      <View style={styles.padding}>
        <View style={styles.toolbar}>
          <Image style={styles.img} source={require("../../../assets/avatar.png")}/>
          <BackButton />
        </View>
        <View style={styles.title}>
          <Text style={styles.title_text}>Привет, Динара!</Text>
        </View>
        <View style={styles.subtitle}>
          <Text style={styles.subtitle_text}>Что бронируем сегодня?</Text>
        </View>
        <SearchInput label={"Любимый поиск..."} filter={true} />
      </View>
      <MyCarousel list={FilterList} currentIdx={currentIdx} setCurrentIdx={setCurrentIdx}/>
      <FlatList
        style={styles.flatlist}
        data={clubList} 
        renderItem={({item}) => {
          return <CardTemplate  key={item.id} onPress={handleNavigation} isDetail={false} data={item}  />
        }}
        />        
    </View>
  );
}

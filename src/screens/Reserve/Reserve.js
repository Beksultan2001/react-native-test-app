import React, {useState} from "react";
import {View, FlatList} from "react-native";
import styles from "./styles";
import SearchInput from '../../components/SearchInput/SearchInput';
import MyCarousel from '../../components/Carousel/Carousel';
import { FilterList } from "../../shared/data/dataArrays";
import CardTemplate from  '../../components/CardTemplate/CardTemplate';
import {useSelector} from 'react-redux';

export default function Reserve(props) {

  const [currentIdx,setCurrentIdx]=useState(0);
  const reserveList=useSelector(state=>state.reserve);

  return (
    <View style={styles.container}>
      <View style={styles.padding}>
        <SearchInput label={"Поиск по резервам..."} filter={false} />
      </View>
      <MyCarousel list={FilterList} currentIdx={currentIdx} setCurrentIdx={setCurrentIdx}/>
      <FlatList
        style={styles.flatlist}
        data={reserveList} 
        renderItem={({item,index}) => {
          return <CardTemplate key={index} data={item} isDetail={true} />
        }}
        />        
    </View>
  );
}

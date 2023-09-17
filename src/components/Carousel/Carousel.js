import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import styles from './styles';
import { CARD_WIDTH_SPACING } from '../../shared/utill/util';

const TopPlacesCarousel = ({list,currentIdx,setCurrentIdx}) => {

  return (
    <FlatList
      data={list}
      style={{
        marginTop: 4,
        paddingLeft: 22,
        paddingRight: 22,
        minHeight: 90
      }}
      horizontal
      snapToInterval={CARD_WIDTH_SPACING}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      keyExtractor={i => i.id}
      renderItem={({item, index}) => {
        const isActive=item.id===currentIdx;
        return (
          <TouchableOpacity style={styles.card} onPress={() => setCurrentIdx(item.id)}>
              {
                isActive?item.iconactive:item.icon
              }
              <Text style={[styles.title,isActive && styles.titleActive]}>{item.title}</Text>
              {isActive && <View style={styles.activeLine}></View>}
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default TopPlacesCarousel;
import * as React from 'react';
import { Card,Text } from 'react-native-paper';
import styles from './styles';
import { View } from 'react-native';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Verified from '../../../assets/icons/Verified';

const CardTemplate=({isDetail,data,onPress}) => {
  
  const {img,title,details}=data;


  return (
    <Card style={styles.card} onPress={onPress}>
      <View>
        <Card.Cover source={img}  onError={() => console.log('Error loading image')} />
        <View style={styles.overlay}>
            {!isDetail && (
              <View style={styles.calendar}>
                <Text style={styles.day}>26</Text>        
                <Text style={styles.month}>апр</Text>        
              </View>
            )}
            <View style={{marginLeft: 'auto'}}>
              <FavoriteButton opacity={true}/>
            </View>
        </View>
      </View>    
      <Card.Content style={styles.content}>
      <View style={styles.content_label}>
        <Text variant="titleSmall">{title}</Text>
        {isDetail && <View style={styles.content_box}>
        <MaterialIcons size={20}  color={'rgba(0, 0, 0, 0.3)'} name='people' />
        <Text style={{marginLeft: 7,color: 'rgba(0, 0, 0, 0.5)'}}>на 10 человек</Text>
        </View>}
      </View>
      {isDetail && 
      <React.Fragment>
        <View style={styles.items}>
        {details.map((t) => {
          return <View style={styles.item}><Text style={styles.item_text}>{t.key}</Text><Text style={styles.item_text}>{t.value}</Text></View>
        })}
      </View>
      <View style={styles.verified}>
        <Verified />
        <Text style={styles.verified_text} variant='labelMedium'>Статус заявки: на рассмотрении</Text>
      </View> 
      </React.Fragment>
      }
    </Card.Content>
  </Card>
  )
}

export default CardTemplate;
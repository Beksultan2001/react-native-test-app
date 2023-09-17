import { StyleSheet } from 'react-native';
import { HEADER_HEIGHT,STATUS_BAR_HEIGHT } from '../../shared/utill/util';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: STATUS_BAR_HEIGHT + 16,
    backgroundColor: 'white'
  }
});

export default styles;

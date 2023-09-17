import { StyleSheet } from 'react-native';
import { HEADER_HEIGHT,STATUS_BAR_HEIGHT } from '../../shared/utill/util';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: STATUS_BAR_HEIGHT + 16,
    backgroundColor: 'white'
  },
  padding: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  img: {
    width: 41,
    height: 41,
    borderRadius: 10
  },
  toolbar:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: 33,
  },
  title_text: {
    fontSize: 20,
    fontFamily: 'Google Sans',
    fontWeight: '500'
  },
  subtitle: {
    marginTop: 5,
    marginBottom: 16
  },
  subtitle_text: {
    opacity: 0.3,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Google Sans',
  },
  flatlist: {
    marginTop: 30,
    paddingHorizontal: 22,
  }
});

export default styles;

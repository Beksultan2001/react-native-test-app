import { StyleSheet } from 'react-native';
import { HEADER_HEIGHT,STATUS_BAR_HEIGHT } from '../../shared/utill/util';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: STATUS_BAR_HEIGHT + 16,
    backgroundColor: 'white'
  },
  box: {
    position: 'relative',
    top: 0
  },
  image: {
    maxHeight: 735
  },
  header: {
    display: 'flex',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 20,
    paddingHorizontal: 22
  },
  back: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    height: 42,
    width: 42,
  },
  modal: {
    position: 'relative',
    height: '100%',
    paddingBottom: 360,
    backgroundColor: '#F4F4F4'
  },
  modal_header: {
    position: 'absolute',
    top: -64,
    backgroundColor: 'white',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingVertical: 23,
    paddingHorizontal: 22,
    width: '100%',
    backgroundColor: '#F4F4F4'
  },
  modal_header_text: {
    fontSize: 18,
    fontWeight: '500',
  },
  registerBtn:{
    marginTop: 44,
    paddingHorizontal: 22,
  }
});

export default styles;

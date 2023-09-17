import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  search: {
    flex: 1,
    position: 'relative',
    paddingLeft: 20,
    paddingRight: 15,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6'
  },
  textInput: {
    flex: 1,
    marginLeft: 12,
    paddingTop: 0,
    borderRightWidth: 1,
    borderRightColor: '#f6f6f6',
    fontFamily: 'Google Sans',
    fontWeight: '400'
  },
  line: {
    borderBottomColor: '#000',  
    borderBottomWidth: 20,
    width: 1,
    marginRight: 15,
    opacity: 0.05
  },
  settings: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    color: '#f6f6f6'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
});

export default styles;

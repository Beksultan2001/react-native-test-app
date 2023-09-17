import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
       paddingTop: 21,
       paddingHorizontal: 22,
       alignItems: 'center'
    },
    img: {
        width: 39,
        height: 39,
        borderRadius: 100
    },
   title: {
    fontWeight: '500',
    marginLeft: 9
   },
   subtitle: {
    color: 'rgba(0, 0, 0, 0.5)',
    marginLeft: 'auto'
   }
});

export default styles;

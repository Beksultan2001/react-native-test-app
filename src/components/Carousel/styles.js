import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 80,
        backgroundColor: '#F6F6F6',
        marginVertical: 10,
        marginRight: 8,
        borderRadius: 12,
        position:'relative'
    
    },
    title: {
        marginTop: 6,
        opacity: 0.3,
        fontSize: 10,
        fontFamily: 'Google Sans'
    },
    titleActive:{
        opacity: 1,
    },
    activeLine: {
        position: 'absolute',
        bottom: 1,
        width: 26,
        height: 2,
        backgroundColor: '#EB6697',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3
    },
  });
  
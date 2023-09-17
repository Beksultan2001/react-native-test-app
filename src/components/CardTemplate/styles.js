import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    card: {
        backgroundColor: '#F6F6F6',
        padding: 9,
        paddingBottom: 0,
        marginBottom: 18,
        shadowColor: 'none',
        elevation: 0,
        shadowColor: "transparent",
    },
    overlay: {
        position: 'absolute',
        top: 0,
        padding: 14,
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        width: '100%'
    },
    calendar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 12,
        height: 42,
        width: 42,
    },
    day: {
        color: 'white',
        fontSize: 14
    },
    month: {
        opacity: 0.65,
        color: '#FFFFFF',   
        fontSize: 11
    },
    content: {
        marginTop: 12,
        elevation: 0
    },
    content_label: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    content_box: {
        display: 'flex',
        flexDirection: 'row',
    },
    items: {
        gap: 18,
        paddingTop: 18,
        borderTopWidth: 1,
        marginTop: 15,
        borderTopColor:'rgba(0, 0, 0, 0.05)',
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: 'rgba(0, 0, 0, 0.3)',
    },
    item_text: {
        color: 'rgba(0, 0, 0, 0.6)',
    },
    verified:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopWidth: 1,
        marginTop: 18,
        paddingTop: 18,
        alignItems: 'center',
        borderTopColor:'rgba(0, 0, 0, 0.05)'
    },
    verified_text: {
        marginLeft: 5,
    }
  });
  
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      marginTop: 21,
      paddingVertical: 21,
      paddingHorizontal: 22 ,
      gap: 14,
    },
    label: {
      fontWeight: '500',
      borderTopColor: 'rgba(0, 0, 0, 0.7)',
    fontSize: 16,
  },
  border: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.05)',
  },
  description: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    width: 170,
    borderRadius: 12
  }
});

export default styles;

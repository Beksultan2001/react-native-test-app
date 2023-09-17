import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      paddingTop: 21,
      paddingHorizontal: 22 
    },
    label: {
      fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: 16,
  },
  description: {
    lineHeight: 20,
    fontSize: 14,
    marginTop: 8,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  border: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.05)',
  },
  img: {
    width: '100%',
    height: 220,
    objectFit: 'cover',
    marginTop: 20,
    borderRadius: 400
  }
});

export default styles;

import { StyleSheet } from 'react-native';
import {STATUS_BAR_HEIGHT } from '../../shared/utill/util';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: STATUS_BAR_HEIGHT + 16,
    paddingHorizontal: 22,
    justifyContent: 'space-between', 
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  buttonContainer: {
    marginBottom: 16,
  },
  title: {
    marginTop: 30,
    fontWeight: "500",
    color: 'rgba(0, 0, 0, 0.95)',
    fontSize: 20
  },
  subtitle:{ 
    marginTop: 9,
    fontSize: 15,
    color: 'rgba(0, 0, 0, 0.56)',
    lineHeight: 18
  }
});

export default styles;

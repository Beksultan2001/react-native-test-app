import React from "react";
import { TouchableHighlight} from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import BackButtonIcon from '../../../assets/icons/BackButton';

export default function BackButton(props) {
  return (
    <TouchableHighlight style={styles.btnContainer}>
      <BackButtonIcon />
    </TouchableHighlight>
  );
}

// BackButton.propTypes = {
//   onPress: PropTypes.func,
//   source: PropTypes.number,
//   title: PropTypes.string,
// };

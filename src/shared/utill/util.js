import {StatusBar, StyleSheet,Dimensions} from 'react-native';


const {width, height} = Dimensions.get('window');

export const colors = {
  primary: '#070f18',
  gray: '#8b8989',
  lightGray: '#b2b2b2',
  light: '#fbfbfb',
  white: '#fff',
  black: '#000',
};

export const shadow = {
  light: {
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  dark: {
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
};

export const sizes = {
  width,
  height,
  title: 32,
  h2: 24,
  h3: 18,
  body: 14,
  caption: 12,
  radius: 16,
};


export const spacing = {
    s: 8,
    m: 18,
    l: 24,
    xl: 40,
  };

export const CARD_WIDTH = 300 - 80;
export const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;


export const MATERIAL_COLORS = [
    '#4C8C4A',
    '#EF9A9A',
    '#7986CB',
    '#AAB6FE',
    '#80CBC4',
    '#A8B545',
    '#8EACBB',
];

export const AISULU_COLORS = [
    '#009688',
    '#00bcd4',
    '#e91e63',
    '#7e57c2', 
    '#8bc34a',
    '#ff9800'
];

export const STATUS_BAR_HEIGHT = +StatusBar.currentHeight || 0;
export const HEADER_HEIGHT = 56;
export const RIPPLE_COLOR = '#f5f5f5';
export const TASK_COLORS = ['#00BCD4', '#FFA000', '#4CAF50'];
export function getMaterialColor(i) {
    return MATERIAL_COLORS[(+i.toString().replace(/\D+/g,'')[0]|| 0) % MATERIAL_COLORS.length];
}

export const fieldStyles = StyleSheet.create({
    viewValue: {
        fontSize: 14
    }
})
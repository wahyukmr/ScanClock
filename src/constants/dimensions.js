import {Dimensions} from 'react-native';

// Untuk dimensi spesifik dari elemen-elemen tertentu, seperti ukuran tombol, ikon, dll
const {height, width} = Dimensions.get('window');

export const DIMENSIONS = {
  windowHeight: height,
  windowWidth: width,

  borderRadiusSmall: 4,
  borderRadiusMedium: 8,
  borderRadiusLarge: 12,
  borderRadiusXLarge: 16,
  borderRadius2xl: 32,

  buttonHeight: 55,
  inputHeight: 52,
  headerHeight: 56,

  buttonWidth: '70%',
  inputWidth: '100%',

  iconSmall: 16,
  iconMedium: 24,
  iconLarge: 32,

  avatarSmall: 24,
  avatarMedium: 48,
  avatarLarge: 72,

  cardWidth: '100%',
  cardHeight: 200,
};

import {RenderDay} from './components';

export const capitalizeWords = str => {
  return str.replace(/\b\w/g, char => char.toUpperCase());
};

export const handleNameDisplay = (name, textMaxWidth, setDisplayName) => {
  const parts = name.split(' ');
  const firstName = parts[0];
  const remainingParts = parts.slice(1);

  // Multiple names scenario
  const combinedName = firstName + ' ' + remainingParts.join(' ');

  if (calculateTextWidth(combinedName) > textMaxWidth) {
    let abbreviatedName = firstName;

    for (let i = 0; i < remainingParts.length; i++) {
      const testName =
        abbreviatedName + ' ' + remainingParts.slice(0, i + 1).join(' ');

      if (calculateTextWidth(testName) > textMaxWidth) {
        abbreviatedName += ' ' + remainingParts[i][0] + '.';
      } else {
        abbreviatedName = testName;
      }
    }

    setDisplayName(capitalizeWords(abbreviatedName));
  } else {
    setDisplayName(capitalizeWords(combinedName));
  }
};

const AVERAGE_LETTER_WIDTH = 15;

export const calculateTextWidth = text => {
  return text.length * AVERAGE_LETTER_WIDTH;
};

export const orderOfMonths = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];

export const currentMonthByIndex = new Date().getMonth();

export const currentYear = new Date().getFullYear();

export const currentDate = new Date().getDate() - 1;

export const renderDay = (item, index, styles) => (
  <RenderDay item={item} index={index} styles={styles} />
);

import {Text} from 'react-native';
import {DIMENSIONS, FONT_SIZE, LAYOUT} from '../constants';
import {useThemeContext} from '../hooks';
import CustomIcon from './CustomIcon';

const CustomHeaderTitle = () => {
  const {themeColors} = useThemeContext();
  return (
    <>
      <CustomIcon
        name="cloud-off-outline"
        size={DIMENSIONS.iconMedium}
        color={themeColors.accent200}
        style={{marginRight: LAYOUT.marginHorizontalSmall}}
      />
      <Text
        style={{
          ...FONT_SIZE.textXLarge,
          color: themeColors.accent200,
          fontWeight: '600',
        }}>
        Kamu sedang offline
      </Text>
    </>
  );
};

export default CustomHeaderTitle;

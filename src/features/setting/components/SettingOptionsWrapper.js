import {Text, TouchableHighlight, View} from 'react-native';
import {LAYOUT} from '../../../constants';
import {SettingOptionsWrapperStyles} from './SettingOptionsWrapper.styles';

const SettingOptionsWrapper = ({themeColors, title, action, children}) => {
  const styles = SettingOptionsWrapperStyles();

  return (
    <View style={{marginBottom: LAYOUT.marginVerticalLarge}}>
      <Text style={[styles.title, {color: themeColors.accent100}]}>
        {title}
      </Text>
      <TouchableHighlight
        underlayColor={themeColors.bg200}
        style={styles.btnAction}
        onPress={action}>
        {children}
      </TouchableHighlight>
    </View>
  );
};

export default SettingOptionsWrapper;

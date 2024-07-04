import {DynamicModalWrapper} from '../components';
import {
  AuthScreen,
  HomeScreen,
  HomeStack,
  ScanScreen,
  ScanStack,
  SettingScreen,
  SettingStack,
} from '../features';
import CodeScanner from '../features/scanner/components/CodeScanner';
import AuthNavigator from '../navigation/AuthNavigator';
import MainNavigator from '../navigation/MainNavigator/MainNavigator';

export const SCREENS = {
  MainNavigator: MainNavigator,
  AuthNavigator: AuthNavigator,
  AuthScreen: AuthScreen,
  HomeStack: HomeStack,
  SettingStack: SettingStack,
  ScanStack: ScanStack,
  Home: HomeScreen,
  Scan: ScanScreen,
  Setting: SettingScreen,
  DynamicModalWrapper: DynamicModalWrapper,
  CodeScanner: CodeScanner,
};

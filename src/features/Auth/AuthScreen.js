import {Formik} from 'formik';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ROUTE} from '../../constants';
import {useAuthContext, useThemeContext} from '../../hooks';
import {initialValues, isEmptyValues} from './Auth.helpers';
import {authScreenStyles} from './Auth.styles';
import {loginSchema, registerSchema} from './Auth.validations';
import AuthForm from './components/AuthForm';
import SubmitButton from './components/SubmitButton';
import SwitchForm from './components/SwitchForm';
import {useHandleSubmit} from './hooks/useHandleSubmit';

const AuthScreen = ({route}) => {
  const {type} = route.params;
  const isLoginType = type === ROUTE.loginScreen;

  const {styles, themeColors} = useThemeContext(authScreenStyles);
  const {user} = useAuthContext();
  const {handleFormSubmit} = useHandleSubmit();

  const insets = useSafeAreaInsets();

  return (
    <Formik
      initialValues={initialValues(isLoginType)}
      validationSchema={isLoginType ? loginSchema : registerSchema}
      onSubmit={handleFormSubmit(isLoginType)}>
      {({handleSubmit, isValid, isSubmitting, isValidating, values}) => (
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView
            contentContainerStyle={{
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
            }}
            keyboardShouldPersistTaps="handled">
            <View style={styles.formContainer}>
              <Text style={styles.formHeader}>
                {isLoginType ? ROUTE.loginScreen : ROUTE.registerScreen}
              </Text>
              <AuthForm isLoginType={isLoginType} />
              <SubmitButton
                type={type}
                onPress={handleSubmit}
                isSubmitting={isSubmitting || !!user}
                isDisabled={
                  isEmptyValues(values) ||
                  !isValid ||
                  isValidating ||
                  isSubmitting ||
                  !!user
                }
                themeColors={themeColors}
              />
              <SwitchForm isLoginType={isLoginType} themeColors={themeColors} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export default AuthScreen;

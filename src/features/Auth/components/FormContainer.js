import {Formik} from 'formik';
import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ROUTE} from '../../../constants';
import {useThemedStyles} from '../../../hooks';
import {areAllFieldsFilled} from '../helpers/areAllFieldsFilled';
import authenticationStyles from '../styles/authenticationStyles';
import BtnAction from './BtnAction';
import SwitchForm from './SwitchForm';

const FormContainer = ({
  children,
  initialValues,
  validationSchema,
  handleSubmit,
  type,
}) => {
  const authStyles = useThemedStyles(authenticationStyles);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, {setSubmitting}) => {
        handleSubmit(values, setSubmitting);
      }}>
      {({handleSubmit, isValid, isSubmitting, isValidating, values}) => {
        const isDisabled =
          !isValid ||
          !areAllFieldsFilled(values) ||
          isSubmitting ||
          isValidating;

        return (
          <ScrollView keyboardShouldPersistTaps="handled">
            <SafeAreaView style={authStyles.formContainer}>
              {children}
              <BtnAction
                type={type}
                onPress={handleSubmit}
                isSubmitting={isSubmitting}
                isDisabled={isDisabled}
                authStyles={authStyles}
              />
              <SwitchForm
                type={type}
                text={
                  type === ROUTE.registerScreen
                    ? 'Kembali ke login'
                    : 'Tidak punya akun? Register'
                }
                authStyles={authStyles}
              />
            </SafeAreaView>
          </ScrollView>
        );
      }}
    </Formik>
  );
};

export default FormContainer;

import {Formik} from 'formik';
import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ROUTE} from '../../../constants';
import {useThemedStyles} from '../../../hooks';
import {authenticationStyles} from '../../../styles';
import areAllFieldsFilled from '../helpers/areAllFieldsFilled';
import BtnAction from './BtnAction';
import SwitchForm from './SwitchForm';

const FormContainer = ({
  children,
  initialValues,
  validationSchema,
  handleSubmit,
  type,
}) => {
  const styles = useThemedStyles(authenticationStyles);

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
            <SafeAreaView style={styles.formContainer}>
              {children}
              <BtnAction
                type={type}
                onPress={handleSubmit}
                isSubmitting={isSubmitting}
                isDisabled={isDisabled}
              />
              <SwitchForm
                type={type}
                text={
                  type === ROUTE.REGISTER_SCREEN
                    ? 'Kembali ke login'
                    : 'Tidak punya akun? Register'
                }
              />
            </SafeAreaView>
          </ScrollView>
        );
      }}
    </Formik>
  );
};

export default FormContainer;

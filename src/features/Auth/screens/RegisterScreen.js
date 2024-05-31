import React from 'react';
import {ROUTE} from '../../../constants';
import FormContainer from '../components/FormContainer';
import WrappingFormFields from '../components/WrappingFormFields';
import {registerSchema} from '../validation/validationSchema';

const RegisterScreen = () => {
  const handleRegister = (inputValues, setSubmitting) => {
    // simulasi waktu pengiriman data ke server
    setTimeout(() => {
      console.log(inputValues);
      setSubmitting(false);
    }, 10000);
  };

  return (
    <FormContainer
      initialValues={{
        name: '',
        gender: 'pria',
        phone: '',
        email: '',
        password: '',
        division: '',
        department: '',
        branch: '',
        position: 'Staff',
      }}
      validationSchema={registerSchema}
      handleSubmit={handleRegister}
      type={ROUTE.registerScreen}>
      <WrappingFormFields type={ROUTE.registerScreen} />
    </FormContainer>
  );
};

export default RegisterScreen;

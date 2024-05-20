import React from 'react';
import {ROUTE} from '../../constants';
import {
  FormContainer,
  FormFields,
  registerSchema,
} from '../../features/authentication';

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
      type={ROUTE.REGISTER_SCREEN}>
      <FormFields type={ROUTE.REGISTER_SCREEN} />
    </FormContainer>
  );
};

export default RegisterScreen;

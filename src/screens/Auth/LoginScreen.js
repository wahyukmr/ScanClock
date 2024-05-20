import React from 'react';
import {ROUTE} from '../../constants';
import {
  FormContainer,
  FormFields,
  loginSchema,
} from '../../features/authentication';

const LoginScreen = () => {
  const handleLogin = (inputValues, setSubmitting) => {
    // simulasi waktu pengiriman data ke server
    setTimeout(() => {
      console.log(inputValues);
      setSubmitting(false);
    }, 10000);
  };

  return (
    <FormContainer
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginSchema}
      handleSubmit={handleLogin}
      type={ROUTE.LOGIN_SCREEN}>
      <FormFields type={ROUTE.LOGIN_SCREEN} />
    </FormContainer>
  );
};

export default LoginScreen;

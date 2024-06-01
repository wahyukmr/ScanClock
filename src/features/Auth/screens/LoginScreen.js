import React from 'react';
import {ROUTE} from '../../../constants';
import FormContainer from '../components/FormContainer';
import FormContents from '../components/FormContents';
import {loginSchema} from '../validation/validationSchema';

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
      type={ROUTE.loginScreen}>
      <FormContents type={ROUTE.loginScreen} />
    </FormContainer>
  );
};

export default LoginScreen;

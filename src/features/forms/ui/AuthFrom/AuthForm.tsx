import React, { useState } from 'react';
import s from './AuthForm.module.scss';
import LoginForm from './LoginForm/LoginForm';
import RegForm from 'src/features/forms/ui/AuthFrom/RegForm/RegForm';

const AuthForm = () => {
  const [needRegistration, setNeedRegistration] = useState<boolean>(false);

  const handleNeedRegistration = () => {
    setNeedRegistration(true);
  };
  const handleSuccessRegistration = () => {
    setNeedRegistration(false);
  };

  return (
    <div className={s.root}>
      {needRegistration ? (
        <RegForm onSuccessRegistration={handleSuccessRegistration} />
      ) : (
        <LoginForm onNeedRegistration={handleNeedRegistration} />
      )}
    </div>
  );
};

export default AuthForm;

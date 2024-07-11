import React, { FC } from 'react';
import s from './Auth.module.scss';
import AuthForm from 'src/features/forms/AuthFrom/ui/AuthForm';

export const Auth: FC = () => {
  return <AuthForm className={s.content} />;
};

import React, { FC } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormButton, FormContainer } from 'src/shared/ui/form';
import PasswordFormInput from '../AuthFormInputs/PasswordFormInput';
import s from './LoginForm.module.scss';
import EmailFormInput from 'src/features/forms/AuthFrom/ui/AuthFormInputs/EmailFormInput';
import RegistrationLabel from 'src/features/forms/AuthFrom/ui/LoginForm/RegistrationLabel/RegistrationLabel';
import { AuthPair } from 'src/shared/model/types';

type LoginFormValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onNeedRegistration: () => void;
  onSuccessLogin: (authPair: AuthPair) => void;
} & WithTranslation;

const LoginForm: FC<LoginFormProps> = ({ t, onNeedRegistration, onSuccessLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: { email: '', password: '' },
  });

  const handleClick: SubmitHandler<LoginFormValues> = (data) => {
    onSuccessLogin(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(handleClick)} title={t('login.title', 'Вход')}>
      <RegistrationLabel onNeedRegistration={onNeedRegistration}>
        {t('login.registrationLabel', 'Регистрация')}
      </RegistrationLabel>
      <EmailFormInput
        label={t('login.inputs.email.label', 'E-mail')}
        error={errors.email?.message}
        placeholder={t('login.inputs.email.placeholder', 'укажите e-mail')}
        register={register}
        t={t}
      />

      <PasswordFormInput
        label={t('login.inputs.password.label', 'Пароль')}
        error={errors.password?.message}
        placeholder={t('login.inputs.password.placeholder', 'укажите пароль')}
        name={'password'}
        register={register}
        t={t}
      />

      <FormButton className={s.submit_button} type={'submit'}>
        {t('login.submit', 'Авторизоваться')}
      </FormButton>
    </FormContainer>
  );
};

export default withTranslation(['forms', 'errors'])(LoginForm);

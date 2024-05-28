import React, { FC } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { FieldValue, SubmitHandler, useForm, ValidateResult } from 'react-hook-form';
import { FormButton, FormContainer } from 'src/shared/ui/form';
import PasswordFormInput from '../AuthFormInputs/PasswordFormInput';
import s from 'src/features/forms/ui/AuthFrom/LoginForm/LoginForm.module.scss';
import EmailFormInput from 'src/features/forms/ui/AuthFrom/AuthFormInputs/EmailFormInput';

type RegFormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

type RegFormProps = {
  onSuccessRegistration: () => void;
} & WithTranslation;

const RegForm: FC<RegFormProps> = ({ t, onSuccessRegistration }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegFormValues>({
    defaultValues: { email: '', password: '', confirmPassword: '' },
  });

  const handleClick: SubmitHandler<RegFormValues> = (data) => {
    console.log(
      `Reg data: email=[${data.email}], password=[${data.password}], confirmPassword=[${data.confirmPassword}]`
    );
    onSuccessRegistration();
  };

  const validateConfirmPassword = (value: FieldValue<RegFormValues>, formValues: RegFormValues): ValidateResult => {
    return (
      value === formValues['password'] ||
      t('forms.passwordMismatch', { ns: 'errors', defaultValue: 'Пароли не совпадают' })
    );
  };

  return (
    <FormContainer onSubmit={handleSubmit(handleClick)} title={t('registration.title', 'Регистрация')}>
      <EmailFormInput
        label={t('registration.inputs.email.label', 'E-mail')}
        error={errors.email?.message}
        placeholder={t('registration.inputs.email.placeholder', 'укажите e-mail')}
        register={register}
        t={t}
      />

      <PasswordFormInput
        label={t('registration.inputs.password.label', 'Пароль')}
        error={errors.password?.message}
        placeholder={t('registration.inputs.password.placeholder', 'укажите пароль')}
        name={'password'}
        register={register}
        t={t}
      />

      <PasswordFormInput
        label={t('registration.inputs.password.label', 'Повтор пароля')}
        error={errors.confirmPassword?.message}
        placeholder={t('registration.inputs.confirmPassword.placeholder', 'повторите пароль')}
        name={'confirmPassword'}
        register={register}
        t={t}
        validatePasswordConfirm={validateConfirmPassword}
      />

      <FormButton className={s.submit_button} type={'submit'}>
        {t('registration.submit', 'Зарегистрироваться')}
      </FormButton>
    </FormContainer>
  );
};

export default withTranslation(['forms', 'errors'])(RegForm);

import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormContainer, FormButton, FormInput, FormInputsTypes } from 'src/shared/ui/form';
import s from './ProfileForm.module.scss';
import { withTranslation, WithTranslation } from 'react-i18next';

type ProfileFormValues = {
  nickname: string;
  about: string;
};

type ProfileFormType = WithTranslation;

const ProfileForm: FC<ProfileFormType> = ({ t }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    defaultValues: { nickname: '', about: '' },
  });

  const handleClick: SubmitHandler<ProfileFormValues> = (data) => {
    console.log(`Profile data: nickname=[${data.nickname}], about=[${data.about}]`);
    reset();
  };

  return (
    <FormContainer
      className={s.root}
      onSubmit={handleSubmit(handleClick)}
      title={t('profile.title', 'Изменение профиля')}
    >
      <FormInput
        label={t('profile.inputs.nickname.label', 'Псевдоним')}
        error={errors.nickname?.message}
        inputType={FormInputsTypes.simple}
        isRequired={true}
        placeholder={t('profile.inputs.nickname.placeholder', 'придумайте себе псевдоним')}
        {...register('nickname', {
          required: t('forms.requiredField', { ns: 'errors', defaultValue: 'Поле является обязательным' }),
        })}
      />

      <FormInput
        label={t('profile.inputs.about.label', 'О себе')}
        inputType={FormInputsTypes.textarea}
        placeholder={t('profile.inputs.about.placeholder', 'напишите что-нибудь о себе')}
        {...register('about')}
      />

      <FormButton type={'submit'}>{t('profile.submit', 'Сохранить')}</FormButton>
    </FormContainer>
  );
};

export default withTranslation(['forms', 'errors'])(ProfileForm);

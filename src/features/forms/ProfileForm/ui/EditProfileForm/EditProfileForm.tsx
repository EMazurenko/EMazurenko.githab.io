import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import cn from 'clsx';
import { FormContainer, FormButton, FormInput, FormInputsTypes } from 'src/shared/ui/form';
import s from './EditProfileForm.module.scss';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Profile } from 'src/entities/profile/model/types';

type EditProfileFormValues = {
  nickname: string;
  about: string;
};

type EditProfileFormProps = {
  className?: string;
  email?: string;
  disableAbout?: boolean;
  onSuccessEdit: (profile: Pick<Profile, 'nickname' | 'about'>) => void;
} & WithTranslation &
  Partial<EditProfileFormValues>;

const EditProfileForm: FC<EditProfileFormProps> = ({
  t,
  className,
  email,
  nickname,
  about,
  disableAbout,
  onSuccessEdit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileFormValues>({
    defaultValues: { nickname, about },
  });

  const handleClick: SubmitHandler<EditProfileFormValues> = (data) => {
    onSuccessEdit(data);
  };

  return (
    <FormContainer
      className={cn(s.root, className)}
      onSubmit={handleSubmit(handleClick)}
      title={t('profile.title', 'Изменение профиля') + ' ' + (email || ' ')}
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

      {!disableAbout && (
        <FormInput
          label={t('profile.inputs.about.label', 'О себе')}
          inputType={FormInputsTypes.textarea}
          placeholder={t('profile.inputs.about.placeholder', 'напишите что-нибудь о себе')}
          {...register('about')}
        />
      )}

      <FormButton type={'submit'}>{t('profile.submit', 'Сохранить')}</FormButton>
    </FormContainer>
  );
};

export default withTranslation(['forms', 'errors'])(EditProfileForm);

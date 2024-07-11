import React from 'react';
import { FormInput, FormInputProps, FormInputsTypes } from 'src/shared/ui/form';
import { Path, UseFormRegister } from 'react-hook-form';
import { WithTranslation } from 'react-i18next';
import { FieldValues } from 'react-hook-form/dist/types';

type EmailFormInputProps<T> = {
  register: UseFormRegister<T>;
} & Pick<FormInputProps<T>, 'label' | 'error' | 'placeholder'> &
  Pick<WithTranslation, 't'>;

const EmailFormInput = <T extends FieldValues>({ register, t, ...props }: EmailFormInputProps<T>) => {
  return (
    <FormInput<T>
      {...props}
      inputType={FormInputsTypes.email}
      isRequired={true}
      {...register('email' as Path<T>, {
        required: t('forms.requiredField', { ns: 'errors', defaultValue: 'Поле является обязательным' }),
        pattern: {
          value: /^[\S]+@[\w]+\.[\w]+$/,
          message: t('forms.badEmail', { ns: 'errors', defaultValue: 'Не удается распознать формат e-mail' }),
        },
      })}
    />
  );
};

export default EmailFormInput;

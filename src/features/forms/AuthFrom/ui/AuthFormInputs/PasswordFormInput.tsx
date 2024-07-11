import React from 'react';
import { FormInput, FormInputProps, FormInputsTypes } from 'src/shared/ui/form';
import { Path, UseFormRegister, Validate } from 'react-hook-form';
import { WithTranslation } from 'react-i18next';
import { FieldPathValue } from 'react-hook-form/dist/types/path';

const PASSWORD_LENGTH = 8;
const PASSWORD_ERROR_TEMPLATE = 'Пароль должен быть более {PASSWORD_LENGTH} символов';

type PasswordFormInputProps<T> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  validatePasswordConfirm?: Validate<FieldPathValue<T, Path<T>>, T>;
} & Pick<FormInputProps<T>, 'label' | 'error' | 'placeholder'> &
  Pick<WithTranslation, 't'>;

const PasswordFormInput = <T,>({ name, register, t, validatePasswordConfirm, ...props }: PasswordFormInputProps<T>) => {
  return (
    <FormInput
      {...props}
      inputType={FormInputsTypes.password}
      isRequired={true}
      {...register(name, {
        required: t('forms.requiredField', { ns: 'errors', defaultValue: 'Поле является обязательным' }),
        minLength: {
          value: PASSWORD_LENGTH,
          message: t('forms.badPasswordLength', { ns: 'errors', defaultValue: PASSWORD_ERROR_TEMPLATE }).replace(
            '{PASSWORD_LENGTH}',
            PASSWORD_LENGTH.toString()
          ),
        },
        ...(validatePasswordConfirm ? { validate: validatePasswordConfirm } : {}),
      })}
    />
  );
};

export default PasswordFormInput;

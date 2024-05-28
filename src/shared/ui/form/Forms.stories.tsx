import React from 'react';
import FormInput, { FormInputsTypes } from 'src/shared/ui/form/FormInput/FormInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import FormButton from 'src/shared/ui/form/FormButton/FormButton';
import FormContainer from 'src/shared/ui/form/FormContainer/FormContainer';

export default {
  title: 'UI Kit/Forms',
  component: null,
};

type TemplateFormValues = {
  username: string;
  about: string;
  password: string;
  email: string;
  digital: number;
  select: string;
};

const Template = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TemplateFormValues>({
    defaultValues: { username: '' },
  });

  const handleClick: SubmitHandler<TemplateFormValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div style={{ width: '350px' }}>
      <FormContainer onSubmit={handleSubmit(handleClick)} title={'Примеры полей ввода'}>
        <FormInput
          label="Простое поле ввода"
          error={errors.username?.message}
          inputType={FormInputsTypes.simple}
          isRequired={true}
          placeholder={'введите текст'}
          {...register('username', { required: 'Поле является обязательным' })}
        />

        <FormInput
          label="Многострочное поле ввода"
          inputType={FormInputsTypes.textarea}
          placeholder={'введите текст'}
          {...register('about')}
        />

        <FormInput
          label="Поле ввода пароля"
          error={errors.password?.message}
          inputType={FormInputsTypes.password}
          isRequired={true}
          placeholder={'введите пароль'}
          {...register('password', {
            required: 'Поле является обязательным',
            minLength: {
              value: 8,
              message: 'Пароль должен быть более 8 символов',
            },
          })}
        />

        <FormInput
          label="Поле ввода email"
          error={errors.email?.message}
          inputType={FormInputsTypes.email}
          isRequired={true}
          placeholder={'введите email'}
          {...register('email', {
            required: 'Поле является обязательным',
            pattern: {
              value: /^[\S]+@[\w]+\.[\w]+$/,
              message: 'Не удается распознать формат e-mail',
            },
          })}
        />

        <FormInput
          label="Поле ввода числа"
          error={errors.digital?.message}
          inputType={FormInputsTypes.number}
          isRequired={true}
          placeholder={'введите число'}
          {...register('digital', {
            valueAsNumber: true,
            min: {
              value: 0,
              message: 'Значение должно быть положительным',
            },
            required: 'Поле является обязательным',
          })}
        />

        <FormInput
          label="Выбор значения из списка"
          inputType={FormInputsTypes.select}
          selectOptions={[
            { value: '1', text: 'Опция 1' },
            { value: '2', text: 'Опция 2' },
          ]}
          {...register('select')}
        />

        <FormButton type={'submit'}>Отправить данные</FormButton>
      </FormContainer>
    </div>
  );
};

export const Default = Template;

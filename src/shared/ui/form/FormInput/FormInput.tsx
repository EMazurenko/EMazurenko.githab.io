import React, { forwardRef, ReactElement, Ref } from 'react';
import { UseFormRegister } from 'react-hook-form';
import BaseFormInput, { BaseFormInputProps } from 'src/shared/ui/form/FormInput/BaseFormInput/BaseFormInput';
import cn from 'clsx';
import s from './FormInput.module.scss';

export enum FormInputsTypes {
  simple,
  textarea,
  password,
  email,
  number,
  select,
}

type FormSelectOptionType = {
  value: string;
  text: string;
};

export type FormInputProps<T> = {
  inputType: FormInputsTypes;
  selectOptions?: FormSelectOptionType[];
} & Omit<BaseFormInputProps, 'inputElement'> &
  ReturnType<UseFormRegister<T>> &
  React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const FormInput = <T,>(props: FormInputProps<T>, ref: Ref<HTMLInputElement>) => {
  const { label, error, isRequired, inputType, selectOptions, ...rest } = props;

  const formInputsFactory = () => {
    switch (inputType) {
      case FormInputsTypes.simple:
        return <input className={cn(s.root, s.input_style)} ref={ref} {...rest} />;
      case FormInputsTypes.textarea:
        return <textarea className={cn(s.root, s.textarea_style)} ref={ref} {...rest} />;
      case FormInputsTypes.password:
        return <input type={'password'} className={cn(s.root, s.input_style)} ref={ref} {...rest} />;
      case FormInputsTypes.email:
        return <input type={'email'} className={cn(s.root, s.input_style)} ref={ref} {...rest} />;
      case FormInputsTypes.number:
        return <input type={'number'} className={cn(s.root, s.input_style)} ref={ref} {...rest} />;
      case FormInputsTypes.select:
        return (
          <select className={cn(s.root, s.select_style)} ref={ref} {...rest}>
            {selectOptions &&
              selectOptions.map((opt, idx) => (
                <option key={idx} value={opt.value}>
                  {opt.text}
                </option>
              ))}
          </select>
        );
      default:
        return null;
    }
  };

  return <BaseFormInput label={label} isRequired={isRequired} error={error} inputElement={formInputsFactory()} />;
};

export default forwardRef(FormInput) as <T>(props: FormInputProps<T> & { ref?: Ref<HTMLInputElement> }) => ReactElement;

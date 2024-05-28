import React, { FC, ReactElement } from 'react';
import cn from 'clsx';
import s from './BaseFormInput.module.scss';

export type BaseFormInputProps = {
  label: string;
  error?: string;
  isRequired?: boolean;
  inputElement: ReactElement;
};

const BaseFormInput: FC<BaseFormInputProps> = ({ label, error, isRequired, inputElement }) => {
  const errorClass = error ? 'error' : 'clear';
  return (
    <div className={s.root}>
      <label className={s.label_input}>
        {label}
        {isRequired && <sup className={s.required_star}>*</sup>}
        <div className={cn(s.content_input)}>{inputElement}</div>
      </label>
      <label className={cn(s.label_error, s[errorClass])}>{error}</label>
    </div>
  );
};

export default BaseFormInput;

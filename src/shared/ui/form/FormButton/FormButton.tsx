import React, { FC } from 'react';
import s from './FormButton.module.scss';
import cn from 'clsx';

type FormButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const FormButton: FC<FormButtonProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn(s.root, className)}>
      <button {...props}>{children}</button>
    </div>
  );
};

export default FormButton;

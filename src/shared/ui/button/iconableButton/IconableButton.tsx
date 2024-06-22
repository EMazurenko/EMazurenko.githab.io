import React, { FC } from 'react';
import s from './IconableButton.module.scss';

type IconableButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconableButton: FC<IconableButtonProps> = ({ children, onClick }) => {
  return (
    <button className={s.root} onClick={onClick}>
      {children}
    </button>
  );
};

export default IconableButton;

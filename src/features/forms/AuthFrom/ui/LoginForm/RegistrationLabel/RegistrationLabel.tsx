import React, { FC } from 'react';
import s from './RegistrationLabel.module.scss';

type RegistrationLabelProps = {
  children: string;
  onNeedRegistration: () => void;
};

const RegistrationLabel: FC<RegistrationLabelProps> = ({ children, onNeedRegistration }) => {
  return (
    <div className={s.registration_label_container}>
      <label className={s.registration_label} onClick={onNeedRegistration}>
        {children}
      </label>
    </div>
  );
};

export default RegistrationLabel;

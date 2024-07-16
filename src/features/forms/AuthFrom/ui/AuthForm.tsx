import React, { FC, useState } from 'react';
import cn from 'clsx';
import s from './AuthForm.module.scss';
import LoginForm from './LoginForm/LoginForm';
import RegForm from 'src/features/forms/AuthFrom/ui/RegForm/RegForm';
import { TooltipPanel } from 'src/shared/ui/tooltipPanel';
import { useAuthorizeComponent } from 'src/features/forms/AuthFrom/model/useAuthorizeComponent';
import { useAuthorizeThunk } from 'src/features/forms/AuthFrom/model/useAuthorizeThunk';
import { useAuthorizeSaga } from 'src/features/forms/AuthFrom/model/useAuthorizeSaga';
import { useAuthorizeRQ } from 'src/features/forms/AuthFrom/model/useAuthorizeRQ';

const TOOLTIP_WIDTH = 400;

type AuthFormProps = { className?: string };

const AuthForm: FC<AuthFormProps> = ({ className }) => {
  const [needRegistration, setNeedRegistration] = useState<boolean>(false);
  // const { error, onSuccessLogin, onSuccessRegistration } = useAuthorizeComponent();
  // const { error, onSuccessLogin, onSuccessRegistration } = useAuthorizeThunk();
  // const { error, onSuccessLogin, onSuccessRegistration } = useAuthorizeSaga();
  const { error, onSuccessLogin, onSuccessRegistration } = useAuthorizeRQ();

  return (
    <div className={cn(s.root, className)}>
      {needRegistration ? (
        <RegForm onSuccessRegistration={onSuccessRegistration} />
      ) : (
        <LoginForm onSuccessLogin={onSuccessLogin} onNeedRegistration={() => setNeedRegistration(true)} />
      )}
      <div className={s.error}>
        <TooltipPanel text={error} tooltipWidth={TOOLTIP_WIDTH} requestRecalcPosition={needRegistration ? 0 : 1} />
      </div>
    </div>
  );
};

export default AuthForm;

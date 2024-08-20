import React, { FC, useLayoutEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from 'src/features/store/model';
import { selectHasToken } from 'src/features/store/model/slices/token';
import { selectIsInit } from 'src/features/store/model/slices/init';

const AuthorizedRouter: FC = () => {
  const isInit = useAppSelector(selectIsInit);
  const hasToken = useAppSelector(selectHasToken);
  const path = useLocation().pathname;
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (isInit) {
      if (hasToken && path === '/profile/auth') {
        navigate('/profile/edit', { replace: true });
      } else if (!hasToken && path === '/profile/edit') {
        navigate('/profile/auth', { replace: true });
      }
    }
  }, [isInit, path, hasToken, navigate]);

  return <Outlet />;
};

export default AuthorizedRouter;

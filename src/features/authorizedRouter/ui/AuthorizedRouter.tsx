import React, { FC, useLayoutEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from 'src/features/store/model';
import { selectHasToken } from 'src/features/store/model/slices/token';

const AuthorizedRouter: FC = () => {
  const hasToken = useAppSelector(selectHasToken);
  const path = useLocation().pathname;
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (hasToken && path === '/profile/auth') {
      navigate('/profile/edit', { replace: true });
    } else if (!hasToken && path === '/profile/edit') {
      navigate('/profile/auth', { replace: true });
    }
  }, [path, hasToken, navigate]);

  return <Outlet />;
};

export default AuthorizedRouter;

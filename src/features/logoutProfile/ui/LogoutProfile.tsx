import React, { FC, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch } from 'src/features/store/model';
import { clearProfile } from 'src/features/store/model/slices/profile';
import { tokenThunks } from 'src/features/store/model/slices/token';

const LogoutProfile: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearProfile());
    dispatch(tokenThunks.clearToken());
  }, [dispatch]);

  return <Navigate to="/profile/auth" replace={true} />;
};

export default LogoutProfile;

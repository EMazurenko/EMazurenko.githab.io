import { useNavigate } from 'react-router-dom';
import { AuthPair } from 'src/features/forms/AuthFrom/model/types';
import { profileService } from 'src/features/manageProfile/model/profileService';
import { useState } from 'react';
import { Profile } from 'src/entities/profile/model/types';
import { useAppDispatch } from 'src/features/store/model';
import { setProfile } from 'src/features/store/model/slices/profile';
import { tokenThunks } from 'src/features/store/model/slices/token';

export const useAuthorize = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string>();

  const baseAuthCallback = (authPair: AuthPair) => (cb: (email: string, password: string) => Profile) => {
    try {
      const profile = cb(authPair.email, authPair.password);
      dispatch(setProfile(profile));
      dispatch(tokenThunks.generateToken());
      navigate('/');
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  };

  return {
    error,
    onSuccessLogin: (authPair: AuthPair) =>
      baseAuthCallback(authPair)((email: string, password: string) => profileService.check(email, password)),
    onSuccessRegistration: (authPair: AuthPair) =>
      baseAuthCallback(authPair)((email: string, password: string) => profileService.add(email, password)),
  };
};

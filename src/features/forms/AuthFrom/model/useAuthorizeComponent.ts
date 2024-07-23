import { useState } from 'react';
import { useAppDispatch } from 'src/features/store/model';
import { setProfile } from 'src/features/store/model/slices/profile';
import { tokenThunks } from 'src/features/store/model/slices/token';
import { AuthPair } from 'src/shared/model/types';
import { coreService } from 'src/features/coreService/model';
import { ProfileAuthOutput } from 'src/features/manageProfile/model/profileService';

export const useAuthorizeComponent = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string>();

  const baseAuthCallback =
    (authPair: AuthPair) => (cb: (email: string, password: string) => Promise<ProfileAuthOutput>) => {
      setError('');
      cb(authPair.email, authPair.password)
        .then(({ profile, token }) => {
          dispatch(setProfile(profile));
          dispatch(tokenThunks.saveToken(token));
        })
        .catch((reason) => {
          console.log(reason);
          setError(reason.message);
        });
    };

  return {
    error,
    onSuccessLogin: (authPair: AuthPair) =>
      baseAuthCallback(authPair)((email: string, password: string) => coreService.checkProfile(email, password)),
    onSuccessRegistration: (authPair: AuthPair) =>
      baseAuthCallback(authPair)((email: string, password: string) => coreService.addProfile(email, password)),
  };
};

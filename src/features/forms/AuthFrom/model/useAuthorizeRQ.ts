import { useAppDispatch } from 'src/features/store/model';
import { AuthPair } from 'src/shared/model/types';
import { useMutation } from '@tanstack/react-query';
import { ProfileAuthOutput } from 'src/features/manageProfile/model/profileService';
import { tokenThunks } from 'src/features/store/model/slices/token';
import { setProfile } from 'src/features/store/model/slices/profile';
import { useEffect } from 'react';
import { coreService } from 'src/features/coreService/model';

export const useAuthorizeRQ = () => {
  const dispatch = useAppDispatch();
  const { mutate, data, error } = useMutation<ProfileAuthOutput, Error, () => Promise<ProfileAuthOutput>>({
    mutationKey: ['profile/auth'],
    mutationFn: async (cb: () => Promise<ProfileAuthOutput>) => {
      try {
        return await cb();
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
  });

  useEffect(() => {
    if (data) {
      const { profile, token } = data;

      if (token) {
        dispatch(tokenThunks.saveToken(token));
      }

      if (profile) {
        dispatch(setProfile(profile));
      }
    }
  }, [data, dispatch]);

  return {
    error: error?.message,
    onSuccessLogin: ({ email, password }: AuthPair) => mutate(() => coreService.checkProfile(email, password)),
    onSuccessRegistration: ({ email, password }: AuthPair) => mutate(() => coreService.addProfile(email, password)),
  };
};

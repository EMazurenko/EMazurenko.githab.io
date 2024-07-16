import { useAppDispatch, useAppSelector } from 'src/features/store/model';
import { authorize, selectProfileError } from 'src/features/store/model/slices/profile';
import { AuthPair } from 'src/shared/model/types';

export const useAuthorizeThunk = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectProfileError);

  return {
    error,
    onSuccessLogin: (authPair: AuthPair) => dispatch(authorize({ ...authPair, isRegistration: false })),
    onSuccessRegistration: (authPair: AuthPair) => dispatch(authorize({ ...authPair, isRegistration: true })),
  };
};

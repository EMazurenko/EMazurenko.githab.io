import { requestLogin, requestRegistration, selectProfileError } from 'src/features/store/model/slices/profile';
import { useAppDispatch, useAppSelector } from 'src/features/store/model';
import { AuthPair } from 'src/shared/model/types';

export const useAuthorizeSaga = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectProfileError);

  return {
    error,
    onSuccessLogin: (authPair: AuthPair) => dispatch(requestLogin(authPair)),
    onSuccessRegistration: (authPair: AuthPair) => dispatch(requestRegistration(authPair)),
  };
};

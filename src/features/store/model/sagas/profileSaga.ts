import { takeEvery, select, apply, put } from 'redux-saga/effects';
import {
  requestLogin,
  requestRegistration,
  selectAuthPair,
  setError,
  setProfile,
} from 'src/features/store/model/slices/profile';
import { AuthPair } from 'src/shared/model/types';
import { ProfileAuthOutput } from 'src/features/manageProfile/model/profileService';
import { setToken } from 'src/features/store/model/slices/token';
import { coreService } from 'src/features/coreService/model';

function* workerRegistrationProfile() {
  const { email, password } = (yield select(selectAuthPair)) as AuthPair;
  try {
    const { profile, token }: ProfileAuthOutput = yield apply(coreService, 'addProfile', [email, password]);
    yield put(setProfile(profile));
    yield put(setToken(token));
  } catch (e) {
    yield put(setError(e.message));
  }
}

function* workerLoginProfile() {
  const { email, password } = (yield select(selectAuthPair)) as AuthPair;
  try {
    const { profile, token }: ProfileAuthOutput = yield apply(coreService, 'checkProfile', [email, password]);
    yield put(setProfile(profile));
    yield put(setToken(token));
  } catch (e) {
    yield put(setError(e.message));
  }
}

export function* watcherProfileSaga() {
  yield takeEvery(requestRegistration.type, workerRegistrationProfile);
  yield takeEvery(requestLogin.type, workerLoginProfile);
}

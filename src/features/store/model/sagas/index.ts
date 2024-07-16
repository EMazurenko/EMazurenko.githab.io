import { all } from 'redux-saga/effects';
import { watcherProfileSaga } from 'src/features/store/model/sagas/profileSaga';

export function* rootSaga() {
  yield all([watcherProfileSaga()]);
}

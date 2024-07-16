import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { cart } from 'src/features/store/model/slices/cart';
import { init } from 'src/features/store/model/slices/init';
import { profile } from 'src/features/store/model/slices/profile';
import { token } from 'src/features/store/model/slices/token';
import { product } from 'src/features/store/model/slices/product';
import { rootSaga } from 'src/features/store/model/sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    cart,
    init,
    profile,
    token,
    product,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

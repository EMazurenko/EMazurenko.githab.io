import { StoreThunk } from 'src/features/store/model';
import { coreService } from 'src/features/coreService/model';
import {
  addProduct,
  clearError,
  setError,
  setHasMoreProducts,
} from 'src/features/store/model/slices/product/ProductStore';
import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { Product } from 'src/entities/product/model/types';

export const addInitProducts = (): StoreThunk => (dispatch) => {
  processError(
    dispatch,
    coreService.initLoadProducts().then(({ products, hasMoreProducts }) => {
      for (const product of products) {
        dispatch(addProduct(product));
      }
      dispatch(setHasMoreProducts(hasMoreProducts));
    })
  );
};

export const addMoreProducts = (): StoreThunk => (dispatch) => {
  processError(
    dispatch,
    coreService.loadMoreProducts().then(({ products, hasMoreProducts }) => {
      for (const product of products) {
        dispatch(addProduct(product));
      }
      dispatch(setHasMoreProducts(hasMoreProducts));
    })
  );
};

export const createProduct =
  (product: Product): StoreThunk =>
  (dispatch) => {
    processError(
      dispatch,
      coreService.createProduct(product).then((product) => {
        dispatch(addProduct(product));
      })
    );
  };

export const editProduct =
  (product: Product): StoreThunk =>
  (dispatch) => {
    processError(
      dispatch,
      coreService.editProduct(product).then((product) => {
        dispatch(addProduct(product));
      })
    );
  };

const processError = (dispatch: ThunkDispatch<unknown, unknown, UnknownAction>, promise: Promise<void>) => {
  dispatch(clearError());
  promise.catch((reason) => {
    console.error(reason);
    dispatch(setError(reason.message));
  });
};

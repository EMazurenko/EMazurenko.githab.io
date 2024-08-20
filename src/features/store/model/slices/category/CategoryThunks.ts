import { StoreThunk } from 'src/features/store/model';
import { coreService } from 'src/features/coreService/model';
import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import {
  addCategory,
  clearError,
  setCategories,
  setError,
  updateCategory,
} from 'src/features/store/model/slices/category/CategoryStore';
import { Category } from 'src/entities/category/model/types';

export const setInitCategories = (): StoreThunk => (dispatch) => {
  processError(
    dispatch,
    coreService.getCategories().then((categories) => {
      dispatch(setCategories(categories));
    })
  );
};

export const createCategory =
  (category: Category): StoreThunk =>
  (dispatch) => {
    processError(
      dispatch,
      coreService.createCategory(category).then((category) => {
        dispatch(addCategory(category));
      })
    );
  };

export const editCategory =
  (category: Category): StoreThunk =>
  (dispatch) => {
    processError(
      dispatch,
      coreService.editCategory(category).then((category) => {
        dispatch(updateCategory(category));
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

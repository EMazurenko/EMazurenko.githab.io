import { store } from './Store';
import { ThunkAction, UnknownAction } from '@reduxjs/toolkit';

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
export type ExtraParams = unknown;
export type StoreThunk<ReturnType = void> = ThunkAction<ReturnType, StoreState, ExtraParams, UnknownAction>;
export * from './hooks';

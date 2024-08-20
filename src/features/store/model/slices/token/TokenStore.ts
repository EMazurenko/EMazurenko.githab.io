import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreState, StoreThunk } from 'src/features/store/model';
import { authorize } from 'src/features/store/model/slices/profile';
import { coreService } from 'src/features/coreService/model';

const TOKEN_KEY = 'token';

type TokenStoreType = {
  value: string;
};

const initialState = {
  value: null,
} as TokenStoreType;

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authorize.fulfilled, (state, action) => {
      state.value = action.payload.token;
    });
  },
});

const saveToken =
  (token: string): StoreThunk =>
  (dispatch) => {
    dispatch(setToken(token));
    sessionStorage.setItem(TOKEN_KEY, token);
  };

const clearToken = (): StoreThunk => (dispatch) => {
  const token = null;
  dispatch(setToken(token));
  sessionStorage.removeItem(TOKEN_KEY);
  coreService.setToken(undefined);
};

const restoreToken = (): StoreThunk => (dispatch) => {
  const token = sessionStorage.getItem(TOKEN_KEY);
  if (token) {
    dispatch(saveToken(token));
    coreService.setToken(token);
  }
};

export const token = tokenSlice.reducer;
export const { setToken } = tokenSlice.actions;
export const tokenThunks = {
  saveToken,
  clearToken,
  restoreToken,
};
export const selectToken = (state: StoreState): string => state.token.value;
export const selectHasToken = (state: StoreState): boolean => !!selectToken(state);

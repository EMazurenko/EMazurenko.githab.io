import { Profile, ProfileRole } from 'src/entities/profile/model/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreState } from 'src/features/store/model';

type ProfileStoreType = {
  value: Profile;
};

const initialState = {} as ProfileStoreType;

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Profile>) => {
      state.value = action.payload;
    },
    clearProfile: (state) => {
      state.value = {} as Profile;
    },
  },
});

export const profile = profileSlice.reducer;
export const { setProfile, clearProfile } = profileSlice.actions;
export const selectProfile = (state: StoreState): Profile => state.profile.value;
export const selectIsAdminProfileRole = (state: StoreState): boolean => state.profile.value?.role === ProfileRole.ADMIN;

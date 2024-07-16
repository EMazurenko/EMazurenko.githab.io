import { useAppDispatch, useAppSelector } from 'src/features/store/model';
import { selectProfile, setProfile } from 'src/features/store/model/slices/profile';
import { Profile } from 'src/entities/profile/model/types';
import { profileService } from 'src/features/manageProfile/model/profileService';
import { useState } from 'react';

export const useEditProfile = () => {
  const [textTooltip, setTextTooltip] = useState<string>();
  const sourceProfile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();

  const onSuccessEdit = (profile: Pick<Profile, 'nickname' | 'about'>) => {
    setTextTooltip('');
    profileService
      .update({ ...sourceProfile, ...profile })
      .then((updatedProfile) => {
        dispatch(setProfile(updatedProfile));
        setTextTooltip('🤟');
      })
      .catch((reason) => {
        console.log(reason);
        setTextTooltip(reason.message);
      });
  };

  return {
    textTooltip,
    sourceProfile,
    onSuccessEdit,
  };
};

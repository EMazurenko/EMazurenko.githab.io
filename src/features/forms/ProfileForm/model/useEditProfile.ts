import { useAppDispatch, useAppSelector } from 'src/features/store/model';
import { selectProfile, setProfile } from 'src/features/store/model/slices/profile';
import { Profile } from 'src/entities/profile/model/types';
import { useState } from 'react';
import { coreService } from 'src/features/coreService/model';

export const useEditProfile = () => {
  const [textTooltip, setTextTooltip] = useState<string>();
  const sourceProfile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();

  const onSuccessEdit = (profile: Pick<Profile, 'nickname' | 'about'>) => {
    setTextTooltip('');
    coreService
      .updateProfile({ ...sourceProfile, ...profile })
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

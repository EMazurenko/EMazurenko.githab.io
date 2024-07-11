import { useAppDispatch, useAppSelector } from 'src/features/store/model';
import { selectProfile, setProfile } from 'src/features/store/model/slices/profile';
import { useNavigate } from 'react-router-dom';
import { Profile } from 'src/entities/profile/model/types';
import { profileService } from 'src/features/manageProfile/model/profileService';

export const useEditProfile = () => {
  const sourceProfile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSuccessEdit = (profile: Pick<Profile, 'nickname' | 'about'>) => {
    const updatedProfile = profileService.update({ ...sourceProfile, ...profile });
    dispatch(setProfile(updatedProfile));
    navigate('/');
  };

  return {
    sourceProfile,
    onSuccessEdit,
  };
};

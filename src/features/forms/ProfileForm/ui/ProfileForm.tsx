import React, { FC } from 'react';
import EditProfileForm from 'src/features/forms/ProfileForm/ui/EditProfileForm/EditProfileForm';
import { useEditProfile } from 'src/features/forms/ProfileForm/model/useEditProfile';

type ProfileFormProps = {
  className: string;
};

export const ProfileForm: FC<ProfileFormProps> = ({ ...props }) => {
  const { sourceProfile, onSuccessEdit } = useEditProfile();
  const formProps = { ...props, ...sourceProfile };

  return <EditProfileForm {...formProps} onSuccessEdit={onSuccessEdit} />;
};

import React, { FC } from 'react';
import { ProfileForm } from 'src/features/forms/ui/ProfileForm';
import s from './Profile.module.scss';

export const Profile: FC = () => {
  return <ProfileForm classname={s.content} />;
};

import React from 'react';
import EditProfileForm from './EditProfileForm';

export default {
  title: 'UI Kit/Forms/Profile form',
  component: EditProfileForm,
};

export const Default = () => <EditProfileForm onSuccessEdit={(profile) => console.log(profile)} />;

import React, { FC } from 'react';
import EditProfileForm from 'src/features/forms/ProfileForm/ui/EditProfileForm/EditProfileForm';
import { useEditProfile } from 'src/features/forms/ProfileForm/model/useEditProfile';
import { TooltipPanel } from 'src/shared/ui/tooltipPanel';
import s from './ProfileForm.module.scss';

const TOOLTIP_WIDTH = 400;

type ProfileFormProps = {
  className: string;
};

export const ProfileForm: FC<ProfileFormProps> = ({ ...props }) => {
  const { textTooltip, sourceProfile, onSuccessEdit } = useEditProfile();
  const formProps = { ...props, ...sourceProfile };

  return (
    <div className={s.root}>
      <EditProfileForm {...formProps} onSuccessEdit={onSuccessEdit} disableAbout={true} />
      <div className={s.error}>
        <TooltipPanel text={textTooltip} tooltipWidth={TOOLTIP_WIDTH} />
      </div>
    </div>
  );
};

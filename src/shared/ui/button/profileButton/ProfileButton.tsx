import React, { FC } from 'react';
import ProfileIcon from 'src/shared/ui/button/profileButton/ProfileIcon';
import { IconableButton } from 'src/shared/ui/button/iconableButton';
import { StyledLink } from 'src/shared/ui/styledLink';

const ProfileButton: FC = () => {
  return (
    <IconableButton>
      <StyledLink to="/profile/auth">
        <ProfileIcon />
      </StyledLink>
    </IconableButton>
  );
};

export default ProfileButton;

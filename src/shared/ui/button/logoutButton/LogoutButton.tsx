import React, { FC } from 'react';
import LogoutIcon from 'src/shared/ui/button/logoutButton/LogoutIcon';
import { IconableButton } from 'src/shared/ui/button/iconableButton';
import { StyledLink } from 'src/shared/ui/styledLink';

const LogoutButton: FC = () => {
  return (
    <IconableButton>
      <StyledLink to="/logout">
        <LogoutIcon />
      </StyledLink>
    </IconableButton>
  );
};

export default LogoutButton;

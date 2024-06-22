import React, { FC } from 'react';
import { IconableButton } from 'src/shared/ui/button/iconableButton';
import { StyledNavLink } from 'src/shared/ui/styledLink';
import { CartIcon } from 'src/shared/ui/button/goToCartButton/index';

const GoToCartButton: FC = () => {
  return (
    <IconableButton>
      <StyledNavLink to="/cart">
        <CartIcon />
      </StyledNavLink>
    </IconableButton>
  );
};

export default GoToCartButton;

import React, { FC } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import cn from 'clsx';
import s from './StyledLink.module.scss';

type StyledNavLinkProps = NavLinkProps;

const getClassName: NavLinkProps['className'] = ({ isActive }) => cn(s.root, isActive && s.active);

const StyledNavLink: FC<StyledNavLinkProps> = ({ to, children }) => {
  return (
    <NavLink className={getClassName} to={to}>
      {children}
    </NavLink>
  );
};
export default StyledNavLink;

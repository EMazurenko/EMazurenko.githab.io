import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import s from './StyledLink.module.scss';

type StyledLinkProps = LinkProps;

const StyledLink: FC<StyledLinkProps> = ({ to, children }) => {
  return (
    <Link className={s.root} to={to}>
      {children}
    </Link>
  );
};
export default StyledLink;

import React, { FC } from 'react';
import icon from './snowflake.svg';

type SnowflakeIconProps = {
  widthPx: number;
  heightPx: number;
};

export const SnowflakeIcon: FC<SnowflakeIconProps> = ({ widthPx, heightPx }) => {
  return <img src={icon} style={{ width: widthPx, height: heightPx }} alt="Снежинка" />;
};

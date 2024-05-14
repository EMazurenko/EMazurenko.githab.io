import React, { FC } from 'react';
import { SnowflakeIcon } from 'src/shared/ui/snowfall/ui/snowflake/SnowflakeIcon';
import s from './Snowflake.module.scss';

const BASE_SIZE_PX = 5;

type SnowflakeProps = {
  size: number;
  xPos: number;
  yPos: number;
  onFellSnowflake: () => void;
};

export const Snowflake: FC<SnowflakeProps> = ({ xPos, yPos, size, onFellSnowflake }) => {
  const widthPx = size * BASE_SIZE_PX;
  const heightPx = size * BASE_SIZE_PX;

  return (
    <div
      className={s.root}
      style={{ left: xPos, top: yPos, width: widthPx, height: heightPx }}
      onAnimationEnd={onFellSnowflake}
    >
      <SnowflakeIcon widthPx={widthPx} heightPx={heightPx} />
    </div>
  );
};

Snowflake.defaultProps = {
  size: 1,
  xPos: 300,
  yPos: 0,
};

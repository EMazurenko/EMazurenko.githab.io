import React, { memo, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import s from './Snowfall.module.scss';
import { Snowflake } from 'src/shared/ui/snowfall/ui/Snowflake/Snowflake';
import { default as SnowflakeModel } from 'src/shared/ui/snowfall/model/Snowflake';
import Cloud from 'src/shared/ui/snowfall/model/Cloud';

const body = document.body;
const SNOWFALL_CONTAINER_ID = 'snowfall';
const SNOWFLAKE_POOL_SIZE = 10;
const SNOWFLAKE_FALL_TIMEOUT = 1;

type SnowfallProperties = React.HTMLAttributes<HTMLDivElement>;

export const Snowfall = memo<SnowfallProperties>(({ style }) => {
  const [snowflakes, setSnowflakes] = useState<SnowflakeModel[]>([]);
  const cloud = useRef<Cloud>(null);

  useEffect(() => {
    const snowfall = document.getElementById(SNOWFALL_CONTAINER_ID);
    cloud.current = new Cloud(SNOWFLAKE_POOL_SIZE, snowfall.clientWidth);

    const appendFallingSnowflake = () => {
      const snowflake = cloud.current.getSnowflake();
      snowflake && setSnowflakes((prev) => [...prev, snowflake]);
    };

    const intervalId = setInterval(appendFallingSnowflake, SNOWFLAKE_FALL_TIMEOUT * 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleFallenSnowflake = (s: SnowflakeModel) => {
    cloud.current.returnSnowflake(s);
    setSnowflakes((prev) => prev.filter((p) => p.key != s.key));
  };

  return createPortal(
    <div className={s.root} style={style} id={SNOWFALL_CONTAINER_ID}>
      {snowflakes.map((s) => (
        <Snowflake
          key={s.key}
          xPos={s.pos.x}
          yPos={s.pos.y}
          size={s.height}
          onFellSnowflake={() => handleFallenSnowflake(s)}
        />
      ))}
    </div>,
    body
  );
});

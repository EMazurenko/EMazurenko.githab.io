import React, { FC, useLayoutEffect, useState } from 'react';
import cn from 'clsx';
import s from './Tooltip.module.scss';

type TooltipProps = {
  text: string;
  visible: boolean;
  onHideTooltip: () => void;
};

const Tooltip: FC<TooltipProps> = ({ text, visible, onHideTooltip }) => {
  const [classNames, setClassNames] = useState<string>(s.root);

  useLayoutEffect(() => {
    setClassNames(cn(s.root, visible ? s['appear'] : s['hide']));
  }, [visible]);

  useLayoutEffect(() => {
    visible && setClassNames(cn(s.root, s['appear']));
  }, [text, visible]);

  const handleHideAnimationEnd = () => {
    !visible && onHideTooltip();
  };

  return (
    <div className={classNames} onAnimationEnd={handleHideAnimationEnd}>
      <p className={s.content}>{text}</p>
    </div>
  );
};

export default Tooltip;

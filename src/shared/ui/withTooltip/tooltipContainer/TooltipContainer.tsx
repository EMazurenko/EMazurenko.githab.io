import React, { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Pos } from 'src/shared/model/types';
import Tooltip from 'src/shared/ui/withTooltip/tooltipContainer/tooltip/Tooltip';
import s from './TooltipContainer.module.scss';

const TOOLTIP_LIFETIME_SEC = 8;

const body = document.body;

export type TooltipContainerProps = {
  text: string;
  onHideTooltip: () => void;
  pos: Pos;
  tooltipWidth: number;
};

const TooltipContainer: FC<TooltipContainerProps> = ({ text, tooltipWidth, pos, ...props }) => {
  const [visible, setVisible] = useState<boolean>(true);

  const handleHideTooltip = () => {
    setVisible(false);
  };

  useEffect(() => {
    setVisible(true);
    const timeoutId = setTimeout(handleHideTooltip, TOOLTIP_LIFETIME_SEC * 1000);
    return () => clearTimeout(timeoutId);
  }, [text]);

  return createPortal(
    <div className={s.root} onClick={handleHideTooltip} style={{ ...pos, width: `${tooltipWidth}px` }}>
      <Tooltip {...props} text={text} visible={visible} />
    </div>,
    body
  );
};

export default TooltipContainer;

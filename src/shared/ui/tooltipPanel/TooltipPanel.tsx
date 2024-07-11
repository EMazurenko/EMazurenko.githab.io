import React, { FC, useEffect } from 'react';
import { withTooltip, CauseTooltip } from 'src/shared/ui/withTooltip';

type TooltipPanelProps = { text: string } & CauseTooltip;

const TooltipPanel: FC<TooltipPanelProps> = ({ text, onCauseTooltip }) => {
  useEffect(() => {
    text && onCauseTooltip && onCauseTooltip(text);
  }, [text, onCauseTooltip]);
  return <></>;
};

export default withTooltip<TooltipPanelProps>(TooltipPanel);

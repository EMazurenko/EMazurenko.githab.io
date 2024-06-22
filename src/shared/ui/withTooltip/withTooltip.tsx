import React, { Component, FC, useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import TooltipContainer, { TOOLTIP_WIDTH } from 'src/shared/ui/withTooltip/tooltipContainer/TooltipContainer';
import { Pos } from 'src/shared/model/types';

export type CauseTooltip = {
  onCauseTooltip?: (text: string) => void;
};

export function withTooltip<T extends CauseTooltip>(Component: FC<T>) {
  return function ComposeComponent({ ...props }: T) {
    const [text, setText] = useState<string>();
    const [visibleTooltip, setVisibleTooltip] = useState<boolean>(false);
    const [pos, setPos] = useState<Pos>();
    const componentRef = useRef<HTMLDivElement>();

    const handleCauseTooltip = useCallback((text: string) => {
      setText(text);
      setVisibleTooltip(true);
    }, []);

    const handleCloseTooltip = () => {
      setVisibleTooltip(false);
    };

    useLayoutEffect(() => {
      const calcPosition = () => {
        const parent = componentRef.current.getBoundingClientRect();
        setPos({
          top: parent.top + parent.height,
          left: Math.max(0, parent.left + (parent.width - TOOLTIP_WIDTH) / 2),
        });
      };

      const resizeObserver = new ResizeObserver(() => {
        calcPosition();
      });
      resizeObserver.observe(document.body);

      return () => resizeObserver.unobserve(document.body);
    }, []);

    const memoComponent = useMemo(() => {
      return <Component {...props} onCauseTooltip={handleCauseTooltip} />;
    }, [props, handleCauseTooltip]);

    return (
      <div ref={componentRef} style={{ display: 'inline-block' }}>
        {memoComponent}
        {visibleTooltip && <TooltipContainer text={text} onHideTooltip={handleCloseTooltip} pos={pos} />}
      </div>
    );
  };
}

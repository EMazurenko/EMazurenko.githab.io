import React from 'react';
import TooltipContainer, { TooltipContainerProps } from 'src/shared/ui/withTooltip/tooltipContainer/TooltipContainer';

export default {
  title: 'UI Kit/Tooltip',
  component: TooltipContainer,
};

const handleHideTooltip = () => {
  console.log('Tooltip closed');
};

const Template = (args: TooltipContainerProps) => <TooltipContainer {...args} onHideTooltip={handleHideTooltip} />;

export const DefaultTooltip = Template.bind({});
DefaultTooltip.args = {
  text: 'Подсказка',
  pos: { top: 10, left: 10 },
} as TooltipContainerProps;

import React, { FC } from 'react';
import s from './CostLabel.module.scss';
import { priceFormatter } from 'src/shared/utils/FormatUtils';

type CostLabelType = {
  cost: number;
};

const CostLabel: FC<CostLabelType> = ({ cost }) => {
  return <span className={s.root}>{priceFormatter.format(cost)}</span>;
};

export default CostLabel;

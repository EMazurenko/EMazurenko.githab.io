import React, { FC, memo } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import s from './MoreButton.module.scss';
import useAppendProducts, { moreButtonId } from 'src/features/listProduct/model/useAppendProducts';

type MoreButtonProps = {
  onMoreProducts: () => void;
} & WithTranslation;

const MoreButton: FC<MoreButtonProps> = ({ onMoreProducts, t }) => {
  useAppendProducts(onMoreProducts);

  return (
    <button id={moreButtonId} className={s.root} onClick={onMoreProducts}>
      {t('product.more', 'Показать ещё')}
    </button>
  );
};

export default withTranslation()(memo<MoreButtonProps>(MoreButton));

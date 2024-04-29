import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import s from './MoreButton.module.scss';
import useAppendProducts, { moreButtonId } from 'src/features/listProduct/model/useAppendProducts';

type MoreButtonProps = {
  onMoreProducts: () => void;
};

const MoreButton: FC<MoreButtonProps> = ({ onMoreProducts }) => {
  useAppendProducts(onMoreProducts);
  const { t } = useTranslation();

  return (
    <button id={moreButtonId} className={s.root} onClick={onMoreProducts}>
      {t('product.more', 'Показать ещё')}
    </button>
  );
};

export default memo<MoreButtonProps>(MoreButton);

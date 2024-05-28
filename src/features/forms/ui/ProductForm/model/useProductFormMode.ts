import { TFunction } from 'i18next';
import { useMemo } from 'react';

type Mode = {
  labels: {
    title: string;
    submit: string;
  };
  isEdit: boolean;
};

export const useProductFormMode = (t: TFunction, productId: string) => {
  const isEditMode = !!productId;

  const mode: Mode = useMemo(() => {
    if (isEditMode) {
      return {
        labels: {
          title: t('product.edit.title', 'Редактирование карточки продукта'),
          submit: t('product.edit.submit', 'Обновить'),
        },
        isEdit: true,
      };
    } else {
      return {
        labels: {
          title: t('product.create.title', 'Создание карточки продукта'),
          submit: t('product.create.submit', 'Сохранить'),
        },
        isEdit: false,
      };
    }
  }, [t, isEditMode]);

  return { mode };
};

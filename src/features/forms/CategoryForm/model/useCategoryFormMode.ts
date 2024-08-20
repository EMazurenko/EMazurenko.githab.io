import { TFunction } from 'i18next';
import { useMemo } from 'react';
import { FormMode } from 'src/shared/ui/form';

export const useCategoryFormMode = (t: TFunction, categoryId: string) => {
  const isEditMode = !!categoryId;

  const mode: FormMode = useMemo(() => {
    if (isEditMode) {
      return {
        labels: {
          title: t('category.edit.title', 'Редактирование категории'),
          submit: t('category.edit.submit', 'Обновить'),
        },
        isEdit: true,
      };
    } else {
      return {
        labels: {
          title: t('category.create.title', 'Создание категории'),
          submit: t('category.create.submit', 'Сохранить'),
        },
        isEdit: false,
      };
    }
  }, [t, isEditMode]);

  return { mode };
};

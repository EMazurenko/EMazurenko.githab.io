import React, { FC } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ModalWindow } from 'src/shared/ui/modal/ModalWindow';
import { useOnCloseProductForm } from 'src/features/manageProduct/model/useOnCloseProductForm';
import { useAppSelector } from 'src/features/store/model';
import { selectCategoryById } from 'src/features/store/model/slices/category';
import CategoryForm from 'src/features/forms/CategoryForm/ui/CategoryForm';

const TITLE_TEMPLATE = 'Редактирование категории {categoryId}';
const CATEGORY_NOT_EXISTS_ERROR_TEMPLATE = 'Категория "{categoryId}" не существует';

type EditCategoryModalProps = WithTranslation;

const EditCategoryModal: FC<EditCategoryModalProps> = ({ t }) => {
  const { onClose } = useOnCloseProductForm();
  const { categoryId } = useParams();
  const existsCategory = !!useAppSelector(selectCategoryById(categoryId));

  return (
    <ModalWindow
      title={t('category.edit.title', { defaultValue: TITLE_TEMPLATE }).replace('{categoryId}', categoryId)}
      onClose={onClose}
    >
      {existsCategory ? (
        <CategoryForm categoryId={categoryId} onSubmit={onClose} />
      ) : (
        <div>
          {t('modals.categoryNotExists', { ns: 'errors', defaultValue: CATEGORY_NOT_EXISTS_ERROR_TEMPLATE }).replace(
            '{categoryId}',
            categoryId
          )}
        </div>
      )}
    </ModalWindow>
  );
};

export default withTranslation(['modals', 'error'])(EditCategoryModal);

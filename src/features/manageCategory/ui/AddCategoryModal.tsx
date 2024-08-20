import React, { FC } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { ModalWindow } from 'src/shared/ui/modal/ModalWindow';
import { useOnCloseCategoryForm } from 'src/features/manageCategory/model/useOnCloseCategoryForm';
import CategoryForm from 'src/features/forms/CategoryForm/ui/CategoryForm';

type AddCategoryModalProps = WithTranslation;

const AddCategoryModal: FC<AddCategoryModalProps> = ({ t }) => {
  const { onClose } = useOnCloseCategoryForm();

  return (
    <ModalWindow title={t('category.add.title', 'Добавление категории')} onClose={onClose}>
      <CategoryForm onSubmit={onClose} />
    </ModalWindow>
  );
};

export default withTranslation(['modals'])(AddCategoryModal);

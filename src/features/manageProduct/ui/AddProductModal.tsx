import React, { FC } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { ModalWindow } from 'src/shared/ui/modal/ModalWindow';
import ProductForm from 'src/features/forms/ProductForm/ui/ProductForm';
import { useOnCloseProductForm } from 'src/features/manageProduct/model/useOnCloseProductForm';

type AddProductModalProps = WithTranslation;

const AddProductModal: FC<AddProductModalProps> = ({ t }) => {
  const { onClose } = useOnCloseProductForm();

  return (
    <ModalWindow title={t('product.add.title', 'Добавление продукта')} onClose={onClose}>
      <ProductForm onSubmit={onClose} />
    </ModalWindow>
  );
};

export default withTranslation(['modals'])(AddProductModal);

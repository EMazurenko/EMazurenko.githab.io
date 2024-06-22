import React, { FC } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { ModalWindow } from 'src/shared/ui/modal/ModalWindow';
import ProductForm from 'src/features/forms/ui/ProductForm/ui/ProductForm';
import { useOnCloseProductForm } from 'src/features/managementProduct/model/useOnCloseProductForm';

type AddProductModalProps = WithTranslation;

const AddProductModal: FC<AddProductModalProps> = ({ t }) => {
  const { onClose } = useOnCloseProductForm();

  return (
    <ModalWindow title={t('addProduct.title', 'Добавление продукта')} onClose={onClose}>
      <ProductForm />
    </ModalWindow>
  );
};

export default withTranslation(['modals'])(AddProductModal);

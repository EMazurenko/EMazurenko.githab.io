import React, { FC } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ModalWindow } from 'src/shared/ui/modal/ModalWindow';
import ProductForm from 'src/features/forms/ProductForm/ui/ProductForm';
import { useOnCloseProductForm } from 'src/features/manageProduct/model/useOnCloseProductForm';
import { useAppSelector } from 'src/features/store/model';
import { selectProductById } from 'src/features/store/model/slices/product';

const TITLE_TEMPLATE = 'Редактирование продукта {productId}';
const PRODUCT_NOT_EXISTS_ERROR_TEMPLATE = 'Продукт "{productId}" не существует';

type EditProductModalProps = WithTranslation;

const EditProductModal: FC<EditProductModalProps> = ({ t }) => {
  const { onClose } = useOnCloseProductForm();
  const { productId } = useParams();
  const existsProduct = !!useAppSelector(selectProductById(productId));

  return (
    <ModalWindow
      title={t('editProduct.title', { defaultValue: TITLE_TEMPLATE }).replace('{productId}', productId)}
      onClose={onClose}
    >
      {existsProduct ? (
        <ProductForm productId={productId} onSubmit={onClose} />
      ) : (
        <div>
          {t('modals.productNotExists', { ns: 'errors', defaultValue: PRODUCT_NOT_EXISTS_ERROR_TEMPLATE }).replace(
            '{productId}',
            productId
          )}
        </div>
      )}
    </ModalWindow>
  );
};

export default withTranslation(['modals', 'error'])(EditProductModal);

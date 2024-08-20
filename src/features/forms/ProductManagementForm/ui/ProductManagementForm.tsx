import React, { FC } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { FormButton, FormContainer, FormInput, FormInputsTypes } from 'src/shared/ui/form';
import s from './ProductManagementForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'src/features/store/model';
import { selectProducts } from 'src/features/store/model/slices/product';

type ProductManagementFormValues = {
  productId: string;
};

type ProductManagementFormProps = WithTranslation;

const ProductManagementForm: FC<ProductManagementFormProps> = ({ t }) => {
  const { register, getValues } = useForm<ProductManagementFormValues>();
  const products = useAppSelector(selectProducts);
  const navigate = useNavigate();

  const productIds = products.map((p) => ({ value: p.id, text: p.name }));

  const handleAddProduct = () => {
    navigate('/warehouse/product/add');
  };

  const handleEditProduct = () => {
    navigate('/warehouse/product/edit/' + getValues('productId'));
  };

  return (
    <FormContainer className={s.root} title={t('productManagement.product.title', 'Добавление/Редактирование товаров')}>
      <div>
        <FormButton type={'button'} onClick={handleAddProduct}>
          {t('productManagement.product.buttons.add', 'Добавить продукт')}
        </FormButton>

        <hr />

        <FormInput
          label={t('productManagement.product.inputs.productId.label', 'Продукт')}
          inputType={FormInputsTypes.select}
          selectOptions={productIds}
          {...register('productId')}
        />

        <FormButton type={'button'} onClick={handleEditProduct}>
          {t('productManagement.product.buttons.edit', 'Редактировать продукт')}
        </FormButton>
      </div>
    </FormContainer>
  );
};

export default withTranslation(['forms'])(ProductManagementForm);

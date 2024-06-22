import React, { FC } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { useProductStore } from 'src/features/forms/ui/ProductForm/model/useProductStore';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Product } from 'src/entities/product/model/types';
import { useProductFormMode } from 'src/features/forms/ui/ProductForm/model/useProductFormMode';
import { FormButton, FormContainer, FormInput, FormInputsTypes } from 'src/shared/ui/form';
import s from './ProductForm.module.scss';
import PhotoPreview from 'src/features/forms/ui/ProductForm/ui/PhotoPreview/PhotoPreview';

const MIN_PRICE_VALUE = 0.01;

type ProductFormValues = {
  name: string;
  photo: string;
  desc: string;
  price: number;
  categoryId: string;
};

type ProductFormProps = {
  productId?: string;
  onSubmit?: () => void;
} & WithTranslation;

const ProductForm: FC<ProductFormProps> = ({ t, productId, onSubmit }) => {
  const { mode } = useProductFormMode(t, productId);
  const { initProduct, getProduct, saveProduct, findCategory, getCategoryOptions } = useProductStore(productId);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm<ProductFormValues>({
    defaultValues: { ...initProduct, categoryId: initProduct.category.id },
  });

  const handleClick: SubmitHandler<ProductFormValues> = (data) => {
    const currentProduct = getProduct(initProduct.id);

    const newProduct = {
      ...currentProduct,
      ...data,
      oldPrice: currentProduct.price,
      category: findCategory(data.categoryId),
    } as Product;

    //Перезапись цены для усечения ведущих нулей
    setValue('price', data.price);

    saveProduct(newProduct);
    reset(undefined, {
      keepDirtyValues: mode.isEdit,
    });
    onSubmit && onSubmit();
  };

  return (
    <FormContainer className={s.root} onSubmit={handleSubmit(handleClick)} title={mode.labels.title}>
      <FormInput
        label={t('product.inputs.name.label', 'Наименование товара')}
        error={errors.name?.message}
        inputType={FormInputsTypes.simple}
        isRequired={true}
        placeholder={t('product.inputs.name.placeholder', '')}
        {...register('name', {
          required: t('forms.requiredField', { ns: 'errors', defaultValue: 'Поле является обязательным' }),
        })}
      />

      <FormInput
        label={t('product.inputs.desc.label', 'Описание товара')}
        inputType={FormInputsTypes.textarea}
        placeholder={t('product.inputs.desc.placeholder', 'укажите описание')}
        {...register('desc')}
      />

      <FormInput
        label={t('product.inputs.photo.label', 'Ссылка на фото товара')}
        error={errors.photo?.message}
        inputType={FormInputsTypes.simple}
        isRequired={true}
        placeholder={t('product.inputs.photo.placeholder', 'URL')}
        {...register('photo', {
          required: t('forms.requiredField', { ns: 'errors', defaultValue: 'Поле является обязательным' }),
        })}
      />

      <PhotoPreview control={control} />

      <FormInput
        label={t('product.inputs.price.label', 'Цена')}
        error={errors.price?.message}
        inputType={FormInputsTypes.number}
        isRequired={true}
        placeholder={t('product.inputs.price.placeholder', 'укажите цену')}
        {...register('price', {
          valueAsNumber: true,
          min: {
            value: MIN_PRICE_VALUE,
            message: t('forms.positiveValue', { ns: 'errors', defaultValue: 'Значение должно быть положительным' }),
          },
          required: t('forms.requiredField', { ns: 'errors', defaultValue: 'Поле является обязательным' }),
        })}
      />

      <FormInput
        label={t('product.inputs.categoryId.label', 'Категория товара')}
        inputType={FormInputsTypes.select}
        selectOptions={getCategoryOptions}
        {...register('categoryId')}
      />

      <FormButton type={'submit'}>{mode.labels.submit}</FormButton>
    </FormContainer>
  );
};

export default withTranslation(['forms', 'errors'])(ProductForm);

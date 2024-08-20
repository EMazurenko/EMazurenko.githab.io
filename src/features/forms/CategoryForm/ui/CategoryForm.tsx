import React, { FC } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormButton, FormContainer, FormInput, FormInputsTypes } from 'src/shared/ui/form';
import s from 'src/features/forms/ProductForm/ui/ProductForm.module.scss';
import PhotoPreview from 'src/shared/ui/form/PhotoPreview/PhotoPreview';
import { useCategoryFormMode } from 'src/features/forms/CategoryForm/model/useCategoryFormMode';
import { useCategoryStore } from 'src/features/forms/CategoryForm/model/useCategoryStore';
import { Category } from 'src/entities/category/model/types';

type CategoryFormValues = {
  name: string;
  photo: string;
};

type CategoryFormProps = {
  categoryId?: string;
  onSubmit?: () => void;
} & WithTranslation;

const CategoryForm: FC<CategoryFormProps> = ({ t, categoryId, onSubmit }) => {
  const { mode } = useCategoryFormMode(t, categoryId);
  const { initCategory, saveCategory } = useCategoryStore(categoryId);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<CategoryFormValues>({
    defaultValues: { ...initCategory },
  });

  const handleClick: SubmitHandler<CategoryFormValues> = (data) => {
    const currentCategory = initCategory;

    const newCategory = {
      ...currentCategory,
      ...data,
    } as Category;

    saveCategory(newCategory);
    reset(undefined, {
      keepDirtyValues: mode.isEdit,
    });
    onSubmit && onSubmit();
  };

  return (
    <FormContainer className={s.root} onSubmit={handleSubmit(handleClick)} title={mode.labels.title}>
      <FormInput
        label={t('category.inputs.name.label', 'Наименование категории')}
        error={errors.name?.message}
        inputType={FormInputsTypes.simple}
        isRequired={true}
        placeholder={t('category.inputs.name.placeholder', '')}
        {...register('name', {
          required: t('forms.requiredField', { ns: 'errors', defaultValue: 'Поле является обязательным' }),
        })}
      />

      <FormInput
        label={t('category.inputs.photo.label', 'Ссылка на фото категории')}
        error={errors.photo?.message}
        inputType={FormInputsTypes.simple}
        placeholder={t('category.inputs.photo.placeholder', 'URL')}
        {...register('photo')}
      />

      <PhotoPreview control={control} />

      <FormButton type={'submit'}>{mode.labels.submit}</FormButton>
    </FormContainer>
  );
};

export default withTranslation(['forms', 'errors'])(CategoryForm);

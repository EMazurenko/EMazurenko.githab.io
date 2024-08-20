import React, { FC } from 'react';
import s from './CategoryManagementForm.module.scss';
import { withTranslation, WithTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useAppSelector } from 'src/features/store/model';
import { useNavigate } from 'react-router-dom';
import { FormButton, FormContainer, FormInput, FormInputsTypes } from 'src/shared/ui/form';
import { selectCategories } from 'src/features/store/model/slices/category';

type CategoryManagementFormValues = {
  categoryId: string;
};

type CategoryManagementFormProps = WithTranslation;

const CategoryManagementForm: FC<CategoryManagementFormProps> = ({ t }) => {
  const { register, getValues } = useForm<CategoryManagementFormValues>();
  const categories = useAppSelector(selectCategories);
  const navigate = useNavigate();

  const categoryIds = categories.map((c) => ({ value: c.id, text: c.name }));

  const handleAddCategory = () => {
    navigate('/warehouse/category/add');
  };

  const handleEditCategory = () => {
    navigate('/warehouse/category/edit/' + getValues('categoryId'));
  };

  return (
    <FormContainer
      className={s.root}
      title={t('productManagement.category.title', 'Добавление/Редактирование товаров')}
    >
      <div>
        <FormButton type={'button'} onClick={handleAddCategory}>
          {t('productManagement.category.buttons.add', 'Добавить категорию')}
        </FormButton>

        <hr />

        <FormInput
          label={t('productManagement.category.inputs.categoryId.label', 'Категория')}
          inputType={FormInputsTypes.select}
          selectOptions={categoryIds}
          {...register('categoryId')}
        />

        <FormButton type={'button'} onClick={handleEditCategory}>
          {t('productManagement.category.buttons.edit', 'Редактировать категорию')}
        </FormButton>
      </div>
    </FormContainer>
  );
};

export default withTranslation(['forms'])(CategoryManagementForm);

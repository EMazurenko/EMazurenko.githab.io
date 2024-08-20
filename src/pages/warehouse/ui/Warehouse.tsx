import React, { FC } from 'react';
import s from './Warehouse.module.scss';
import { Outlet, Navigate } from 'react-router-dom';
import { ProductManagementForm } from 'src/features/forms/ProductManagementForm';
import { CategoryManagementForm } from 'src/features/forms/CategoryManagmentForm';
import { useAppSelector } from 'src/features/store/model';
import { selectIsAdminProfileRole } from 'src/features/store/model/slices/profile';
import { selectProductError } from 'src/features/store/model/slices/product';
import { TooltipPanel } from 'src/shared/ui/tooltipPanel';

const Warehouse: FC = () => {
  const isAdmin = useAppSelector(selectIsAdminProfileRole);
  const productError = useAppSelector(selectProductError);

  return (
    <>
      {isAdmin ? (
        <>
          <div className={s.error}>
            <TooltipPanel text={productError} />
          </div>
          <ProductManagementForm />
          <br />
          <CategoryManagementForm />
          <Outlet />
        </>
      ) : (
        <Navigate to="/" replace={true} />
      )}
    </>
  );
};

export default Warehouse;

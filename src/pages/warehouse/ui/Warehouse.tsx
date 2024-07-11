import React, { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { ProductManagementForm } from 'src/features/forms/ProductManagementForm';
import { useAppSelector } from 'src/features/store/model';
import { selectIsAdminProfileRole } from 'src/features/store/model/slices/profile';

const Warehouse: FC = () => {
  const isAdmin = useAppSelector(selectIsAdminProfileRole);

  return (
    <>
      {isAdmin ? (
        <>
          <ProductManagementForm />
          <Outlet />
        </>
      ) : (
        <Navigate to="/" replace={true} />
      )}
    </>
  );
};

export default Warehouse;

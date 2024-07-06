import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ProductManagementForm } from 'src/features/forms/ui/ProductManagementForm';

const Warehouse: FC = () => {
  return (
    <>
      <ProductManagementForm />
      <Outlet />
    </>
  );
};

export default Warehouse;

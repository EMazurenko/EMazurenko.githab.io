import React from 'react';
import { createHashRouter, createRoutesFromElements, Outlet, Route, RouterProvider, Navigate } from 'react-router-dom';
import { Hello } from 'src/pages/hello/ui';
import { PageLayout } from 'src/widgets/layout/ui';
import { Profile } from 'src/pages/profile/ui';
import { Cart } from 'src/pages/cart/ui';
import { Products } from 'src/pages/products/ui';
import { Warehouse } from 'src/pages/warehouse/ui';
import { NotFound } from 'src/pages/notFound/ui';
import { EditProductModal, AddProductModal } from 'src/features/manageProduct/ui';
import { Auth } from 'src/pages/auth/ui';
import { LogoutProfile } from 'src/features/logoutProfile/ui';
import { AuthorizedRouter } from 'src/features/authorizedRouter/ui';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Navigate to={'products'} replace />} />
        <Route path="profile" element={<AuthorizedRouter />}>
          <Route index element={<Navigate to={'auth'} replace />} />
          <Route path="edit" element={<Profile />} />
          <Route path="auth" element={<Auth />} />
        </Route>
        <Route path="logout" element={<LogoutProfile />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Products />} />
        <Route path="warehouse" element={<Warehouse />}>
          <Route path="add" element={<AddProductModal />} />
          <Route path="edit">
            <Route index element={<Navigate to={'/warehouse'} replace />} />
            <Route path=":productId" element={<EditProductModal />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="hello" element={<Hello />} />
    </Route>
  )
);

export const Router = () => <RouterProvider router={router} />;

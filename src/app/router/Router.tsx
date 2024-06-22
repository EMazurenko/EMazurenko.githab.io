import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { Hello } from 'src/pages/hello/ui';
import { PageLayout } from 'src/widgets/layout/ui';
import { Profile } from 'src/pages/profile/ui';
import { Cart } from 'src/pages/cart/ui';
import { Products } from 'src/pages/products/ui';
import { Warehouse } from 'src/pages/warehouse/ui';
import { NotFound } from 'src/pages/notFound/ui';
import AddProductModal from 'src/features/managementProduct/ui/AddProductModal';
import { EditProductModal } from 'src/features/managementProduct/ui';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Navigate to={'products'} replace />} />
        <Route path="profile" element={<Profile />} />
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

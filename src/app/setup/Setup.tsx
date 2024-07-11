import React, { FC, useEffect } from 'react';
import '../localization/config';
import { useAppDispatch, useAppSelector } from 'src/features/store/model';
import { initialize, selectIsInit } from 'src/features/store/model/slices/init';
import { addRandomProducts } from 'src/features/store/model/slices/product';

const COUNT_INIT_PRODUCTS = 15;

type StartupProps = { children: React.ReactNode };

export const Setup: FC<StartupProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const isInit = useAppSelector(selectIsInit);

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  useEffect(() => {
    if (isInit) {
      dispatch(addRandomProducts(COUNT_INIT_PRODUCTS));
    }
  }, [isInit, dispatch]);

  return <>{children}</>;
};

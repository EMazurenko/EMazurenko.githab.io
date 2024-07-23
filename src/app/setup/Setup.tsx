import React, { FC, useEffect, useInsertionEffect } from 'react';
import '../localization/config';
import { useAppDispatch, useAppSelector } from 'src/features/store/model';
import { initialize, selectIsInit } from 'src/features/store/model/slices/init';
import { addInitProducts, setInitCategories } from 'src/features/store/model/slices/product';

type StartupProps = { children: React.ReactNode };

export const Setup: FC<StartupProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const isInit = useAppSelector(selectIsInit);

  useInsertionEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  useEffect(() => {
    if (isInit) {
      dispatch(addInitProducts());
      dispatch(setInitCategories());
    }
  }, [isInit, dispatch]);

  return <>{children}</>;
};

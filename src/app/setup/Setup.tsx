import React, { FC, useEffect, useInsertionEffect } from 'react';
import '../localization/config';
import { useAppDispatch, useAppSelector } from 'src/features/store/model';
import { initialize, selectIsInit } from 'src/features/store/model/slices/init';
import { addInitProducts } from 'src/features/store/model/slices/product';
import { selectHasToken, tokenThunks } from 'src/features/store/model/slices/token';
import { loadProfile } from 'src/features/store/model/slices/profile';
import { setInitCategories } from 'src/features/store/model/slices/category';

type StartupProps = { children: React.ReactNode };

export const Setup: FC<StartupProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const isInit = useAppSelector(selectIsInit);
  const hasToken = useAppSelector(selectHasToken);

  useInsertionEffect(() => {
    dispatch(initialize());
    dispatch(tokenThunks.restoreToken());
  }, [dispatch]);

  useEffect(() => {
    if (isInit) {
      dispatch(addInitProducts());
      dispatch(setInitCategories());
    }
  }, [isInit, dispatch]);

  useEffect(() => {
    if (hasToken) {
      dispatch(loadProfile());
    }
  }, [hasToken, dispatch]);

  return <>{children}</>;
};

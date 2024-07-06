import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/features/store/model/Store';

type StoreProviderProps = { children: React.ReactNode };

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => <Provider store={store}>{children}</Provider>;

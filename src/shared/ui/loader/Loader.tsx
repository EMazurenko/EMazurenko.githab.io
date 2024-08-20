import React, { FC, ReactNode, Suspense } from 'react';
import Loading from 'src/shared/ui/loader/loading/Loading';

type LoaderProps = {
  children: ReactNode;
};

const Loader: FC<LoaderProps> = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default Loader;

import React, { FC } from 'react';
import { PageLayout } from 'src/widgets/layout/ui';
import { ProductCard } from 'src/entities/product/ui/productCard/ProductCard';
import useChangePageTitle from 'src/features/changePageTitle/model/useChangePageTitle';
import { ModalController } from 'src/shared/ui/modal/modalController/ModalController';
import { Snowfall } from 'src/shared/ui/snowfall';

export const Demo: FC = () => {
  useChangePageTitle('titlePage.demo');
  return (
    <>
      <Snowfall />
      <PageLayout>
        <ProductCard type={'Full'} initCountItems={0} />
        <ProductCard type={'Short'} initCountItems={1} />
        <ProductCard type={'InCart'} initCountItems={1} />
        <ModalController />
      </PageLayout>
    </>
  );
};

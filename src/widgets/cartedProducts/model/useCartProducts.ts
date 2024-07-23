import { useAppDispatch, useAppSelector } from 'src/features/store/model';
import { selectProducts } from 'src/features/store/model/slices/product';
import { clearCart, selectCart } from 'src/features/store/model/slices/cart';
import { useCallback, useState } from 'react';
import { coreService } from 'src/features/coreService/model';
import { OrderInput } from 'src/features/orderProducts/model/orderService';
import { useTranslation } from 'react-i18next';

export const useCartProducts = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const inCartProductIds = useAppSelector(selectCart).products;
  const inCartProducts = products.filter((p) => p.id in inCartProductIds);
  const [orderStatus, setOrderStatus] = useState<string>();

  const setTextResult = useCallback(
    (text) => {
      setOrderStatus(`${t('order.status', 'Статус заказа')}: ${text}`);
    },
    [t, setOrderStatus]
  );

  const handleOrderProducts = useCallback(() => {
    const orderInput = {
      products: Object.entries<number>(inCartProductIds).map((i) => {
        return { id: i[0], quantity: i[1] };
      }),
    };
    setOrderStatus('');
    coreService
      .order(orderInput as OrderInput)
      .then(({ status }) => {
        setTextResult(status);
        dispatch(clearCart());
      })
      .catch((reason) => setTextResult(reason.message));
  }, [inCartProductIds, setTextResult, setOrderStatus, dispatch]);

  return { inCartProducts, onOrderProducts: handleOrderProducts, orderStatus };
};

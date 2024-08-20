import { useAppDispatch, useAppSelector } from 'src/features/store/model';
import { selectProducts } from 'src/features/store/model/slices/product';
import { clearCart, selectCart } from 'src/features/store/model/slices/cart';
import { useCallback, useState } from 'react';
import { coreService } from 'src/features/coreService/model';
import { OrderInput } from 'src/features/orderProducts/model/orderService';
import { useTranslation } from 'react-i18next';
import { mapStatus } from 'src/entities/order/model/useChangeStatus';
import { selectHasToken } from 'src/features/store/model/slices/token';

export const useCartProducts = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const hasToken = useAppSelector(selectHasToken);
  const products = useAppSelector(selectProducts);
  const inCartProductIds = useAppSelector(selectCart).products;
  const inCartProducts = products.filter((p) => p.id in inCartProductIds);
  const costCart = inCartProducts.reduce((acc, p) => acc + p.price * inCartProductIds[p.id], 0);
  const [orderStatus, setOrderStatus] = useState<string>();

  const setTextResult = useCallback(
    (text, isSuccess = true) => {
      setOrderStatus(isSuccess ? `${t('order.status', 'Статус заказа')}: ${mapStatus(text, t)}` : text);
    },
    [t, setOrderStatus]
  );

  const handleOrderProducts = useCallback(() => {
    // Асинхронная очистка состояния заказа
    setTimeout(() => setOrderStatus(''));
    if (!hasToken) {
      setOrderStatus(t('order.needAuth', 'Авторизуйтесь, пожалуйста'));
      return;
    }
    const orderInput = {
      products: Object.entries<number>(inCartProductIds).map((i) => {
        return { id: i[0], quantity: i[1] };
      }),
    };
    coreService
      .createOrder(orderInput as OrderInput)
      .then(({ status }) => {
        setTextResult(status);
        dispatch(clearCart());
      })
      .catch((reason) => setTextResult(reason.message, false));
  }, [inCartProductIds, setTextResult, setOrderStatus, hasToken, t, dispatch]);

  return { inCartProducts, onOrderProducts: handleOrderProducts, orderStatus, costCart };
};

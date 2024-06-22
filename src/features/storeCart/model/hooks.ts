import { useDispatch, useSelector } from 'react-redux';
import { StoreDispatch, StoreState } from 'src/features/store/model';

export const useCartSelector = useSelector.withTypes<StoreState>();
export const useCartDispatch = useDispatch.withTypes<StoreDispatch>();

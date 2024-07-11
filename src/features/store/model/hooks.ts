import { useDispatch, useSelector } from 'react-redux';
import { StoreDispatch, StoreState } from 'src/features/store/model/index';

export const useAppSelector = useSelector.withTypes<StoreState>();
export const useAppDispatch = useDispatch.withTypes<StoreDispatch>();

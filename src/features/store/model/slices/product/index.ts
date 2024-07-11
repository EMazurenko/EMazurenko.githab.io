import { createProductForId } from 'src/features/createRandomProduct/api';
import { StoreThunk } from 'src/features/store/model';
import { addProduct } from 'src/features/store/model/slices/product/ProductStore';

export { default as Categories, defaultCategory } from './Categories';
export * from './ProductStore';

export const addRandomProducts =
  (count: number): StoreThunk =>
  (dispatch) => {
    for (let i = 0; i < count; i++) {
      dispatch(addProduct(createProductForId(i.toString())));
    }
  };

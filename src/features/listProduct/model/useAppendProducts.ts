import { useEffect } from 'react';

const DELAY_MORE_MS = 2 * 1000;

const useAppendProducts = (onMoreProducts: () => void) => {
  useEffect(() => {
    let needMore = false;
    let isFirstRender = true;

    const observerOptions: IntersectionObserverInit = {
      root: null,
      threshold: 1,
    };

    const observerCallback: IntersectionObserverCallback = () => {
      if (isFirstRender) {
        isFirstRender = false;
        return;
      }
      needMore = true;
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const target = document.getElementById(moreButtonId);
    observer.observe(target);

    const intervalId = setInterval(() => {
      if (needMore) {
        onMoreProducts();
        needMore = false;
      }
    }, DELAY_MORE_MS);

    return () => clearInterval(intervalId);
  }, [onMoreProducts]);
};

export const moreButtonId = 'moreButton';
export default useAppendProducts;

import { useEffect } from 'react';

const DELAY_MORE_MS = 2 * 1000;

const useAppendProducts = (onMoreProducts: () => void) => {
  useEffect(() => {
    let needMore = false;

    const observerOptions: IntersectionObserverInit = {
      root: null,
      threshold: 1,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      if (entries && entries[0].isIntersecting) {
        needMore = true;
      }
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const target = document.getElementById(moreButtonId);
    observer.observe(target);

    const intervalId = setInterval(() => {
      if (needMore) {
        onMoreProducts();
        needMore = false;
      }
    }, DELAY_MORE_MS);

    return () => {
      clearInterval(intervalId);
      observer.unobserve(target);
    };
  }, [onMoreProducts]);
};

export const moreButtonId = 'moreButton';
export default useAppendProducts;

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useChangePageTitle = (keyTitle: string) => {
  const { t } = useTranslation();
  const title = t(keyTitle);

  useEffect(() => {
    window.document.title = title;
  }, [title]);
};

export default useChangePageTitle;

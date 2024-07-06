import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Trans, withTranslation } from 'react-i18next';

const NotFound: FC = () => {
  const location = useLocation();

  return (
    <span>
      <Trans i18nKey="pageNotFound" ns={'errors'}>
        Страница{' '}
        <i>
          <>{{ path: location.pathname }}</>
        </i>{' '}
        не найдена.
      </Trans>
    </span>
  );
};

export default withTranslation(['errors'])(NotFound);

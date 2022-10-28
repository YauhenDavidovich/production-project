import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            {t('Main page')}
        </div>
    );
};

export default HomePage;

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const AdminPanel = () => {
    const { t } = useTranslation('adminPanel');

    return (
        <Page>
            {t('admin panel')}
        </Page>
    );
};

export default AdminPanel;

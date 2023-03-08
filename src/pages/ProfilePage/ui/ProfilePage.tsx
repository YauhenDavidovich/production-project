import React from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';
import { classNames } from 'shared/lib/classNames/classNames';

const reducers: ReducersList = {
    profile: profileReducer,
};
interface ProfilePageProps {
    classnames?: string;
}
const ProfilePage = ({ classnames }: ProfilePageProps) => {
    const { t } = useTranslation('profilePage');

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames('', {}, [classnames])}>
                {t('Profile page')}
            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;

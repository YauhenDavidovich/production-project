import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useappDispatch';

const reducers: ReducersList = {
    profile: profileReducer,
};
interface ProfilePageProps {
    classnames?: string;
}
const ProfilePage = ({ classnames }: ProfilePageProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames('', {}, [classnames])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;

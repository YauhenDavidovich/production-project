import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import {
    EditableProfileCardHeader,
} from 'features/editableProfileCard/ui/EditableProfileCardHeader/EditableProfileCardHeader';

interface ProfilePageProps {
    classnames?: string;
}

const ProfilePage = ({ classnames }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('profilePage');

    if (!id) {
        return (
            <Page className={classNames('', {}, [classnames])}>
                <Text
                    title={t('Profile not found')}
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                />
            </Page>
        );
    }
    return (
        <Page className={classNames('', {}, [classnames])}>
            <VStack gap="16">
                <EditableProfileCardHeader />
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;

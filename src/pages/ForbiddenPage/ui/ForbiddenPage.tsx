import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

interface NotFoundPageProps {
  className?: string;
}

const ForbiddenPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <Page>
            { t('Page not allowed') }
        </Page>
    );
};

export default ForbiddenPage;

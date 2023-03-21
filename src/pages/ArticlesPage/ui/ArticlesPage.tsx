import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

interface ArticlePageProps {
    className?: string
}

const ArticlesPage = (props: ArticlePageProps) => {
    const { className } = props;
    const { t } = useTranslation('articlePage');

    return (
        <div className={classNames('', {}, [className])}>
            {t('Article page')}
        </div>
    );
};

export default memo(ArticlesPage);

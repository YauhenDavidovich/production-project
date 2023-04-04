import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Article, ArticleList, ArticleView } from 'entities/Article';

interface ArticlePageProps {
    className?: string
}

const ArticlesPage = (props: ArticlePageProps) => {
    const { className } = props;
    const { t } = useTranslation('articlePage');

    return (
        <div className={classNames('', {}, [className])}>
            <ArticleList
                view={ArticleView.BIG}
                articles={[]}
                isLoading={false}
            />
        </div>
    );
};

export default memo(ArticlesPage);

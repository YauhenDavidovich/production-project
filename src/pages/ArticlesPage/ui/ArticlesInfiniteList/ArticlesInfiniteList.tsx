import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { getArticlesList } from '../../model/slices/articlesPageSlice';
import { getArticlesListError, getArticlesListIsLoading, getArticlesListView } from '../../model/selectors/articles';

interface ArticlesInfiniteListProps {
    className?: string
}

export const ArticlesInfiniteList = (props: ArticlesInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation('articlePage');

    const error = useSelector(getArticlesListError);
    const articles = useSelector(getArticlesList.selectAll);
    const isLoading = useSelector(getArticlesListIsLoading);
    const view = useSelector(getArticlesListView);

    if (error) {
        return (
            <Text
                title={t('Some error occurred')}
                text={t('Try to reload page')}
                align={TextAlign.CENTER}
                theme={TextTheme.ERROR}
            />
        );
    }

    return (
        <ArticleList
            view={view}
            articles={articles}
            isLoading={isLoading}
        />
    );
};

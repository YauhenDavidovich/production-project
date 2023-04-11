import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffects } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useappDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilter/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlesPageReducer, getArticlesList } from '../../model/slices/articlesPageSlice';
import { getArticlesListError, getArticlesListIsLoading, getArticlesListView } from '../../model/selectors/articles';
import cls from './ArticlesPage.module.scss';

interface ArticlePageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesList: articlesPageReducer,
};

const ArticlesPage = (props: ArticlePageProps) => {
    const { className } = props;
    const { t } = useTranslation('articlePage');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticlesList.selectAll);
    const isLoading = useSelector(getArticlesListIsLoading);
    const view = useSelector(getArticlesListView);
    const error = useSelector(getArticlesListError);
    const [queryParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffects(() => {
        dispatch(initArticlesPage(queryParams));
    });

    if (error) {
        return (
            <Page>
                <Text
                    title={t('Some error occurred')}
                    text={t('Try to reload page')}
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                />
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterMount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames('', {}, [className])}>
                <ArticlesPageFilters />
                <ArticleList
                    view={view}
                    articles={articles}
                    isLoading={isLoading}
                    className={cls.list}
                />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticlesPage);

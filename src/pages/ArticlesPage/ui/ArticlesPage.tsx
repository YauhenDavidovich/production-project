import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffects } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useappDispatch';
import { useSelector } from 'react-redux';
import { ArticleViewSelector } from 'features/ArticleViewSelector/ArticleViewSelector';
import { Page } from 'shared/ui/Page/Page';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlesPageActions, articlesPageReducer, getArticlesList } from '../model/slices/articlesPageSlice';
import { getArticlesListError, getArticlesListIsLoading, getArticlesListView } from '../model/selectors/articles';

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

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffects(() => {
        dispatch(initArticlesPage());
    });

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

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
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
                <ArticleList
                    view={view}
                    articles={articles}
                    isLoading={isLoading}
                />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticlesPage);

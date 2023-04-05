import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffects } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useappDispatch';
import { useSelector } from 'react-redux';
import { ArticleViewSelector } from 'features/ArticleViewSelector/ArticleViewSelector';
import {
    articlesPageActions,
    articlesPageReducer,
    getArticlesList,
} from '../model/slices/articlesPageSlice';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
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

    useInitialEffects(() => {
        dispatch(fetchArticlesList());
        dispatch(articlesPageActions.initState());
    });

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
                <ArticleList
                    view={view}
                    articles={articles}
                    isLoading={isLoading}
                />
            </div>
        </DynamicModuleLoader>

    );
};

export default memo(ArticlesPage);

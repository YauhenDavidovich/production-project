import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesListInited } from '../../selectors/articles';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (params, thunkAPI) => {
        const {
            getState, dispatch,
        } = thunkAPI;

        const inited = getArticlesListInited(getState());

        if (!inited) {
            const orderFromUrl = params.get('order') as SortOrder;
            const sortFromUrl = params.get('sort') as ArticleSortField;
            const searchFromUrl = params.get('search');
            const typeFromUrl = params.get('type') as ArticleType;

            if (orderFromUrl) {
                dispatch(articlesPageActions.setOrder(orderFromUrl));
            }

            if (sortFromUrl) {
                dispatch(articlesPageActions.setSort(sortFromUrl));
            }

            if (searchFromUrl) {
                dispatch(articlesPageActions.setSearch(searchFromUrl));
            }
            if (typeFromUrl) {
                dispatch(articlesPageActions.setType(typeFromUrl));
            }

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);

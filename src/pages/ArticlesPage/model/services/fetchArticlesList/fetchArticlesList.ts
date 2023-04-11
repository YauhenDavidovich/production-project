import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
    getArticlesListLimit,
    getArticlesListOrder,
    getArticlesListPageNumber,
    getArticlesListSearch,
    getArticlesListSort,
    getArticlesListType,
} from '../../selectors/articles';

interface FetchArticlesListProps {
    replace?: boolean;
}
export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (args, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const limit = getArticlesListLimit(getState());
        const order = getArticlesListOrder(getState());
        const sort = getArticlesListSort(getState());
        const search = getArticlesListSearch(getState());
        const page = getArticlesListPageNumber(getState());
        const type = getArticlesListType(getState());
        try {
            addQueryParams({
                sort, order, search, type,
            });
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _page: page,
                    _limit: limit,
                    _expand: 'user',
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleType.ALL ? undefined : type,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue('error');
        }
    },
);

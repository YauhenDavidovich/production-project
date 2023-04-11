import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesListHasMore, getArticlesListIsLoading, getArticlesListPageNumber } from '../../selectors/articles';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        const {
            getState, dispatch,
        } = thunkAPI;

        const hasMore = getArticlesListHasMore(getState());
        const page = getArticlesListPageNumber(getState());
        const isLoading = getArticlesListIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticlesList({}));
        }
    },
);

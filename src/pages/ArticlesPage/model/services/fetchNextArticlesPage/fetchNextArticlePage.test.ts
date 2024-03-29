import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlePage.test', () => {
    test('success fetch data', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesList: {
                page: 2,
                ids: [],
                entities: {},
                limit: 3,
                isLoading: false,
                hasMore: true,

            },
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toBeCalled();
    });
    test('cant fetch data', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesList: {
                page: 2,
                ids: [],
                entities: {},
                limit: 3,
                isLoading: false,
                hasMore: false,
            },
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
    test('cant fetch data while loading', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesList: {
                page: 2,
                ids: [],
                entities: {},
                limit: 3,
                isLoading: true,
                hasMore: true,
            },
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});

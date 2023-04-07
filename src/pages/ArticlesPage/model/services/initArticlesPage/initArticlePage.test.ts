import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');
describe('initArticlesPage.test', () => {
    test('dont fetch data after init', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesList: {
                page: 2,
                ids: [],
                entities: {},
                limit: 3,
                isLoading: true,
                hasMore: true,
                _inited: true,
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});

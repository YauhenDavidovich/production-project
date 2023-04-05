import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesListIsLoading = (state: StateSchema) => state.articlesList?.isLoading || false;
export const getArticlesListError = (state: StateSchema) => state.articlesList?.error;
export const getArticlesListView = (state: StateSchema) => state.articlesList?.view || ArticleView.SMALL;

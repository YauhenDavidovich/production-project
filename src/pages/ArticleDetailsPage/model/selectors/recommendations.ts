import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.recommendations?.isLoading;
};
export const getArticleRecommendationsIsError = (state: StateSchema) => {
    return state.articleDetailsPage?.recommendations?.error;
};

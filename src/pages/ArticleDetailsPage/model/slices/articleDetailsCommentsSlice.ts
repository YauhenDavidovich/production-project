import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

const commentsAdapter = createEntityAdapter<Comment>({
    // Assume IDs are stored in a field other than `comment.id`
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
    name: 'comments',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>(
        {
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {},
        },
    ),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCommentsByArticleId.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
            state.isLoading = false;
            commentsAdapter.setAll(state, action.payload);
        });
        builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;

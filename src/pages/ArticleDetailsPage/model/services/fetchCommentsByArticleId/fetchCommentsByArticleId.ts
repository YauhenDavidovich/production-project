import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
    'articleDetails/fetchCommentsByArticleId',
    async (id, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        if (!id) {
            return rejectWithValue('error');
        }
        try {
            // @ts-ignore
            const response = await extra.api.get<Comment[]>('/comments', {
                params: {
                    id,
                    _expand: 'user',
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

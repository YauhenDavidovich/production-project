import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }
        try {
            // @ts-ignore
            const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);
            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';
import { updateProfileData } from './updateProfileData';

jest.mock('axios');

const data = {
    username: 'Test',
    country: Country.Belarus,
    age: 18,
    first: 'Test name',
    last: 'Test surname',
    currency: Currency.PLN,
    city: 'Minsk',
    id: '1',
};
describe('updateProfileData.test', () => {
    test('success update data', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();
        expect(thunk.dispatch).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
    test('error update data', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });
    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, last: '' },
            },
        });
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
});

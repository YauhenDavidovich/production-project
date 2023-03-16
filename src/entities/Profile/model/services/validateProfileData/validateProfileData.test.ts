import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile';
import { validateProfileData } from './validateProfileData';

jest.mock('axios');

const data = {
    username: 'Test',
    country: Country.Belarus,
    age: 18,
    first: 'Test name',
    last: 'Test surname',
    currency: Currency.PLN,
    city: 'Minsk',
};
describe('validateProfileData.test', () => {
    test('success fetch data', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });
    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, username: '', last: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('with incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
    test('without country', async () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });
    test('incorrect all', async () => {
        const result = validateProfileData({ });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});

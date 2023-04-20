import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return equal data', () => {
        const data = {
            username: 'Test',
            country: Country.Belarus,
            age: 18,
            first: 'Test name',
            last: 'Test surname',
            currency: Currency.PLN,
            city: 'Minsk',
        };
        const state: DeepPartial<StateSchema> = {
            profile: { data },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});

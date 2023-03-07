import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    getLoginUsername,
} from './getLoginUsername';

describe('getLoginUserName.test', () => {
    test('should return UserName', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'user',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toBe('user');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toBe('');
    });
});

import { loginActions, loginReducer } from '../slice/loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'user',
        };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUserName('user 2'),
        )).toEqual({ username: 'user 2' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123',
        };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123'),
        )).toEqual({ password: '123' });
    });
});

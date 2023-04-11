import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
    test('with one param', async () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    test('with multiple params', async () => {
        const params = getQueryParams({
            test: 'value',
            test2: 'value2',
        });
        expect(params).toBe('?test=value&test2=value2');
    });
    test('with undefined params', async () => {
        const params = getQueryParams({
            test: 'value',
            test2: undefined,
        });
        expect(params).toBe('?test=value');
    });
});

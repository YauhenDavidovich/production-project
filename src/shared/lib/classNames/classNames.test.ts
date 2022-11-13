import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', () => {
        const expected = 'someClass additional';
        expect(classNames('someClass', {}, ['additional'])).toBe(expected);
    });
    test('with mods', () => {
        const expected = 'someClass additional scrollable active';
        expect(classNames(
            'someClass',
            { scrollable: true, active: true },
            ['additional'],
        )).toBe(expected);
    });
    test('with mods false', () => {
        const expected = 'someClass additional scrollable';
        expect(classNames(
            'someClass',
            { scrollable: true, active: false },
            ['additional'],
        )).toBe(expected);
    });
    test('with mods undefined', () => {
        const expected = 'someClass additional scrollable';
        expect(classNames(
            'someClass',
            { scrollable: true, active: undefined },
            ['additional'],
        )).toBe(expected);
    });
});

import { classNames } from 'shared/lib/classNames/classNames';

// import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass'))
            .toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass someClass1 someClass2 someClass3';
        expect(classNames(
            'someClass',
            {},
            ['someClass1', 'someClass2', 'someClass3'],
        ))
            .toBe(expected);
    });

    test('with additional class', () => {
        const expected = 'someClass someClass1 someClass2 someClass3';
        expect(classNames(
            'someClass',
            {},
            ['someClass1', 'someClass2', 'someClass3'],
        ))
            .toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass someClass1 focused hovered';
        expect(classNames(
            'someClass',
            { focused: true, hovered: true },
            ['someClass1'],
        ))
            .toBe(expected);
    });

    test('with mods undefined and false', () => {
        const expected = 'someClass someClass1 focused';
        expect(classNames(
            'someClass',
            { focused: true, hovered: undefined, outlined: false },
            ['someClass1'],
        ))
            .toBe(expected);
    });
});

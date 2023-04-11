import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOptions<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    readonly?: boolean;
    label?: string;
    options?: SelectOptions<T>[];
    value?: T;
    onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className, label, options, value, onChange, readonly,
    } = props;
    const mods: Mods = {};

    const onchangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}:`}
                </span>
            )}
            <select
                className={cls.select}
                value={value}
                onChange={onchangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
};

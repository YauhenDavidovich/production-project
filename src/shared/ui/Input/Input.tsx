import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    placeholder?: string;
    autofocus?: boolean;
    value?: string | number;
    type?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props;

    const textInput = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    useEffect(() => {
        if (autofocus) {
            textInput.current?.focus();
        }
    }, [autofocus]);

    useEffect(() => {
        if (value) {
            setIsFocused(true);
        } else {
            setIsFocused(false);
        }
    }, [value]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    console.log(isFocused, value);

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            <input
                readOnly={readonly}
                className={cls.Input}
                ref={textInput}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChangeHandler}
                {...otherProps}
            />
            <label
                htmlFor={otherProps.id}
                className={classNames(cls.InputLabel, { [cls.InputLabelFocused]: isFocused }, [])}
            >
                {placeholder}
            </label>
        </div>
    );
});

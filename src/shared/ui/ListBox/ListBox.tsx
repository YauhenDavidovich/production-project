import { Fragment, ReactNode, useState } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';
import CheckIcon from '../../assets/icons/check-mark-15.svg';
import { Icon } from '../Icon/Icon';
import { classNames, Mods } from '../../lib/classNames/classNames';
import cls from './ListBox.module.scss';

export interface ListBoxItems {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type DropDownDirection = 'top' | 'bottom'

interface ListBoxProps {
    className?: string
    items?: ListBoxItems[];
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropDownDirection;
    label?: string;
}

const mapDirectionClass: Record<DropDownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

export function ListBox(props: ListBoxProps) {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        direction = 'bottom',
        readonly,
        label,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <span className={cls.label}>{label}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button className={cls.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [cls.active]: active,
                                            [cls.disabled]: item.disabled,
                                        },
                                    )}
                                >
                                    {selected && <Icon className={cls.icon} Svg={CheckIcon} />}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>

        </HStack>

    );
}

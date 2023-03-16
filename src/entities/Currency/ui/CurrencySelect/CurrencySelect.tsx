import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    readonly ?: boolean;
    onChange?: (value: Currency) => void;
}

const options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.PLN, content: Currency.PLN },
];
export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className, value, onChange, readonly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            readonly={readonly}
            label={t('Choose currency')}
            options={options}
            className={classNames('', {}, [className])}
            value={value}
            onChange={onChangeHandler}
        />
    );
});

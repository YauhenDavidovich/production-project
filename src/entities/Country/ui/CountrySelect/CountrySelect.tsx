import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';

interface CurrencySelectProps {
    className?: string;
    value?: Country;
    readonly ?: boolean;
    onChange?: (value: Country) => void;
}

const options = [
    { value: Country.Poland, content: Country.Poland },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Russia, content: Country.Russia },
];
export const CountrySelect = memo((props: CurrencySelectProps) => {
    const {
        className, value, onChange, readonly,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            readonly={readonly}
            label={t('Choose country')}
            options={options}
            className={classNames('', {}, [className])}
            value={value}
            onChange={onChangeHandler}
        />
    );
});

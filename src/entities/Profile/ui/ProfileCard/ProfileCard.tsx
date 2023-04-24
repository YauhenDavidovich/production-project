import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country/ui/CountrySelect/CountrySelect';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUserName?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
    readonly?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeUserName,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profilePage');

    if (isLoading) {
        return (
            <VStack max justify="center" className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </VStack>
        );
    }

    if (error) {
        return (
            <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    title={t('Some error occurred')}
                    text={t('Try to reload page')}
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack gap="16" max className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify="center" max className={cls.avatarWrapper}>
                    <Avatar src={data.avatar} />
                </HStack>
            )}
            <Input
                value={data?.first}
                placeholder={t('Name')}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeFirstName}
                data-testid="ProfileCard.firstName"
            />
            <Input
                readonly={readonly}
                value={data?.last}
                placeholder={t('Last name')}
                className={cls.input}
                onChange={onChangeLastName}
                data-testid="ProfileCard.lastName"
            />
            <Input
                readonly={readonly}
                value={data?.age}
                placeholder={t('Age')}
                className={cls.input}
                onChange={onChangeAge}
            />
            <Input
                readonly={readonly}
                value={data?.city}
                placeholder={t('City')}
                className={cls.input}
                onChange={onChangeCity}
            />
            <Input
                readonly={readonly}
                value={data?.username}
                placeholder={t('City')}
                className={cls.input}
                onChange={onChangeUserName}
            />
            <Input
                readonly={readonly}
                value={data?.avatar}
                placeholder={t('Avatar')}
                className={cls.input}
                onChange={onChangeAvatar}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />

        </VStack>
    );
};

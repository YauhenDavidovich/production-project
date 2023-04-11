import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { useMemo } from 'react';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import cls from './ArticleSortSelect.module.scss';

interface ArticleSortSelectProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder:SortOrder)=> void;
    onChangeSort: (newOrder:ArticleSortField)=> void;
}

export const ArticleSortSelect = (props: ArticleSortSelectProps) => {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('increasing'),
        },
        {
            value: 'desc',
            content: t('decreasing'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('date'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('name'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('views'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.ArticleSortSelect, {}, [className])}>
            <Select
                label={t('Sort by')}
                options={sortFieldOptions}
                onChange={onChangeSort}
                value={sort}
            />
            <Select
                label={t('by')}
                options={orderOptions}
                onChange={onChangeOrder}
                value={order}
                className={cls.order}
            />
        </div>
    );
};

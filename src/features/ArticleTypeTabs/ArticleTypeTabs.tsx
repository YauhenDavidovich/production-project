import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { useCallback, useMemo } from 'react';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(() => [
        { value: ArticleType.ALL, content: t('all') },
        { value: ArticleType.IT, content: t('it') },
        { value: ArticleType.SCIENCE, content: t('science') },
        { value: ArticleType.ECONOMICS, content: t('economics') },
    ], [t]);

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs
            value={value}
            onTabClick={onTabClick}
            tabs={typeTabs}
            className={classNames('', {}, [className])}
        />
    );
};

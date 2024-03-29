import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useappDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import Calendar from 'shared/assets/icons/calendar.svg';
import { HStack, VStack } from 'shared/ui/Stack';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { ArticleCodeBlockComponent } from '../../ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../../ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        default: return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') { dispatch(fetchArticleById(id)); }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <VStack justify="center" max>
                <Skeleton width={200} height={200} borderRadius="50%" className={cls.avatar} />
                <Skeleton width={300} height={32} className={cls.title} />
                <Skeleton width={600} height={24} className={cls.skeleton} />
                <Skeleton width="100%" height={200} className={cls.skeleton} />
                <Skeleton width="100%" height={200} className={cls.skeleton} />
            </VStack>
        );
    } else if (error) {
        content = (
            <Text align={TextAlign.CENTER} title={t('Error while loading article')} />
        );
    } else {
        content = (
            <>
                <HStack justify="center" max>
                    <Avatar
                        src={article?.img}
                        size={200}
                        className={cls.avatar}
                    />
                </HStack>
                <VStack gap="8">
                    <Text title={article?.title} text={article?.subtitle} className={cls.title} size={TextSize.L} />
                    <HStack gap="8">
                        <Icon Svg={EyeIcon} className={cls.icon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap="8">
                        <Icon Svg={Calendar} className={cls.icon} />
                        <Text text={article?.createdAt} />
                    </HStack>
                </VStack>

                {article?.blocks.map(renderBlock)}
            </>

        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterMount>
            <VStack gap="16" className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>

    );
});

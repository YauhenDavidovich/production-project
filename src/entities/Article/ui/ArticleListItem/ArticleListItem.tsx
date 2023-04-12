import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import Eye from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { HTMLAttributeAnchorTarget, useCallback } from 'react';
import { RoutePath } from 'shared/config/routeConfig/appConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const {
        className, article, view, target,
    } = props;
    const { t } = useTranslation();

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            {' '}
            <Icon Svg={Eye} />
        </>
    );
    const title = <Text text={article.title} className={cls.title} />;
    const image = <img src={article.img} alt={article.title} className={cls.img} />;
    const date = <Text text={article.createdAt} className={cls.date} />;

    if (view === ArticleView.BIG) {
        const textBlocks = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        {date}
                    </div>
                    {title}
                    {types}
                    {image}
                    {textBlocks && <ArticleTextBlockComponent block={textBlocks} className={cls.textBlock} />}
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={RoutePath.article_details + article.id}
                        >
                            <Button>
                                {t('Read more')}
                            </Button>
                        </AppLink>

                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={RoutePath.article_details + article.id}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    {image}
                    {date}
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                {title}
            </Card>
        </AppLink>
    );
};

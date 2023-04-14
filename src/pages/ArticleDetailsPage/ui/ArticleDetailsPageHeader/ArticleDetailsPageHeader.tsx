import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useCallback } from 'react';
import { RoutePath } from 'shared/config/routeConfig/appConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from '../../../ArticleDetailsPage/model/selectors/article';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader = (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const navigate = useNavigate();
    const userData = useSelector(getUserAuthData);
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button onClick={onBackToList}>
                {' '}
                {t('Back to list')}
            </Button>
            {canEdit && (
                <Button
                    onClick={onEditArticle}
                    className={cls.editBtn}
                >
                    {t('Edit article')}
                </Button>
            )}

        </div>
    );
};

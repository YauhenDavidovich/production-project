import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string
}
const ArticleEditPage = (props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? t('ARTICLE EDIT PAGE ID =') + id : t('ARTICLE CREATE NEW PAGE')}
        </Page>
    );
};

export default memo(ArticleEditPage);

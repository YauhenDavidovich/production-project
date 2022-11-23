import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

// Component for testing error boundary

export const BugButton = () => {
    const [error, setError] = useState(false);
    const onThrow = () => setError(true);
    const { t } = useTranslation();

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={onThrow}>{t('throw error')}</Button>
    );
};

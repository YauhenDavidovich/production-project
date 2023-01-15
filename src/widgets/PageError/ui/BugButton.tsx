import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    const onThrow = () => setError(true);

    return (
        <div>
            <button type="button" onClick={onThrow}>
                {t('Throw error to page')}
            </button>
        </div>
    );
};

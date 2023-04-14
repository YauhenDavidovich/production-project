import { classNames } from 'shared/lib/classNames/classNames';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { useCallback } from 'react';
import { Button, ButtonTheme } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    codeText: string;
}

export const Code = (props: CodeProps) => {
    const { className, codeText } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(codeText);
    }, [codeText]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
            >
                <Icon Svg={CopyIcon} />
            </Button>
            <code>
                {codeText}
            </code>
        </pre>

    );
};

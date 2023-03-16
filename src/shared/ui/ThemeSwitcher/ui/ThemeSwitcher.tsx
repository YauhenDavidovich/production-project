import React, { memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { MoonIcon, SunIcon } from 'shared/assets/icons';
import { BulbIcon } from 'shared/assets/icons/bulbIcon';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    let icon;
    if (theme === Theme.DARK) {
        icon = <SunIcon />;
    } else if (theme === Theme.AWESOME) {
        icon = <BulbIcon />;
    } else {
        icon = <MoonIcon />;
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
        >
            {icon}
        </Button>
    );
});

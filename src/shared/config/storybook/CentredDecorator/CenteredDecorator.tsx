import { Story } from '@storybook/react';
import 'app/styles/index.scss';

export const CenteredDecorator = (story: () => Story) => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    }}
    >
        {story()}
    </div>
);

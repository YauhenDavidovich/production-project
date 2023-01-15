import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ONLY IN TEST PROJECTS
    setTimeout(() => resolve(import('./MainPage')), 1000);
}));

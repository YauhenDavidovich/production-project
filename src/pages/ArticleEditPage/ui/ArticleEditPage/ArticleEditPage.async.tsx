import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ONLY IN TEST PROJECTS
    setTimeout(() => resolve(import('./ArticleEditPage')), 1000);
}));

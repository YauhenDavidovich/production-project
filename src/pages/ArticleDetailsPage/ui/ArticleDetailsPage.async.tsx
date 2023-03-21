import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ONLY IN TEST PROJECTS
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 1000);
}));

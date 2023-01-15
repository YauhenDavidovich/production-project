import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ONLY IN TEST PROJECTS
    setTimeout(() => resolve(import('./AboutPage')), 1000);
}));

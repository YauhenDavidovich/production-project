import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ONLY IN TEST PROJECTS
    setTimeout(() => resolve(import('./ProfilePage')), 1000);
}));

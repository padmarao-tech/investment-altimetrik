import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'investment', pathMatch: 'full' },
    { path: 'investment', loadComponent: () => import('./investment/investment').then(m => m.Investment)}
];

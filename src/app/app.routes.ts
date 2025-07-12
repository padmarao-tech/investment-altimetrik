import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'client', pathMatch: 'full' },
    { path: 'client', loadChildren: () => import('./modules/client/client.routes').then(m => m.routes)},
    { path: 'home', loadChildren: () => import('./modules/home/home.routes').then(m => m.routes)}
];

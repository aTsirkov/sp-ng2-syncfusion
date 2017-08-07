import { Routes } from '@angular/router';

import { HomeComponent } from './forms/home/home.component';
import { CatalogComponent } from './forms/catalog/catalog.component';
import { RTKListComponent } from './forms/rtk-list/rtk-list.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'customers', component: CatalogComponent },
    { path: 'TemplateRTK', component: HomeComponent },
    { path: 'RTK', component: RTKListComponent },
    { path: 'Price', component: HomeComponent },
    { path: 'Orders', component: HomeComponent }
];

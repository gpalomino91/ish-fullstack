import { Routes } from '@angular/router';
import { App } from './app';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';

export const routes: Routes = [
    { path: '', component : Home, },
    { path: 'products', component: Products }
];

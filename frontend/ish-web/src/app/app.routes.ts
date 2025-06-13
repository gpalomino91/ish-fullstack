import { Routes } from '@angular/router';
import { App } from './app';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Contact } from './pages/contact/contact';
import { Services } from './pages/services/services';

export const routes: Routes = [
    { path: '', component : Home, },
    { path: 'products', component: Products },
    { path: 'contact', component: Contact },
    { path: 'services', component: Services }
];

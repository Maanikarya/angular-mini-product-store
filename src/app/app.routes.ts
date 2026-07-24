import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'products',
        component: ProductsComponent
    },

    {
        path: 'products/:id' ,
        component: ProductDetailsComponent
    } ,

    {
        path : 'about',
        component : AboutComponent
    } ,

    {
        path : 'cart',
        component : CartComponent
    }


];

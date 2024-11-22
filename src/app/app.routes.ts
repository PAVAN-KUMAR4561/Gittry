import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';

export const routes: Routes = [
    {
        path:'/About',component:AboutComponent
    },{
        path:'/service',component:ServiceComponent,
    }
];

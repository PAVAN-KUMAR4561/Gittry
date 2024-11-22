import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path:'about',component:AboutComponent
    },{
        path:'service',component:ServiceComponent,
    }
    ,{
        path:'contact',component:ContactComponent,
    }
];

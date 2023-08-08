import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { CareersComponent } from './components/pages/careers/careers.component';
import { LoginComponent } from './components/pages/login/login.component';
import { JobDescComponent } from './components/pages/job-desc/job-desc.component';
//import { JobDescComponent } from '.components/pages/job-desc/job-desc.component';



const routes: Routes = [
  {
    path:'',component:HomeComponent 
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact-us',component:ContactComponent
  },
  {
    path:'services',component:ServicesComponent
  },
  {
    path:'careers', component: CareersComponent
  },
  {
    path:'login', component: LoginComponent
  },
  { path: 'job-desc/:id', component: JobDescComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

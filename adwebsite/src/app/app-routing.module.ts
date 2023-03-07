import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersMasterComponent } from './careers-master/careers-master.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { OurMasterComponent } from './our-master/our-master.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WhatMasterComponent } from './what-master/what-master.component';
import { WhoMasterComponent } from './who-master/who-master.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'whatwedo', component: WhatMasterComponent},
    {path: 'whoweare', component: WhoMasterComponent},
    {path: 'ourthinking', component: OurMasterComponent},
    {path: 'careers', component: CareersMasterComponent},
    {path: 'contactus', component: ContactUsComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'})
],
  exports: [RouterModule]
})
export class AppRoutingModule { }


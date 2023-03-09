import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { CareersMasterComponent } from './careers-master/careers-master.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { OurMasterComponent } from './our-master/our-master.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SapSolutionsComponent } from './sap-solutions/sap-solutions.component';
import { WhatMasterComponent } from './what-master/what-master.component';
import { WhoMasterComponent } from './who-master/who-master.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'whatwedo', component: WhatMasterComponent},
    {path: 'whoweare', component: WhoMasterComponent},
    {path: 'ourthinking', component: OurMasterComponent},
    {path: 'careers', component: CareersMasterComponent},
    {path: 'Contact-Us', component: ContactUsComponent},
    {path: 'SAP-Solutions', component: SapSolutionsComponent},
    {path: 'Apply-Now', component: ApplyNowComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    onSameUrlNavigation: "reload"})
],
  exports: [RouterModule]
})
export class AppRoutingModule { }


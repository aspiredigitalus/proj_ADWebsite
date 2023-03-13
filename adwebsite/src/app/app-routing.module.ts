import { UsaTeamComponent } from './usa-team/usa-team.component';
import { ManagementComponent } from './management/management.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { CareersMasterComponent } from './careers-master/careers-master.component';
import { CloudForCustomerComponent } from './cloud-for-customer/cloud-for-customer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { OurMasterComponent } from './our-master/our-master.component';
import { OurStaffComponent } from './our-staff/our-staff.component';
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
    {path: 'CloudForCustomer', component: CloudForCustomerComponent},
    {path: 'Locations', component: LocationsComponent},
    {path: 'Our-Staff', component: OurStaffComponent, children: [
        {path: '', redirectTo: 'Management', pathMatch: 'full'},
        {path: 'Management', component: ManagementComponent},
        {path: 'USA-Team', component: UsaTeamComponent},
        {path: '**', component: PageNotFoundComponent}
    ]},
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    onSameUrlNavigation: "reload"})
],
  exports: [RouterModule]
})
export class AppRoutingModule { }


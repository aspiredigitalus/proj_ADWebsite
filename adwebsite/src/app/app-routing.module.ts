import { UsaTeamComponent } from './usa-team/usa-team.component';
import { ManagementComponent } from './management/management.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { CareersMasterComponent } from './careers-master/careers-master.component';
import { CloudForCustomerComponent } from './cloud-for-customer/cloud-for-customer.component';
import { ConfigurePriceQuoteComponent } from './configure-price-quote/configure-price-quote.component';
import { ConsultantsComponent } from './consultants/consultants.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { DigitalServicesComponent } from './digital-services/digital-services.component';
import { HomeComponent } from './home/home.component';
import { IndustrialComponent } from './industrial/industrial.component';
import { LocationsComponent } from './locations/locations.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { MedicalComponent } from './medical/medical.component';
import { OurIndustriesComponent } from './our-industries/our-industries.component';
import { OurMasterComponent } from './our-master/our-master.component';
import { OurStaffComponent } from './our-staff/our-staff.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SalesPerformanceManagementComponent } from './sales-performance-management/sales-performance-management.component';
import { SapSolutionsComponent } from './sap-solutions/sap-solutions.component';
import { ScalePlanningComponent } from './scale-planning/scale-planning.component';
import { TechnologyComponent } from './technology/technology.component';
import { TelecomComponent } from './telecom/telecom.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { WhatMasterComponent } from './what-master/what-master.component';
import { WhoMasterComponent } from './who-master/who-master.component';
import { CultureComponent } from './culture/culture.component';

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
    {path: 'ConfigurePriceQuote', component: ConfigurePriceQuoteComponent},
    {path: 'SalesPerformanceManagement', component: SalesPerformanceManagementComponent},
    {path: 'DigitalServices', component: DigitalServicesComponent},
    {path: 'WebDev', component: WebDevelopmentComponent},
    {path: 'DigitalMarketing', component: DigitalMarketingComponent},
    {path: 'ScalePlanning', component: ScalePlanningComponent},
    {path: 'Industries', component: OurIndustriesComponent},
    {path: 'Telecom', component: TelecomComponent},
    {path: 'Industrial', component: IndustrialComponent},
    {path: 'Manufacturing', component: ManufacturingComponent},
    {path: 'Medical', component: MedicalComponent},
    {path: 'Agriculture', component: AgricultureComponent},
    {path: 'Technology', component: TechnologyComponent},
    {path: 'Consultants', component: ConsultantsComponent},
    {path: 'Locations', component: LocationsComponent},
    {path: 'Our-Staff', component: OurStaffComponent, children: [
        {path: '', redirectTo: 'Management', pathMatch: 'full'},
        {path: 'Management', component: ManagementComponent},
        {path: 'USA-Team', component: UsaTeamComponent},
        {path: '**', component: PageNotFoundComponent}
    ]},
    {path: 'Culture', component: CultureComponent},
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


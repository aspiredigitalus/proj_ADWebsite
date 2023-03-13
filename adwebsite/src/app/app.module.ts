import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlankBodyComponent } from './blank-body/blank-body.component';
import { HomeComponent } from './home/home.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderMainComponent } from './header-main/header-main.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WhoMasterComponent } from './who-master/who-master.component';
import { WhatMasterComponent } from './what-master/what-master.component';
import { OurMasterComponent } from './our-master/our-master.component';
import { CareersMasterComponent } from './careers-master/careers-master.component';
import { SapSolutionsComponent } from './sap-solutions/sap-solutions.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TopOfPageComponent } from './top-of-page/top-of-page.component';

import { ContactButtonComponent } from './contact-button/contact-button.component';
import { CloudForCustomerComponent } from './cloud-for-customer/cloud-for-customer.component';
import { LocationsComponent } from './locations/locations.component';
import { ConfigurePriceQuoteComponent } from './configure-price-quote/configure-price-quote.component';
import { SalesPerformanceManagementComponent } from './sales-performance-management/sales-performance-management.component';
import { DigitalServicesComponent } from './digital-services/digital-services.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { ScalePlanningComponent } from './scale-planning/scale-planning.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BlankBodyComponent,
    HomeComponent,
    ButtonsComponent,
    HeaderMainComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    WhoMasterComponent,
    WhatMasterComponent,
    OurMasterComponent,
    CareersMasterComponent,
    SapSolutionsComponent,
    ApplyNowComponent,
    TopOfPageComponent,
    ContactButtonComponent,
    CloudForCustomerComponent,
    LocationsComponent,
    ConfigurePriceQuoteComponent,
    SalesPerformanceManagementComponent,
    DigitalServicesComponent,
    WebDevelopmentComponent,
    ScalePlanningComponent,
    DigitalMarketingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

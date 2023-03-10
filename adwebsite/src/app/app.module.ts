import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaletteComponent } from './palette/palette.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlankBodyComponent } from './blank-body/blank-body.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderMainComponent } from './header-main/header-main.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactButtonComponent } from './contact-button/contact-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PaletteComponent,
    FooterComponent,
    BlankBodyComponent,
    HomeComponent,
    WelcomeComponent,
    ButtonsComponent,
    HeaderMainComponent,
    ContactUsComponent,
    ContactButtonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

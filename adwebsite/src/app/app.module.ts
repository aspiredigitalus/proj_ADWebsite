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
import { HeaderLayer1Component } from './header-layer1/header-layer1.component';
import { HeaderLayer2Component } from './header-layer2/header-layer2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlankBodyComponent } from './blank-body/blank-body.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    PaletteComponent,
    FooterComponent,
    HeaderLayer1Component,
    HeaderLayer2Component,
    BlankBodyComponent,
    HomeComponent,
    WelcomeComponent,
    ButtonsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaletteComponent } from './palette/palette.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderLayer1Component } from './header-layer1/header-layer1.component';
import { HeaderLayer2Component } from './header-layer2/header-layer2.component';

@NgModule({
  declarations: [
    AppComponent,
    PaletteComponent,
    FooterComponent,
    HeaderLayer1Component,
    HeaderLayer2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

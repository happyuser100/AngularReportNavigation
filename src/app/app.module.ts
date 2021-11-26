import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainToolBarComponent } from './components/main-tool-bar/main-tool-bar.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './modules/material/material.module';
import { Report1Component } from './components/report1/report1.component';
import { Report2Component } from './components/report2/report2.component';
import { Report3Component } from './components/report3/report3.component';
import { Report4Component } from './components/report4/report4.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainToolBarComponent,
    HomeComponent,
    Report1Component,
    Report2Component,
    Report3Component,
    Report4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

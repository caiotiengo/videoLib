import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {MatMenuModule} from '@angular/material/menu';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoComponent } from './video/video.component';
import { SecureUrlPipe } from './secure-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,
    VideoComponent,
    SecureUrlPipe
  ],
  imports: [
    BrowserModule,
        MatToolbarModule,
        MatCardModule,
        MatMenuModule,
        MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }

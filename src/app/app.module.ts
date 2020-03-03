import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoComponent } from './video/video.component';
import { SecureUrlPipe } from './secure-url.pipe';
import { AccessComponent } from './access/access.component';
import { ListComponent } from './list/list.component';
import { UniquePipe } from './unique.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgGoogleAnalyticsModule } from 'ng-google-analytics';
import {ConnectionServiceModule} from 'ng-connection-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,
    VideoComponent,
    SecureUrlPipe,
    AccessComponent,
    ListComponent,
    UniquePipe
  ],
  imports: [
    BrowserModule,
        MatProgressBarModule,
        NgGoogleAnalyticsModule.forRoot({ id: 'UA-159221095-1' }),
        MatToolbarModule,
        MatCardModule,
        MatMenuModule,
        MatButtonModule,
        AppRoutingModule,   
        MatDialogModule,
        HttpClientModule,
         ConnectionServiceModule,
        BrowserAnimationsModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},{ provide: MAT_DIALOG_DATA, useValue: {} }],  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { AccessComponent } from './access/access.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =[
		{path:'', component:AccessComponent},
  		{ path: 'home', component: HomeComponent },
  		{ path: 'list', component: ListComponent },
  	    { path: 'login', component: LoginComponent },
  	    { path: 'access', component: AccessComponent },


];

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ListComponent]
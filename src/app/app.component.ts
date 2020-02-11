import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'videoLib';
  constructor(  public router: Router){
    this.router.navigateByUrl('/login')
  }
  home(){
  	this.router.navigateByUrl('/home')
  	alert('Calm down.. teremos um login aqui')
  }

  videos(){
  	this.router.navigateByUrl('/list')
  	alert('Calm down.. teremos um login aqui')
  }

}

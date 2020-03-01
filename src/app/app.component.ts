import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavigationEnd,Router } from '@angular/router';
import {filter} from 'rxjs/operators';

declare var gtag;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'videoLib';
    private currentRoute:string;

  constructor(  public router: Router){
        const navegar = router.events.pipe(
          filter(event => event instanceof NavigationEnd));
        navegar.subscribe((event: NavigationEnd) =>{
          gtag('config', 'UA-159221095-1',{
            'page_path': event.urlAfterRedirects
          });
        })
      
        this.router.navigateByUrl('/access')
    
  
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';
import {Pipe} from '@angular/core'
import {DbService} from '../db.service'
import {User} from "../User";
import {ListComponent} from "../list/list.component"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
	public allList:any =[];
  result: any = [];
	link
  usuario: any =[];
  user
  videos: any = [];


  constructor(private router: Router,private sanitizer: DomSanitizer, private db: DbService) { 
      this.usuario = JSON.parse(localStorage.getItem('user'))
      console.log(this.usuario)
       this.db.data().then(data => {
      this.result = data.valueOf();
      console.log(this.result.videos);
      this.videos = this.result.videos;
      
      });
   
    	}

  ngOnInit(): void {
  }
  transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);            
  }
  cordiv(){
    let mainVideo = <HTMLMediaElement>document.getElementById('mainVideo');
    mainVideo.autoplay = false;
  	mainVideo.load();
  	console.log('conta play')
  }
    home(){
  	this.router.navigateByUrl('/home')
  }

  videoss(){
  	this.router.navigateByUrl('/list')
  }
}

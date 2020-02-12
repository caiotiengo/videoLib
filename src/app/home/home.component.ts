import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';
import {Pipe} from '@angular/core'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
	public allList:any =[];

	link
  constructor(private router: Router,private sanitizer: DomSanitizer) { 
  	    this.sanitizer = sanitizer;
		  this.allList=[{
		      		video:'First video',
		      		source:'https://player.vimeo.com/video/390480005?app_id=122963',
		      		description:'This is a Demo Video',
		      		id:1,
		      		videoArea:'Respiratory'
		   		 },{
		      		video:'Second Video',
		      		source:'https://player.vimeo.com/video/390480005?app_id=122963',
		      		description:'This is a Demo Video',
		      		id:2,
		      		videoArea:'Oncologist'
		   		 },{
		      		video:'Third Video',
		      		source:'https://www.youtube.com/embed/zpOULjyy-n8?rel=0',
		      		description:'This is a Demo Video',
		      		id:3,
		      		videoArea:'Respiratory'
		    		}];

    	}

  ngOnInit(): void {
  }
  transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);            
  }
  cordiv(){
    let mainVideo = <HTMLMediaElement>document.getElementById('mainVideo');
    mainVideo.play();
  	alert('contaria o play')
  	console.log('conta play')
  }
    home(){
  	this.router.navigateByUrl('/home')
  }

  videos(){
  	this.router.navigateByUrl('/list')
  }
}

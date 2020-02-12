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
		      		source:'http://videos.gskstatic.com/pharma/cursosenlinea_gsk_com/emwVideoLab/GSK_Our_story.mp4',
		      		description:'This is a Demo Video',
		      		id:1,
		      		videoArea:'Respiratory'
		   		 },{
		      		video:'Second Video',
		      		source:'http://videos.gskstatic.com/pharma/cursosenlinea_gsk_com/emwVideoLab/1080p V2 - 4447 - GSK -  Rap Meetings - Elisama Baisch - Video Aula 01.mp4',
		      		description:'This is a Demo Video',
		      		id:2,
		      		videoArea:'Oncologist'
		   		 },{
		      		video:'Third Video',
		      		source:'http://videos.gskstatic.com/pharma/cursosenlinea_gsk_com/emwVideoLab/720p 4447 - GSK -  Rap Meetings - Elisama Baisch - Video Aula 01.mp4',
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

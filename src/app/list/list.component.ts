import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	public allList:any =[];

  constructor(private router: Router) { 
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

  home(){
  	this.router.navigateByUrl('/home')
  }
  videos(){

  }

}

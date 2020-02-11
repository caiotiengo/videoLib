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
		      		source:'/assets/GSK_Our_story.mp4',
		      		description:'This is a Demo Video',
		      		id:1,
		      		videoArea:'Respiratória'
		   		 },{
		      		video:'Secound Video',
		      		source:'/assets/GSK_Our_story.mp4',
		      		description:'This is a Demo Video',
		      		id:2,
		      		videoArea:'Oncologia'
		   		 },{
		      		video:'Third Video',
		      		source:'/assets/GSK_Our_story.mp4',
		      		description:'This is a Demo Video',
		      		id:3,
		      		videoArea:'Respiratória'
		    		}];



  }

  ngOnInit(): void {
  }

  home(){
  	this.router.navigateByUrl('/home')
  }

}

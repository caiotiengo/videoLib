import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	public allList:any =[];

  constructor(private router: Router) { 

		  this.allList=[{
		      		video:'First video',
		      		source:'/assets/GSK_Our_story.mp4',
		      		description:'This is a Demo Video',
		      		id:1,
		      		videoArea:'Respiratory'
		   		 },{
		      		video:'Secound Video',
		      		source:'/assets/GSK_Our_story.mp4',
		      		description:'This is a Demo Video',
		      		id:2,
		      		videoArea:'Oncologist'
		   		 },{
		      		video:'Third Video',
		      		source:'/assets/GSK_Our_story.mp4',
		      		description:'This is a Demo Video',
		      		id:3,
		      		videoArea:'Respiratory'
		    		}];

    	}

  ngOnInit(): void {
  }

  videos(){
  	this.router.navigateByUrl('/list')
  }
}

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

  home(){
  	this.router.navigateByUrl('/home')
  }
  videos(){

  }

}

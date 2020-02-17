import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
 import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  	videos: any = [];
  @ViewChild('uname') resultado;
  	code
	public allList:any =[];
	usuario
	result: any = [];
    videosSF: any = [];

  constructor(private router: Router,private http: HttpClient) { 
  	      this.usuario = JSON.parse(localStorage.getItem('user'))

  	 this.data().then(data => {
      this.result = data.valueOf();
      console.log(this.result.videos);
      this.videos = this.result.videos;
      
    });


  }

  data(){
    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': 'cf003685795b4f709d6c1e3b745f86ca'


       })
      return new Promise(resolve => {
      this.http.get<any[]>('https://gskvideolib.azure-api.net/videos').subscribe(data => {
        resolve(data);
        console.log(data);
        this.videos = data;
      }, err => {
        console.log(err);
      });
    });
    }
  ngOnInit(): void {
  }

  home(){
  	this.router.navigateByUrl('/home')
  }
  filtro(codigo: any){
  	if(localStorage.getItem('opc') == undefined){
  		  	this.code = localStorage.setItem('opc', codigo)
  	}else{
  		  	localStorage.removeItem('opc')
  		  this.code =	localStorage.setItem('opc', codigo)
  	}
  	console.log(codigo)

  }

}

import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';
 import { HttpClient, HttpHeaders} from '@angular/common/http';
 import {VideoComponent} from '../video/video.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  	videos: any = [];
  @ViewChild('uname') resultado;
  	code
	allList:any =[];
	usuario
	result: any = [];
  division: any = [];

      videosSF: any = [];
      filtrei
      opc
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private router: Router,public dialog: MatDialog,private http: HttpClient) { 
  	 this.usuario = JSON.parse(localStorage.getItem('user'))

  	 this.data1().then(data => {
      this.result = data.valueOf();
      console.log(this.result.videos);
      this.filtrei = this.result.videos;
    
    });
     this.division = JSON.parse(localStorage.getItem('divisions'));
  }
info(items:any): void{
    let dialogRef = this.dialog.open(VideoComponent, {
      height: '100%',
      width: '100%',
      data: {    Pais: items.Pais,
                 Codigo_de_Division: items.Codigo_de_Division,
                 Nombre_del_video: items.Nombre_del_video,
                 division_description: items.division_description,
                 Description: items.Description,
                 Root: items.Root,
                 URL: items.URL
               }
      });
    console.log(items)
  }


  data1(){
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
    data2(){
    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': 'cf003685795b4f709d6c1e3b745f86ca'


       })
      return new Promise(resolve => {
      this.http.get<any[]>('https://gskvideolib.azure-api.net/division').subscribe(data => {
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

  var videos = this.result.videos;
      console.log(videos)
          if(videos.filter(i => i.division_description === codigo)){
               this.filtrei = videos.filter(i => i.division_description === codigo);
                
      }else{
       this.filtrei = this.result.videos;

      }

       
    console.log(codigo)


  }

}

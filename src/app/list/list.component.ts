import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';
 import { HttpClient, HttpHeaders} from '@angular/common/http';
 import {VideoComponent} from '../video/video.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  	videos: any = [];
  @ViewChild('uname') resultado;
    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  	code
	allList:any =[];
	usuario
	result: any = [];
  division: any = [];
  divisions: any = [];
  produtos: any = [];
  videosSF: any = [];
  filtrei
  filtrai
  opc
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private router: Router,public dialog: MatDialog,private http: HttpClient) { 
  	 this.usuario = JSON.parse(localStorage.getItem('user'))
     this.produtos = JSON.parse(localStorage.getItem('produtos'));
     console.log(this.produtos)
     if(localStorage.getItem('videos') == null){
           this.data1().then(data => {
              this.result = data.valueOf();
              console.log(this.result.videos);
              this.filtrei = this.result.videos;
    
        });
         
       }else{
          this.filtrei = JSON.parse(localStorage.getItem('videos'))
          console.log(this.filtrei)
          this.filtrai = this.filtrei

       }

     this.divisions = JSON.parse(localStorage.getItem('divisions'));
     this.division = this.divisions.sort((A, B) => A.Descripcion_de_Division - B.Descripcion_de_Division);
     console.log(this.division)
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
                 URL: items.URL,
                 usuario: this.usuario.Nombre_del_representa,
                 mudId: this.usuario.MudId,
                 disclaimer: items.disclaimer
               }
      });
   // console.log(items)
        localStorage.removeItem('percentual')

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

  var videos = this.filtrei;
      console.log(videos)
          if(videos.filter(i => i.Codigo_de_Division === codigo)){
               this.filtrai = videos.filter(i => i.Codigo_de_Division === codigo);
                
      }else{
       this.filtrai = this.filtrei;

      }

       
    console.log(codigo)


  }

}

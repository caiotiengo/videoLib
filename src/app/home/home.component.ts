import { Component, OnInit , Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';
import {Pipe} from '@angular/core'
import {DbService} from '../db.service'
import {User} from "../User";
import {ListComponent} from "../list/list.component"
import {VideoComponent} from '../video/video.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


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
  division: any =[];
  videosSF: any = [];
  filtrei
  video

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialog: MatDialog,private router: Router,private sanitizer: DomSanitizer, private db: DbService) { 
      this.usuario = JSON.parse(localStorage.getItem('user'))
      this.division = JSON.parse(localStorage.getItem('division'));
      console.log(this.usuario)
       this.db.data().then(data => {
      this.result = data.valueOf();
      console.log(this.result.videos);
      this.filtrei = this.result.videos;
       localStorage.setItem('videos', JSON.stringify(this.videos));
      });
   this.division = [{
       Codigo_de_Division: "CR_PruebaMAC",
       Descripcion_de_Division: "Prueba de Maurcio FV 1",
       Pais: "CR"
       }, {
       Codigo_de_Division: "CR_PruebaMAC2",
       Descripcion_de_Division: "Prueba de Maurcio FV 2",
       Pais: "CR"
       }, {
       Codigo_de_Division: "BR_ForcaVentas_1",
       Descripcion_de_Division: "Forca Ventas Caio 1",
       Pais: "BR"
       }, {
       Codigo_de_Division: "BR_ForcaVentas_2",
       Descripcion_de_Division: "Forca Ventas Caio 2",
       Pais: "BR"
       }, {
       Codigo_de_Division: "BR_ForcaVentas_3",
       Descripcion_de_Division: "Forca Ventas Eric 3",
       Pais: "BR"
       }]

       //this.filtrei = JSON.parse(localStorage.getItem('videos'));
       //console.log(this.filtrei)
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
}

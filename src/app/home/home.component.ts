import { Component, OnInit , Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';
import {Pipe} from '@angular/core'
import {DbService} from '../db.service'
import {User} from "../User";
import {ListComponent} from "../list/list.component"
import {VideoComponent} from '../video/video.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgGoogleAnalyticsTracker } from 'ng-google-analytics';
import { MatMenuTrigger } from '@angular/material/menu';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
      @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
 @ViewChild('passcode') uname;
	public allList:any =[];
  result: any = [];
	link
  usuario: any =[];
  user
  views: any = [];

  videos: any = [];
  produtos: any = [];

  division: any =[];
  divisions: any =[];
  codigo: any =[]

  videosSF: any = [];
    divisionUser: any = [];
     tag: any = [];
  area: any = [];
    lista :any =[]
  filtrei
  filtrai
  video
dividiu:any = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialog: MatDialog,public googleAnalyticsService: NgGoogleAnalyticsTracker,private router: Router,private sanitizer: DomSanitizer, 
    private db: DbService) { 
      this.usuario = JSON.parse(localStorage.getItem('user'))
      this.divisions = JSON.parse(localStorage.getItem('divisions'));
      this.videos = JSON.parse(localStorage.getItem('videos'));
      this.produtos = JSON.parse(localStorage.getItem('produtos'));
      console.log(this.usuario)
      console.log(this.division)
      console.log(this.videos)
      console.log(this.produtos)

       //this.filtrei = JSON.parse(localStorage.getItem('videos'));
       //console.log(this.filtrei)
       
       this.divisionUser = this.divisions.filter(i => i.Codigo_de_Division === this.usuario.Codigo_de_Division)
       console.log(this.divisionUser)
       console.log(this.divisionUser.length)

       if(this.divisionUser.length > 1){
         this.dividiu = this.divisionUser[0]
          console.log(this.dividiu)

       }else{
        this.dividiu = this.divisionUser
       }

     
       this.filtrai = this.videos
       this.division = this.divisions.sort((a, b) => b.index - a.index);
       
       this.codigo = this.produtos
    
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



   filtri(codigo: any){

      var videos = this.videos;
      console.log(videos)
          if(videos.filter(i => i.Codigo_de_Division === codigo)){
               this.filtrai = videos.filter(i => i.Codigo_de_Division === codigo);
               this.codigo = this.produtos.filter(i => i.Codigo_de_Division === codigo);
               console.log(this.codigo)
               console.log(this.filtrai)
      }else{
              this.filtrai = this.videos;

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
                 URL: items.URL,
                 usuario: this.usuario.Nombre_del_representa,
                 mudId: this.usuario.MudId,
                 disclaimer: items.disclaimer,
                 area_terapeutica: items.area_terapeutica,
                 link_produto: items.link_produto,
                 info_txt: items.info_txt
               }
      });
    localStorage.setItem('video', JSON.stringify(dialogRef.componentInstance.data))
    //console.log(dialogRef.componentInstance.data)
    this.views = JSON.parse(localStorage.getItem('video')) 
    localStorage.removeItem('percentual')
//    this.googleAnalyticsService.eventTracker("video", dialogRef.componentInstance.data.Nombre_del_video,  dialogRef.componentInstance.data.usuario )
  }
 filtro(codigo: any){

  var videos = this.filtrai;
      console.log(videos)
      this.tag = videos.filter(i => String(i.tags.toUpperCase()).indexOf(this.uname.nativeElement.value.toUpperCase()) >= 0 )
      this.area = videos.filter(i => String(i.area_terapeutica.toUpperCase()).indexOf(this.uname.nativeElement.value.toUpperCase()) >= 0 )
      console.log("Resultado em tag" + JSON.stringify(this.tag))
      console.log("Rsultado em area" + JSON.stringify(this.area))
      if(JSON.stringify(this.area) == '[]'){
          this.filtrai =  this.tag
          if(JSON.stringify(this.tag) == '[]'){
             this.filtrai =  this.area
            if(JSON.stringify(this.tag) && JSON.stringify(this.area) == '[]'){
              this.filtrai
              alert('0 Results')
            }
          }
      }else{
        this.filtrai = videos.filter(i => String(i.tags.toUpperCase()).indexOf(this.uname.nativeElement.value.toUpperCase())
         >= 0 ) && videos.filter(i => String(i.area_terapeutica.toUpperCase()).indexOf(this.uname.nativeElement.value.toUpperCase()) >= 0 )
        console.log("tem os dois" + this.filtrai)

      }
      
    console.log(codigo)


  }
}

import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { NgGoogleAnalyticsTracker } from 'ng-google-analytics';
import {InfoComponent} from '../info/info.component';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
   percentual: number;
   current
   currentTime: number;
   views: any = [];
   timePercentual
   percentage
   date
   usuarioView = [];
   dadoOffline:any = []
   Offline:any = []
   
  constructor(public dialogRef: MatDialogRef<VideoComponent>,@Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog, public googleAnalyticsService: NgGoogleAnalyticsTracker,
    private http: HttpClient) {
    let mainVideo = <HTMLMediaElement>document.getElementById('mainVideo');
    this.views = JSON.parse(localStorage.getItem('video')) 
    console.log(this.views)
    //console.log(this.percentual)

    var date = new Date()
    this.date = date.getDate()+'/'+date.getUTCMonth()+'/'+date.getFullYear()
    console.log(this.date)
   }

  ngOnInit(): void {
  }
  pause(){

  }
   close(){
        this.dialogRef.close('Pizza!');
          // area terapeutica do video no analytics
          //calculo de porcentagem
          //
            this.percentage = localStorage.getItem('percentual')
            
        
               this.googleAnalyticsService.eventTracker(this.views.Nombre_del_video + ';'+
                 'Pais:'+ this.views.Pais, 'Area_Terapeutica:'+ 
                 this.views.area_terapeutica, 'User:' + 
                 this.views.usuario + '; ' + 'Mud ID:' + this.views.mudId + ';' + 'Date:' + this.date , Number(this.percentage))      
          
    }

    setCurrentTime(data){

      let mainVideo = <HTMLMediaElement>document.getElementById('mainVideo');
      this.percentual = Math.round(((data.target.currentTime/data.target.duration) * 10000))/10000;

     //this.currentTime = data.target.currentTime;
     //console.log(this.currentTime)
     //console.log(data.target.duration)
      this.timePercentual = localStorage.setItem('percentual', this.percentual.toString())
      if(this.timePercentual =! null){  
          //console.log(this.timePercentual)
      }
          console.log(this.percentual)
    }

    info(items:any): void{
    let dialogRef = this.dialog.open(InfoComponent, {
      height: '100%',
      width: '100%',
      data: { info_txt: items.info_txt}
      });
    this.googleAnalyticsService.eventTracker("video", dialogRef.componentInstance.data.Nombre_del_video, 
     dialogRef.componentInstance.data.usuario )
  }
    
}

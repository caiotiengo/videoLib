import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { NgGoogleAnalyticsTracker } from 'ng-google-analytics';
import {InfoComponent} from '../info/info.component';

declare var gtag;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
   percentual: number;
   current
   duration
   currentTime: number;
   views: any = [];
   timePercentual
   percentage
   fullTime
   date
   usuarioView = [];
   dadoOffline:any = []
   Offline:any = []
   
    disclaimerVideo: any =[]
   
  constructor(public dialogRef: MatDialogRef<VideoComponent>,@Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog, public googleAnalyticsService: NgGoogleAnalyticsTracker,
    private http: HttpClient) {
    let mainVideo = <HTMLMediaElement>document.getElementById('mainVideo');
    //console.log(this.views)
    //console.log(mainVideo)
    //console.log(dialogRef.componentInstance.data)
//    console.log(this.disclaimers)
    setTimeout(function(){
          this.views = JSON.parse(localStorage.getItem('video'));
          // console.log(this.views.Pais)

        },200)

    var date = new Date()
    this.date = date.getDate()+'/'+date.getUTCMonth()+'/'+date.getFullYear()
   // console.log(this.date)


   }

  ngOnInit(): void {
  }
  pause(){

  }
   close(){
   
this.views = JSON.parse(localStorage.getItem('video'));
           console.log(this.views)
        this.dialogRef.close('Pizza!');
          // area terapeutica do video no analytics
          //calculo de porcentagem
          //
            this.percentage = localStorage.getItem('percentual')
            
        /*
               this.googleAnalyticsService.eventTracker(this.views.Nombre_del_video + ';'+
                 'Pais:'+ this.views.Pais, 'Area_Terapeutica:'+ 
                 this.views.area_terapeutica, 'User:' + 
                 this.views.usuario + '; ' + 'Mud ID:' + this.views.mudId + ';' + 'Date:' + this.date , Number(this.percentage))

        */
          if(this.percentage >= 1){
            this.googleAnalyticsService.eventTracker(this.views.Nombre_del_video + ' ; '
             + this.views.Pais, this.percentage+'%' +' ; '+ this.duration +' ; '+
              this.fullTime, this.views.mudId + ' ; ' + this.views.usuario+ ' ; '+ this.views.area_terapeutica)
                 console.log(Number(this.percentage))     
                 console.log(this.views.Nombre_del_video)     
                 localStorage.clear()

          }else if(this.percentage = 0){
            console.log("0 percentage")
          }
          
    }
   /* downloadFile(data: Response) {
      const blob = new Blob(this.views.URL, { type: '.mp4' });
      const url= window.URL.createObjectURL(blob);
      window.open(url);
    }*/

    setCurrentTime(data){
      let mainVideo = <HTMLMediaElement>document.getElementById('mainVideo');
      this.percentual = Math.round(((data.target.currentTime/data.target.duration) * 100));


     this.currentTime = data.target.currentTime
    // console.log(this.currentTime)
    // console.log(data.target.duration)
      var Fminutes = Math.floor(data.target.duration / 60);
      var Fseconds = Math.floor(data.target.duration - Fminutes * 60);
      var minutes = Math.floor(this.currentTime / 60);
      var seconds = Math.floor(this.currentTime - minutes * 60);
      if(Fseconds < 10){
          this.fullTime = Fminutes + ':0' + Fseconds;

      }else{
        this.fullTime = Fminutes + ':' + Fseconds;
      }
      if(seconds <10){
         var tempo = minutes + ':0' + seconds;
      this.duration = tempo

      }else{
         var tempo = minutes + ':' + seconds;
      this.duration = tempo

      }
     // console.log(this.fullTime)
     // console.log(tempo)
      this.timePercentual = localStorage.setItem('percentual', this.percentual.toString());
      if(this.timePercentual =! null){  
          console.log(this.timePercentual)
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

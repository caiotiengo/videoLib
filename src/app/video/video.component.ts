import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { NgGoogleAnalyticsTracker } from 'ng-google-analytics';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
   percentual: string;
   current
   currentTime: number;
   views: any = [];
   timePercentual
   percentage
   date
   
  constructor(public dialogRef: MatDialogRef<VideoComponent>,@Inject(MAT_DIALOG_DATA) public data: any,public googleAnalyticsService: NgGoogleAnalyticsTracker,
    private http: HttpClient) {
    let mainVideo = <HTMLMediaElement>document.getElementById('mainVideo');
    this.views = JSON.parse(localStorage.getItem('video')) 
    console.log(this.views)
    console.log(this.percentual)

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
            this.percentage = localStorage.getItem('percentual')
            console.log(this.percentage)
            this.googleAnalyticsService.eventTracker(this.views.Nombre_del_video, this.percentage, 'User:' + this.views.usuario + ', ' + 'Mud ID:' + this.views.mudId + ', ' + 'Date:' + this.date )
            //console.log(this.googleAnalyticsService.eventTracker(this.views.Nombre_del_video, this.percentage, 'User:' + this.views.usuario + ', ' + 'Mud ID:' + this.views.mudId + ', ' + 'Date:' + this.date ))
    
    }

    setCurrentTime(data){

      let mainVideo = <HTMLMediaElement>document.getElementById('mainVideo');
      this.percentual = Math.floor(((data.target.currentTime/mainVideo.duration) *100)) + '%';

     //     this.currentTime = data.target.currentTime;
    // console.log(this.currentTime)
      this.timePercentual = localStorage.setItem('percentual', this.percentual)
      console.log(this.percentual)
      

    }
    
}

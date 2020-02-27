import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<VideoComponent>,@Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient) {

   }

  ngOnInit(): void {
  }
  pause(){
    let mainVideo = <HTMLMediaElement>document.getElementById('mainVideo');
    mainVideo.pause()
    console.log('conta play')
  }
   close(){
        this.dialogRef.close('Pizza!');

    }
    
}

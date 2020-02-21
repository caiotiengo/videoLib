import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<VideoComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {



   }

  ngOnInit(): void {
  }


		close(){
    		this.dialogRef.close('Pizza!');

		}
}

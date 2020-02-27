import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Video} from './Video'
@Injectable({
  providedIn: 'root'
})
export class DbService {
  users: any = [];
  videos: any = [];
  views: any = [];
  constructor(private http: HttpClient) {


  }
data2(video: Video){
    console.log(video)
   /* var headers = new HttpHeaders();
    headers.add('Access-Control-Allow-Origin', '*')
    const httpOptions = {
         headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Ocp-Apim-Subscription-Key': 'cf003685795b4f709d6c1e3b745f86ca',
          'Access-Control-Allow-Origin': '*'
        })

    };*/

    this.http.post<Video[]>('https://cors-anywhere.herokuapp.com/'+'https://gskvideolib.azure-api.net/views:433/',video).subscribe(
        (val) => {
            console.log("POST call successful value returned in body", val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
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
  

}

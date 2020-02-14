import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DbService {
  users: any = [];

  constructor(private http: HttpClient) {

  		

  }

  	data(){
  	const headers = new HttpHeaders({
  		'Ocp-Apim-Subscription-Key': 'cf003685795b4f709d6c1e3b745f86ca'


  		 })
  	  return new Promise(resolve => {
      this.http.get<any[]>('https://gskvideolib.azure-api.net/users').subscribe(data => {
        resolve(data);
        console.log(data);
        this.users = data;
      }, err => {
        console.log(err);
      });
    });
  	}
  /*

		rxemwtech.database.windows.net
		emwadmin
		E#Mwadmin

  */

  getUser(){
  }
}

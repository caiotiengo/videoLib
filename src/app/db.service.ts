import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  users: any = [];

  constructor(private http: HttpClient) {

  		

  }

  	data(){
  			return new Promise(resolve => {
      this.http.get<any[]>('../assets/codebeautify.json').subscribe(data => {
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

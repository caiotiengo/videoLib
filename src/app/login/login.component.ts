import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {DbService} from '../db.service'
import {User} from "../User";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('passcode') uname;

  user = {} as User;
  result: any = [];
  users: any = [];	
  mudId	
  usuario: any =[];
  constructor(private router: Router, private db: DbService,private http: HttpClient) { 



	this.data().then(data => {
      this.result = data.valueOf();
      console.log(this.result.users[0].MUD_ID);
      this.users = this.result.users;
    });
  


  }

  ngOnInit(): void {
  }
  entrar(){
    console.log(this.uname.nativeElement.value)
     if(this.result.users.find(i => i.MudId === this.uname.nativeElement.value)){
       this.usuario = this.result.users.find(i => i.MudId === this.uname.nativeElement.value);
       console.log(this.usuario)
       localStorage.setItem('user', JSON.stringify(this.usuario))  
           this.router.navigateByUrl('/home')
    console.log('foi')
    }else{
    console.log('mentira')
  }
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
}

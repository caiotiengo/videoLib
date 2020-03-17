import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {DbService} from '../db.service'
import {User} from "../User";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { interval, Subscription } from 'rxjs';
import { ConnectionService } from 'ng-connection-service';
import { Observable, Observer, fromEvent, merge } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('passcode') uname;

  user = {} as User;
  result: any = [];
  result2: any = [];
  result3: any = [];
  result4: any = [];

  status = '';
  users: any = [];	
  mudId	
  usuario: any =[];
  produtos:any =[];
  divisions: any =[];
  divisoes: any =[];
  videos: any =[];

  shouldDisable=true;
  curSec: number = 0;
  showLoading = false;

  constructor(private router: Router,private connectionService: ConnectionService, private db: DbService,private http: HttpClient) { 
     //30 seconds
 setTimeout(x => {
                  this.shouldDisable=false;
                  this.showLoading = true;
                }, 2000)
       this.connectionService.monitor().subscribe(connect =>{
         this.status = connect ? 'internet ativa': 'internet desativada';
         console.log(this.status)
       })

       if(localStorage.getItem('users') == null){
           this.data().then(data => {
              this.result = data.valueOf();
              console.log(this.result.users[0].MUD_ID);
              this.users = this.result.users;
              localStorage.setItem('users', JSON.stringify(this.users))
               
          });
       }else{
          this.users = JSON.parse(localStorage.getItem('users'))
          console.log(this.users)
       }

       if(localStorage.getItem('divisions') == null){
           this.data2().then(data =>{
              this.result2 = data.valueOf();
              console.log(this.result2.division)
              this.divisions = this.result2.division.sort((A, B) => A.Descripcion_de_Division - B.Descripcion_de_Division);
              localStorage.setItem('divisions', JSON.stringify(this.divisions))
         });
       }else{
          this.divisions = JSON.parse(localStorage.getItem('divisions'))
          console.log(this.divisions)
       }
        
       if(localStorage.getItem('videos') == null){
           this.data3().then(data =>{
              this.result3 = data.valueOf();
              console.log(this.result3.videos)
              this.videos = this.result3.videos
              localStorage.setItem('videos', JSON.stringify(this.videos))
          })
         
       }else{
          this.videos = JSON.parse(localStorage.getItem('videos'))
          console.log(this.videos)
       }
    
     if(localStorage.getItem('produtos') == null){
           this.data4().then(data =>{
              this.result4 = data.valueOf();
              console.log(this.result4.produtos)
              this.produtos = this.result4.produtos
              localStorage.setItem('produtos', JSON.stringify(this.produtos))
          })
         
       }else{
          this.produtos = JSON.parse(localStorage.getItem('produtos'));
          console.log(this.produtos)
       }
    

   

  }

  ngOnInit(): void {

  }

  entrar(){
       

    console.log(this.uname.nativeElement.value)
     if(this.users.find(i => i.MudId === this.uname.nativeElement.value.toUpperCase())){
       this.usuario = this.users.find(i => i.MudId === this.uname.nativeElement.value.toUpperCase());
       console.log(this.usuario)
       localStorage.setItem('user', JSON.stringify(this.usuario))  
           this.router.navigateByUrl('/home')
       localStorage.setItem('division', JSON.stringify(this.usuario.Codigo_de_Division))    
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

    data2(){

    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': 'cf003685795b4f709d6c1e3b745f86ca'


       })
      return new Promise(resolve => {
      this.http.get<any[]>('https://gskvideolib.azure-api.net/division').subscribe(data => {
        resolve(data);
        console.log(data);
        this.divisoes = data;
      }, err => {
        console.log(err);
      });
    });
    }
 


data3(){

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


data4(){

    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': 'cf003685795b4f709d6c1e3b745f86ca'


       })
      return new Promise(resolve => {
      this.http.get<any[]>('https://gskvideolib.azure-api.net/produtos').subscribe(data => {
        resolve(data);
        console.log(data);
        this.produtos = data;
      }, err => {
        console.log(err);
      });
    });
    }

}

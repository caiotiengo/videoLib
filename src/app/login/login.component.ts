import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DbService} from '../db.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

//  user = {} as User;
  result: any = [];
  users: any = [];	
  mudId	
  constructor(private router: Router, private db: DbService) { 


	this.db.data().then(data => {
      this.result = data.valueOf();
      console.log(this.result.users);
      this.users = this.result.users;
    });
  
	//this.mudId = this.result.users.find(i => i.MUD_ID === users.MUD_ID.valueOf())

  }

  ngOnInit(): void {
  }
  entrar(){
  	this.router.navigateByUrl('/home')
  }
}

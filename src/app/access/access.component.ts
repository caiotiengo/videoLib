import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {

  constructor(private router: Router) { 

 	var txt;
  	var person = prompt("Digite o código de acesso:", "");
  	if (person == null || person == "") {
  	  alert("You don't have access to this website. Please contact the administrator. ")
		window.location.href = 'https://myconnect.gsk.com/';

  	} else if(person == "GSK123" || person == "gsk123") {
   	 	this.router.navigateByUrl('/login')
  	}else {
  		  	  alert("You don't have access to this website. Please contact the administrator. ")

  	 	window.location.href = 'https://myconnect.gsk.com/';

  	}
  }

  ngOnInit(): void {
  }

}

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
    const isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent)
    console.log(isIEOrEdge)
  	var person = prompt("Digite o código de acesso:", "");
  	if (person == null || person == "") {
  	  alert("You don't have access to this website. Please contact the administrator. ")
		//window.location.href = 'https://myconnect.gsk.com/';

  	} else if(person.toUpperCase() == "GSK123") {
   	 	this.router.navigateByUrl('/login')
  	}else {
  		  	  alert("You don't have access to this website. Please contact the administrator. ")

  	 	window.location.href = 'https://myconnect.gsk.com/';

  	}
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit , Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';
import {Pipe} from '@angular/core'
import {DbService} from '../db.service'
import {User} from "../User";
import {ListComponent} from "../list/list.component"
import {VideoComponent} from '../video/video.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgGoogleAnalyticsTracker } from 'ng-google-analytics';
import { MatMenuTrigger } from '@angular/material/menu';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
      @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
 @ViewChild('passcode') uname;
	public allList:any =[];
  result: any = [];
	link
  usuario: any =[];
  user
  views: any = [];
  videos: any = [];
  produtos: any = [];
  division: any =[];
  divisions: any =[];
  codigo: any =[]
  videosSF: any = [];
  divisionUser: any = [];
  tag: any = [];
  area: any = [];
  lista :any =[]
  filtrei
  mymodel
  filtrai
  video
  dividiu:any = [];
  disclaimers = [
        {
            "Pais": "BR",
            "disclaimer": "Material destinado exclusivamente para profissionais de saúde habilitados a prescrever ou dispensar medicamentos. Recomenda-se a leitura da bula e da monografia do produto, antes da prescrição de qualquer medicamento. A bula completa do medicamento e outras informações estão à disposição sob solicitação ao departamento de Informações Médicas (DDG 0800 701 22 33). Para notificar informações de segurança, incluindo eventos adversos ocorridos durante o uso de medicamentos da GlaxoSmithKline/Stiefel, entre em contato diretamente com o Departamento de Farmacovigilância da empresa pelo e-mail farmacovigilancia@gsk.com ou através do representante do grupo de empresas GSK. As marcas registradas pertencem ou são licenciadas ao grupo de empresas GSK.Este vídeo é de propriedade GSK, a reprodução deste é proibida sem o consentimento da empresa. Estrada dos Bandeirantes, 8464 - Jacarepaguá – Rio de Janeiro – RJ - CEP: 22783-110 - CNPJ: 33247743/0001-10."
        },
        {
            "Pais": "AR",
            "disclaimer": "La información para prescribir completa está disponible a pedido en la Dirección Médica de GlaxoSmithKline Argentina S.A Carlos Casares 3690 B1644BCD – Victoria – Bs. As. Tel.: 011-4725-8900.Para reportar eventos adversos por favor comunicarse a los teléfonos 0800-220-4752 / 011-4725-8900.Este material está destinado exclusivamente para uso de los Médicos/profesionales de la salud"
        },
        {
            "Pais": "CR",
            "disclaimer": "Elaborado por GSK. Para mayor información, reporte de eventos adversos o quejas de producto contacte a GSK al correo electronico fv.aecaricam@gsk.com o a los teléfonos: Costa Rica: (506)4055-4242 • El Salvador: (503)2136-7801, Guatemala: (502)2376-1930 • Nicaragua: (505) 27222215 • Panamá: (507)833-6768 • Honduras: (504)2540-1638 • República Dominicana: +1 (829) 956-6335. Oficinas GSK, Oceania Business Plaza Torre 1000 piso 34, Panamá, República de Panamá, C.A. Derechos reservados para GSK. La información para prescribir completa está disponible a solicitud del profesional de la salud. Este medicamento requiere receta médica.  Marcas registradas son propiedad y/o licenciadas por el grupo de Compañías GSK. Material exclusivo para profesionales de la salud. "
        },
        {
            "Pais": "ES",
            "disclaimer": "Elaborado por GSK. Para mayor información, reporte de eventos adversos o quejas de producto contacte a GSK al correo electronico fv.aecaricam@gsk.com o a los teléfonos: Costa Rica: (506)4055-4242 • El Salvador: (503)2136-7801, Guatemala: (502)2376-1930 • Nicaragua: (505) 27222215 • Panamá: (507)833-6768 • Honduras: (504)2540-1638 • República Dominicana: +1 (829) 956-6335. Oficinas GSK, Oceania Business Plaza Torre 1000 piso 34, Panamá, República de Panamá, C.A. Derechos reservados para GSK. La información para prescribir completa está disponible a solicitud del profesional de la salud. Este medicamento requiere receta médica.  Marcas registradas son propiedad y/o licenciadas por el grupo de Compañías GSK. Material exclusivo para profesionales de la salud. "
        },
        {
            "Pais": "CO",
            "disclaimer": "Si usted desea mayor información o  reportar una situación clínica desfavorable ocurrida durante el uso de un producto de GlaxoSmithKline, favor comunicarse al teléfono 01 8000 11 86 86, o a través de página web  GSKpro https://gskpro.com/es-co/report-adverse-event/ o escribir al correo electrónico: programa.dirmedica@gsk.com. GlaxoSmithKline Colombia S.A., Calle 26 # 69B-45 Edificio Bogotá Corporate Center Piso 9. Solicite mayor información científica de nuestros productos en nuestro servicio de información médica, a través del email mila@gsk.com. Este material es de uso exclusivo para profesionales de la salud."
        },
        {
            "Pais": "LSP",
            "disclaimer": "La información para prescribir completa de nuestros productos se encuentra disponible en nuestra página web: Chile: www.gskpro.com/es-cl. Ecuador: www.gskpro.com/es-ec. Perú: www.gskpro.com/es-pe. Mayor información de nuestros productos disponible a través de nuestro servicio de información médica: mila@gsk.com. \r\nPara reportar eventos adversos o quejas de producto contacte a GSK a los teléfonos/e-mail: Chile: (56-2) 23829000 opción 4 o al correo electrónico farmacovigilancia.chile@gsk.com. Ecuador: (593-2) 2994700 extensión 5 o al correo electrónico farmacovigilancia.ecuador@gsk.com. Perú (51-1)2119700 o al correo electrónico farmacovigilancia.peru@gsk.com. Direcciones: GlaxoSmithKline Chile Ltda.: Andrés Bello 2687 Piso 19, Las Condes, Santiago. GlaxoSmithKline Ecuador S.A.: Edificio Electroecuatoriana, Av. 10 de Agosto y Naciones Unidas, Quito. GlaxoSmithKline Perú S.A.: Av. Javier Prado Oeste 995, Lima-Perú. \r\nDerechos reservados para GSK. La reproducción completa o parcial de este material está prohibida. Material exclusivo para entregar a profesionales de la salud que ejercen en Chile y/o Ecuador. Material exclusivo para entregar a profesionales de la salud que prescriben en Perú. © 2020 Grupo de Compañías GSK."
        },
        {
            "Pais": "MX",
            "disclaimer": "Para consultar la información para prescribir favor de dirigirse al sitio https://gskpro.com. También puede solicitarla al teléfono 800 APOYAME (276-9263) o directamente al representante médico que lo visita. Favor de reportar cualquier sospecha de reacción adversa o queja de producto al 800APOYAME (276-9263) y/o farmacovigilancia.mx@gsk.com \r\nFecha de preparación: XXXX/2020  Reg. No. XXXXXX  No. Doc. Content Lab: XXXXXXXX Aviso N° Entrada: XXXXXXXX. GlaxoSmithKline México, S.A de C.V, Calz. México-Xochimilco N° 4900, Col. San Lorenzo Huipulco, CP.14370, Tlalpan, Ciudad de México. Las marcas son propiedad de o licenciadas al grupo de compañías GSK © 2020 Grupo de compañías GSK o sus licenciantes. "
        },
        {
            "Pais": "UR",
            "disclaimer": "La información para prescribir completa se obtiene solicitándolo a Departamento Médico de GlaxoSmithKline Uruguay S.A. Salto 1105, Montevideo, Uruguay. Este material está destinado exclusivamente para uso de los médicos.\r\nFarmacovigilancia: ante el conocimiento de un posible evento adverso con alguno de los productos de GlaxoSmithKline, comunicarse con nuestro Departamento Médico al 24198333 int 182 ó uy.farmacovigilancia@gsk.com.\r\nDerechos de Autor©2020 del Grupo de Compañías GlaxoSmithKline.\r\nLas marcas mencionadas son Marcas Registradas del Grupo de Compañías GlaxoSmithKline."
        }]

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialog: MatDialog,public googleAnalyticsService: NgGoogleAnalyticsTracker,private router: Router,private sanitizer: DomSanitizer, 
    private db: DbService) { 
      this.usuario = JSON.parse(localStorage.getItem('user'))
      this.divisions = JSON.parse(localStorage.getItem('divisions'));
      this.videos = JSON.parse(localStorage.getItem('videos'));
      this.produtos = JSON.parse(localStorage.getItem('produtos'));
     // console.log(this.usuario)
   //   console.log(this.division)
     // console.log(this.videos)
     // console.log(this.produtos)
     // console.log(this.disclaimers.find(i=> i.Pais === this.usuario.Pais))
       //this.filtrei = JSON.parse(localStorage.getItem('videos'));
       //console.log(this.filtrei)
       
       this.divisionUser = this.divisions.filter(i => i.Codigo_de_Division === this.usuario.Codigo_de_Division)
       //console.log(this.divisionUser.map(i => {return i.Descripcion_de_Division}))
        this.dividiu = this.divisionUser.map(i => {return i.Descripcion_de_Division})
        var videosUsuario = this.videos.filter(i => this.dividiu.includes(i.area_terapeutica))
       // console.log(videosUsuario)
     
      
       this.filtrai = videosUsuario
       this.division = this.divisions.sort((a, b) => b.index - a.index);
       
       this.codigo = this.produtos
    
  }


  ngOnInit(): void {
  }
  transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);            
  }
  cordiv(){
    let mainVideo = <HTMLMediaElement>document.getElementById('mainVideo');
    mainVideo.autoplay = false;
  	mainVideo.load();
  	console.log('conta play')
  }
    home(){
  	this.router.navigateByUrl('/home')
  }
  
  videoss(){
  	this.router.navigateByUrl('/list')
  }



   filtri(codigo: any){

      var videos = this.videos;
      console.log(videos)
          if(videos.filter(i => i.Codigo_de_Division === codigo)){
               this.filtrai = videos.filter(i => i.Codigo_de_Division === codigo);
               this.codigo = this.produtos.filter(i => i.Codigo_de_Division === codigo);
               console.log(this.codigo)
               console.log(this.filtrai)
      }else{
              this.filtrai = this.videos;

      }

       
    //console.log(codigo)

  }

  info(items:any): void{
     var disclaimer = this.disclaimers.find(i=> i.Pais === this.usuario.Pais)


    let dialogRef = this.dialog.open(VideoComponent, {
      height: '100%',
      width: '100%',
      data: {    Pais: items.Pais,
                 Codigo_de_Division: items.Codigo_de_Division,
                 Nombre_del_video: items.Nombre_del_video,
                 division_description: items.division_description,
                 Root: items.Root,
                 URL: items.URL,
                 usuario: this.usuario.Nombre_del_representa,
                 mudId: this.usuario.MudId,
                 area_terapeutica: items.area_terapeutica,
                 link_produto: items.link_produto,
                 disclaimer: disclaimer.disclaimer
               }
      });
    localStorage.setItem('video', JSON.stringify(dialogRef.componentInstance.data))
  //  console.log(dialogRef.componentInstance.data)
    this.views = localStorage.getItem('video') 
    localStorage.removeItem('percentual')
  }
 filtro(event: any){
     this.dividiu = this.divisionUser.map(i => {return i.Descripcion_de_Division})
        var videosUsuario = this.videos.filter(i => this.dividiu.includes(i.area_terapeutica))
//        console.log(videosUsuario)

     this.area = videosUsuario.filter(i => 
       String(i.area_terapeutica.toUpperCase()).indexOf(event.target.value.toUpperCase()) >= 0 )
     this.tag = videosUsuario.filter(i => String(i.tags.toUpperCase()).indexOf(event.target.value.toUpperCase()) >= 0 )
    // this.filtrai = this.tag
      if(this.filtrai != []){
         
        this.filtrai = this.area;
       // console.log(this.filtrai)
        if(this.filtrai.length == 0){
           this.filtrai = this.tag
           // console.log(this.filtrai)
        }
      }else{

       this.filtrai = videosUsuario;    
        
      }
 // console.log(JSON.stringify(this.area))
      //console.log("Rsultado em area" + JSON.stringify(this.area)) 
  //  console.log(this.area)


  }

}

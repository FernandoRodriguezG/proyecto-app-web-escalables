import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from '../serie';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-create-serie',
  templateUrl: './create-serie.component.html',
  styleUrls: ['./create-serie.component.css']
})
export class CreateSerieComponent implements OnInit {

  serie: Serie = {
    id:'',
    nombre:'',
    calificacion:0,
    plataforma:'',
    year:'',
  }

  constructor(private router: Router, private _ServerService: ServerService) { }

  ngOnInit(): void {
  }

  enviar(): void{
    console.log(this.serie);
    
      if(this.serie.nombre !== '' && this.serie.plataforma !== '' && this.serie.year !== '' && this.serie.year.length === 4){
        this._ServerService.postServer('/serie/add',this.serie).then(
          (data:any) => {
            console.log(data);
            
          }, (error:any) => {
            console.log(error);
            
          }
        )
      }else{
        console.log('false');
        
      }
  }

}

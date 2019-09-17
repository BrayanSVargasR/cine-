import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pelicula1',
  templateUrl: './pelicula1.component.html',
  styleUrls: ['./pelicula1.component.css']
})
export class Pelicula1Component implements OnInit {

  constructor() { }

  lugar:string="0";
  precio:any = "0";
  select:string[]=["CineColombia","CineMark","RoyalFilms"];
  cantidad:number=0;
  total1:number=0;
  isActive:boolean=false;

  ngOnInit() {
    
  }

  onchance(event:any){
    this.lugar=event.target.value;
    
    if (this.lugar=="CineColombia") {
      this.precio="9600";
      console.log(this.precio);   
    }
  
    if (this.lugar=="CineMark") {
      this.precio="7200";
      console.log(this.precio);  
    }
  
    if (this.lugar=="RoyalFilms") {
      this.precio="6100";
      console.log(this.precio);    
    }
  }

  totalTiquete(event:any){
    this.cantidad=event.target.value;
    this.total1=event.target.value;


    if (this.cantidad!=null) {
     this.total1=this.precio*this.cantidad;
    }
  }

isActive1(){
  this.isActive=!this.isActive;
}

  img1="/assets/img/salvaje.jpg";
  img2="/assets/img/nacion.jpg";
  fijarPrecio(){
  }
}

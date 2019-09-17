import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Pelicula1Component } from '../pelicula1/pelicula1.component';

@Component({
  selector: 'app-centro',
  templateUrl: './centro.component.html',
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  } 
  img1="./assets/img/posterborder.jpg";
  img2="./assets/img/nacion.jpg";
}

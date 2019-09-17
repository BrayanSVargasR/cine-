import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cine';
  
  isActive:boolean=true;
  isActive2:boolean=true;
  toggle():void{
    this.isActive=!this.isActive;  }
}

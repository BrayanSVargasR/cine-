import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { CentroComponent } from './centro/centro.component';
import { Pelicula1Component } from './pelicula1/pelicula1.component';
import { Pelicula2Component } from './pelicula2/pelicula2.component';


const routes:Routes=[
  {path:'home',component:CentroComponent},
  {path:'',component:CentroComponent, pathMatch:'full'},
  {path:'pelicula1',component:Pelicula1Component},
  {path:'pelicula2',component:Pelicula2Component}
]



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(
    routes
  )
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { Estudiante } from '../interfaces/Estudiante';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  //ATRIBUTOS
  public estudiantes: Estudiante[] = []

  //Quemando 5 estudiantes
  public estudiante1: Estudiante = {
    id: 1,
    nombre: "David Garcia",
    correo: "garciavelez2009@hotmail.com",
    documento: "12345",
    acudiente: {
      id: 2,
      nombres: "Pedro",
      telefonos: "2345"
    }
  }

  public estudiante2: Estudiante = {
    id: 1,
    nombre: "David Garcia",
    correo: "garciavelez2009@hotmail.com",
    documento: "12345",
    acudiente: {
      id: 3,
      nombres: "Pedro",
      telefonos: "2345"
    }
  }


  public constructor() {
    //llamamos al principio y cargamos los estudiantes

    this.estudiantes.push(this.estudiante1)
    this.estudiantes.push(this.estudiante2)
    console.log(this.estudiantes)

  }




}

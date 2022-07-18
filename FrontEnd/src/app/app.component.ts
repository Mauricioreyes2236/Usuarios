import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
listEstudiantes: any[] = [
  { nombre: 'Mauricio Reyes', status: 'Aprobado'},
  { nombre: 'Luis Reyes', status: 'Reprobado'},
  { nombre: 'Ismael Reyes', status: 'Expulsado'}
]

mostrar = true;

toogle(): void{
  this.mostrar = !this.mostrar
}

}

import { PaisesService } from './paises.service';
import { Component } from '@angular/core';
import { Pais } from './Pais';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  continents: string[] = ['europ', 'ame', 'asia', 'africa', 'oceania'];
  paises: Pais[] = [];
  paisSeleccionado: any = {};
  hayPaisSeleccionado: boolean = false;
  constructor(private paisesService: PaisesService) {}
  getPaises(continent: string): void {
    this.paises = [];
    this.paisesService.getPaises(continent).subscribe((data: any) => {
      this.paises = data;
    });
    this.hayPaisSeleccionado = false;
  }
  getPais(index: number): void {
    this.paisSeleccionado = this.paises[index];
    this.hayPaisSeleccionado = true;
  }
}

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pais } from './Pais';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  paises: any[] = [];
  constructor(private httpClient: HttpClient) {}
  getPaises(continent: string) {
    return this.httpClient.get<Pais[]>(
      environment.urlBase + 'region/' + continent
    );
  }
}
